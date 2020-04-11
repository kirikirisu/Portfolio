import Link from "next/link";
import styled from "styled-components";

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

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.size};
  color: palevioletred;
`;

const About = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20vh 0;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 120vw;
    height: 80%;
    margin: 3% -10% 0;
    background-color: #011931;
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center;
    -webkit-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
    z-index: -1;
  }
`;

const Description = styled.div`
  box-sizing: boder-box;
  color: black;
  text-align: center;
  background-color: red;
`;

const Top = () => (
  <Wrapper>
    <Main>
      <Title theme={{ size: "5vh" }}>Arakappa</Title>
      <Title theme={{ size: "2vh" }}>きのこ派だ！！</Title>
    </Main>
    <About>
      <Description>hoge</Description>
    </About>
  </Wrapper>
);

export default Top;
