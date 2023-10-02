import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';

function Location({ setLocation }) {
  const locationRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    setLocation(locationRef.current.value);
  }

  function getPosition() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let latitude = pos.coords.latitude.toFixed(4);
        let longitude = pos.coords.longitude.toFixed(4);
        let coords = latitude + ',' + longitude;
        console.log(coords);
        setLocation(coords);
      },
      (err) => {
        alert(`geolocation not allowed`);
      }
    );
  }
  return (
    <AnimatePresence>
      <Container
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ scale: 0 }}
      >
        <Title>Weather </Title>
        <Body>
          <Form onSubmit={handleSubmit}>
            <Input
              required
              type='text'
              ref={locationRef}
              placeholder='Enter city name'
            />
            <Submit type='submit'>Go</Submit>
          </Form>
          <Divider>
            <Line></Line>
            or
            <Line></Line>
          </Divider>
          <ButtonContainer>
            <Button onClick={getPosition}>Get Device Location</Button>
          </ButtonContainer>
        </Body>
      </Container>
    </AnimatePresence>
  );
}

export default Location;
const Container = styled.div`
  background-color: #fff;
  width: 80%;
  max-width: 550px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (min-width: 700px) {
    height: 350px;
  }
  @media (min-width: 2048px) {
    max-width: 900px;
    height: 500px;
  }
`;
const Title = styled.div`
  width: 100%;
  padding: 10px 0;
  padding-left: 20px;
  border-bottom: 2px solid #858585;
`;
const Body = styled.div`
  position: relative;
  flex: 1;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;
const Input = styled.input`
  height: 50%;
  width: 100%;
  border: none;
  outline: none;
  border: 1px solid #888;
  border-radius: 7px;
  padding-left: 10px;
`;
const Submit = styled.button`
  position: absolute;
  right: 0;
  height: 50%;
  aspect-ratio: 1;
  border-radius: 0 7px 7px 0;
  border: none;
  background-color: #307fe2;
  color: #fff;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;
const Button = styled.div`
  background-color: #307fe2;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  border-radius: 7px;
  cursor: pointer;
`;
const Divider = styled.div`
  width: calc(100% - 40px);
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: show;
  position: absolute;
  top: calc(50% - 5px);
`;
const Line = styled.div`
  background-color: #dcdbdb;
  height: 2px;
  width: 43%;
  border-radius: 3px;
`;
