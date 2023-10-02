import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Location from './components/Location';
import Weather from './components/Weather';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';

function App() {
  useEffect(() => {
    function updateVh() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', updateVh);
    console.log('resize');
  }, []);
  const [location, setLocation] = useState(null);
  let key = process.env.REACT_APP_API_KEY;
  let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;

  const [response, setResponse] = useState(null);

  async function getWeather() {
    await axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert('invalid city name');
        setLocation(null);
      });
  }

  useEffect(() => {
    if (location !== null) {
      getWeather();
    }
  }, [location]);

  return (
    <Container>
      <AnimatePresence mode='wait'>
        {!response ? (
          <Location
            location={location}
            setLocation={setLocation}
            getWeather={getWeather}
          />
        ) : (
          <Weather
            response={response}
            setResponse={setResponse}
            setLocation={setLocation}
            location={location}
          />
        )}
      </AnimatePresence>
    </Container>
  );
}

export default App;
const Container = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25caf4;
`;
