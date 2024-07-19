import React from "react";
import styled from "styled-components";
import profile from "../../../assets/service7.jpg";
import sign from "../../../assets/sign.png";

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const BackgroundImage = styled.div`
  background-image: url(${profile});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 20px;
  text-align: left;
  width: 80%;
  max-width: 600px;
`;

const Signature = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const FounderProfile = () => {
  return (
    <Container>
      <BackgroundImage>
        <Title>ABOUT MINDFUL LIVING CLUB</Title>
        <Subtitle>Founder's Profile</Subtitle>
      </BackgroundImage>
      <Content>
        <Title>Founder Profile</Title>
        <p>
          Bushra, our founder, is a healthcare professional with over 20 years
          of experience. She is Passionate advocate and an innovator in holistic
          health and chronic care management. She is a Certified CDC DPP & FMD
          Coach and Arkaya Yoga Teacher, dedicated to empowering individuals and
          communities to achieve optimal health through mind-body connection and
          through basic lifestyle changes. She is committed to creating a cost
          effective solution that can meet the needs of people who wants to be
          healthy with the help of lifestyle change, and by nourishing their
          body with food, by distressing and by removing toxins
        </p>
        <Signature>
          <Img src={sign} alt="Sign" />
        </Signature>
      </Content>
    </Container>
  );
};

export default FounderProfile;
