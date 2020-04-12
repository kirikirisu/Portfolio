import styled from "styled-components";

import { Title, Head } from "./index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 30vh;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 120vw;
    height: 80%;
    margin: 3% -10% 0;
    background-color: rgba(250, 248, 233);
    -webkit-transform-origin: left center;
    -ms-transform-origin: left center;
    transform-origin: left center;
    -webkit-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
    z-index: -1;
  }
`;

const Content = styled.div`
  box-sizing: boder-box;
  background-color: yellow;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Circle = styled.div`
  border: 2px solid grey;
  border-radius: 50%;
  height: 25vh;
  width: 25vh;
  padding: 10px;
  text-align: center;
`;

const About = () => (
  <Wrapper>
    <Head theme={{ size: "3.5vh" }}>ABOUT</Head>
    <Description>
      <Circle>name</Circle>
      <Circle>あだ名</Circle>
      <Circle>好きな食べ物</Circle>
      <Circle>好きなゲーム</Circle>
      <Circle>趣味</Circle>
    </Description>
  </Wrapper>
);

export default About;
