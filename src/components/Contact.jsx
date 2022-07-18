import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Card>
      <Wrapper>
        <h1>Get in touch with us</h1>
        <p>
          Our customer representative team is available 7 days a week from 9 am
          - 9 pm. You can reach us on
        </p>
        <EmailWrapper>
          <img
            src="https://www.truemeds.in/static/media/mail.5af80c42.svg"
            alt="email"
          />
          <p>support@truemeds.in</p>
        </EmailWrapper>
        <PhoneWrapper>
          <img
            src="https://www.truemeds.in/static/media/call.37d36705.svg"
            alt="phone"
          />
          <p>022-48977965</p>
        </PhoneWrapper>
      </Wrapper>
    </Card>
  );
}

export default Contact;

const Card = styled.div`
  width: 280px;
  height: 300px;
  padding: 20px 15px;
  border-radius: 14px;
  position: absolute;
  background-color: white;
  top: -100px;
  right: 50px;
  z-index: 999;
  box-shadow: 1px 12px 28px 9px rgba(145, 208, 231, 0.38);
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Open+Sans:wght@400;500;700&display=swap");

  @media screen and (max-width: 470px) {
    width: 380px;
    height: 280px;
    padding: 10px;
    background: none;
  }
`;
const Wrapper = styled.div`
  font-family: "Inter", sans-serif;
  h1 {
    font-size: 1.75rem;
    color: #003055;
    font-weight: 700;
  }

  p {
    font-size: 1.3rem;
    color: gray;
    font-family: "Open Sans", sans-serif;
  }
`;

const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 35px;
    height: 35px;
  }

  p {
    font-size: 18px;
    color: #0574bd !important;
    font-weight: bold;
  }
`;
const PhoneWrapper = styled(EmailWrapper)``;
