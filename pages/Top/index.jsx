import Link from "next/link";
import styled from "styled-components";

import About from "./about";

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;

const Main = styled.div`
  background-color: rgba(255, 255, 255);
  width: 100vw;
  padding-top: 30vh;
  padding-bottom: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Head = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.size};
  color: palevioletred;
  text-align: center;
  letter-spacing: 0.5vh;
  font-weight: bolder;
`;

export const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.size};
  color: grey;
  text-align: center;
  letter-spacing: 0.1vh;
`;

const Top = () => (
  <Wrapper>
    <Main>
      <Head theme={{ size: "4.5vh" }}>Arakappa</Head>
      <Title theme={{ size: "2vh" }}>きのこ派だ！！</Title>
    </Main>
    <About />
  </Wrapper>
);

export default Top;
