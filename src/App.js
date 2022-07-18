import Information from "./components/Information";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Information />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
