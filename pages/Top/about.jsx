import styled from "styled-components";

import { Title, Head } from "./index";

const Wrapper = styled.div`
  -webkit-transform: rotate(5deg) translate3d(0, 0, 0);
  background: rgba(247, 247, 247);
  margin-left: -25%;
  padding: 0 25%;
  position: relative;
  transform: rotate(5deg) translate3d(0, 0, 0);
  width: 150%;
  overflow-x: hidden;
`;

const Content = styled.div`
  background: red;
  -webkit-transform: rotate(-5deg) translate3d(0, 0, 0);
  color: #fff;
  max-width: 100vw;
  transform: rotate(-5deg) translate3d(0, 0, 0);
`;

const Description = styled.p`
  color: black;
  height: 50vh;
  weight: 50vw;
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
    <Content>
      <Description>hogeghegoeh</Description>
    </Content>
  </Wrapper>
);

export default About;
