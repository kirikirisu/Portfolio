import styled from "styled-components";

import { ContentTitle, Head } from "./index";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 10vh 0;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 100%;
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
  max-width: 60vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 12vh 5vh;
  color: #fff;
  text-align: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 10vh;
`;

const BaseCircle = styled.div`
  border: 2px solid grey;
  border-radius: 50%;
  height: 30vh;
  width: 30vh;
  padding: 4vh;
  text-align: center;
`;

const CharWrapper = styled.div`
  margin-top: 1vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 60%;
  weight: 60%;
`;

const Char = styled.p`
  margin: 0;
  padding: 0.5vh;
  color: rgba(45, 45, 45);
`;

const nameDescription =
  "荒川アンダーザブリッジという漫画に出てくる、村長というキャラクターが好きでこの名前を思いつきました。";
const hobbies = ["ゲーム", "漫画", "散歩", "BGM探し"];
const nicknames = [
  "きり",
  "こーちゃん",
  "こーへーどん",
  "キリト",
  "たら口",
  "情報通信システム",
  "やすべえ",
];

const CircleContent = ({ title, elements, description }) => (
  <BaseCircle>
    <ContentTitle>{title}</ContentTitle>
    <CharWrapper>
      {elements && elements.map((key) => <Char>{key}</Char>)}
      {description && <Char>{description}</Char>}
    </CharWrapper>
  </BaseCircle>
);

const About = () => (
  <Wrapper>
    <Content>
      <Head theme={{ size: "3.5vh" }}>ABOUT</Head>
      <Description>
        <CircleContent title="arakappa" description={nameDescription} />
        <CircleContent title="趣味" elements={hobbies} />
        <CircleContent title="リアルニックネーム" elements={nicknames} />
      </Description>
    </Content>
  </Wrapper>
);

export default About;
