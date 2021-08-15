import styled from "styled-components";
import { BasicColors, BasicColorsDark, TextColors } from "/src/theme/index";

const MyBtnSmooth = styled.button`
  //Static properties
  padding: 10px;
  margin: 10px;
  border: none;

  //Dynamic properties
  background: ${({ type, background }) => {
    if (type) {
    } else if (background) {
    } else {
      return BasicColors.primary;
    }
  }};

  color: ${({ color }) => {
    if (color) {
    } else {
      return TextColors.white;
    }
  }};
  border-radius: ${({ rounded }) => (rounded ? "200px" : "5px")};
`;

export default MyBtnSmooth;
