import {
  ArrowBack,
  LocationOn,
  Thermostat,
  WaterDrop,
} from '@mui/icons-material';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

function Weather({ setResponse, setLocation, response }) {
  return (
    <AnimatePresence>
      <Container
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ scale: 0 }}
      >
        <Title>
          <Back
            onClick={() => {
              setLocation(null);
              setResponse(null);
            }}
          />
          Weather
        </Title>
        <Body>
          <WeatherIcon src={response.current.condition.icon} />
          <WeatherTextContainer>
            <Temperature>{response.current.temp_c}&#8451;</Temperature>
            <WeatherText>{response.current.condition.text}</WeatherText>
            <LocationName>
              <LocationIcon />
              {response.location.name}
            </LocationName>
          </WeatherTextContainer>

          <Usefull>
            <FeelsLike>
              <ThermometerIcon />
              <Text>
                <P>{response.current.feelslike_c}&#8451;</P>
                <P>uv-index: {response.current.uv}</P>
              </Text>
            </FeelsLike>
            <Humidity>
              <WaterDropIcon />
              <Text>
                <P>{response.current.humidity}%</P>
                <P>Humidity</P>
              </Text>
            </Humidity>
          </Usefull>
        </Body>
      </Container>
    </AnimatePresence>
  );
}

export default Weather;
const Container = styled.div`
  background-color: #fff;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const Title = styled.div`
  width: 100%;
  padding: 10px 0;
  padding-left: 20px;
  border-bottom: 2px solid #c7c7c7;
  display: flex;
  align-items: center;
  @media (min-width: 700px) {
    padding: 15px 0;
    padding-left: 20px;
  }
`;
const Body = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Back = styled(ArrowBack)`
  top: 10px;
  left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;
const WeatherIcon = styled.img`
  height: 200px;
  @media (min-width: 700px) {
    /* height: 350px; */
    height: 30%;
  }
  @media (min-width: 1024px) {
    height: 40%;
  }
  @media (min-width: 2048px) {
    height: 50%;
  }
`;
const WeatherTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Temperature = styled.div`
  font-weight: bold;
  font-size: 2rem;
  @media (min-width: 700px) {
    font-size: 2rem;
  }
`;
const WeatherText = styled.div`
  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`;
const LocationName = styled.div`
  @media (min-width: 700px) {
    font-size: 1.4rem;
  }
`;
const LocationIcon = styled(LocationOn)`
  font-size: 20px !important;
  @media (min-width: 700px) {
    font-size: 30px !important;
  }
  @media (min-width: 1024px) {
    font-size: 40px !important;
  }
`;
const Usefull = styled.div`
  width: 100%;
  height: 15%;
  border-top: 2px solid #c7c7c7;
  margin-top: auto;
  display: flex;
`;
const FeelsLike = styled.div`
  height: 100%;
  width: 50%;
  border-right: 1px solid #c7c7c7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const WaterDropIcon = styled(WaterDrop)`
  font-size: 30px !important;
  color: #25caf4;
  @media (min-width: 700px) {
    font-size: 50px !important;
  }
  @media (min-width: 2048px) {
    font-size: 70px !important;
  }
`;
const ThermometerIcon = styled(Thermostat)`
  font-size: 30px !important;
  color: #25caf4;
  @media (min-width: 700px) {
    font-size: 50px !important;
  }
  @media (min-width: 2048px) {
    font-size: 70px !important;
  }
`;
const Text = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const P = styled.div`
  font-size: 0.8rem;
  @media (min-width: 700px) {
    font-size: 1rem;
  }
`;
const Humidity = styled.div`
  height: 100%;
  width: 50%;
  border-left: 1px solid #c7c7c7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
