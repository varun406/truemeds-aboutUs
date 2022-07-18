import React from "react";
import About from "./About";
import styled from "styled-components";

function Information() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
}

export default Information;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1050px;
  padding: 110px 50px 50px 50px;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 970px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 400px;
    height: 400px;
    background: none;
  }
`;
