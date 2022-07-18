import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Contact from "./Contact";

function About() {
  return (
    <Card>
      <GlobalStyle />
      <Contact />
      <Wrapper>
        <h1>Why Truemeds?</h1>
        <h3>We’ve got your health and your budget covered!</h3>
        <p>
          That’s right. With every medicine order, you can talk to our doctors
          for free. They’ll help you opt for the right quality alternative to
          bring down your medicine bill by up to 72%.
        </p>
        <h3>Only the best for you.</h3>
        <p>
          When you order from Truemeds, you choose to buy medicines only from
          the top 30 medicine makers of India. We have curated only the best for
          you.
        </p>
        <h3>Medicines at your doorstep in just a tap</h3>
        <p>
          With increasingly busy schedules, you may often forget to take out the
          time to buy your medicines. We’ve got you covered. Just tell us the
          medicines you need and we’ll have them delivered to your doorstep for
          free.* (*Free delivery on orders above ₹500)
        </p>
        <h3>Helping you choose the right medicine</h3>
        <p>
          To ensure you’re choosing the best medicine for your health, our
          doctors will stay connected with you. Learn about the different
          quality alternatives available to help you fight your ailment without
          burning a whole in your pocket.
        </p>
        <Video>
          <video loop controls autoplay="true" muted>
            <source
              src="https://tm-storage-bucket-prod.s3.ap-south-1.amazonaws.com/Images/Assets/footer_animation.mp4"
              type="video/mp4"
            />
          </video>
        </Video>
      </Wrapper>
    </Card>
  );
}

export default About;

const GlobalStyle = createGlobalStyle`
    html,body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const Card = styled.div`
  width: 90%;
  /* border: 5px solid black; */
  min-width: 500px;

  padding: 30px;
  border-radius: 14px;
  position: relative;
  z-index: 10;
  background: linear-gradient(#d2ecfe, white);
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Open+Sans:wght@400;500;700&display=swap");

  @media screen and (max-width: 970px) {
    width: 300px;
    min-width: 400px;
    padding: 0;
    background: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid #003055;
  border-bottom: none;
  padding: 10px 20px;
  font-family: "Inter", sans-serif;

  h1 {
    font-weight: 700;
    color: #003055;
    margin: 10px;
  }

  h3 {
    font-size: 1.5rem;
    color: #333333;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.3rem;
    color: gray;
    margin: 10px;
  }

  p:first-of-type {
    width: 600px;
  }

  @media screen and (max-width: 970px) {
    display: none;
  }
`;

const Video = styled.div`
  width: 100%;

  video {
    box-shadow: -3px -23px 69px 26px rgba(255, 255, 255, 0.61);
    width: 100%;
  }
`;
