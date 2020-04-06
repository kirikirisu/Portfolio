import Link from "next/link";
import styled from "styled-components";

const Button = styled.button`
  background-color: red;
  height: 30px;
`;

const Top = () => (
  <div>
    <Link href="/Portfolio">
      <a>transition portfolio</a>
    </Link>
    <Button />
  </div>
);

export default Top;
