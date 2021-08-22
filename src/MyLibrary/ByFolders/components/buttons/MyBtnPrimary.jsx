//-----------------IMPORTS---------------
import styled from "styled-components";
//theme
import { BasicColors, TextColors } from "./theme/index";
import { getButtonSize, getButtonRaised } from "./theme/StyleFunctions";
//---------------END_IMPORTS---------------

//------------STYLED_COMPONENTS---------------
const MyBtnPrimary = styled.button`
  /* Static properties*/
  border: none;
  transition: 0.1s;

  /* style functions */
  ${({ padding, margin, fontSize, size }) => {
    return getButtonSize(padding, margin, fontSize, size);
  }}
  ${({ raised, raisedColor, type, disabled }) => {
    if (raised || raisedColor) {
      return getButtonRaised(raised, raisedColor, type, disabled);
    }
  }}

  /* Dynamic properties */
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  width: ${({ width }) => width && width};
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
  border-radius: ${({ rounded }) => {
    if (rounded) {
      return rounded !== true ? rounded : "200px";
    } else {
      return "5px";
    }
  }};
  color: ${({ color, type, disabled }) => {
    let newColor = TextColors.white;

    color && (newColor = color);
    type === "light" && (newColor = TextColors.dark);
    disabled && (newColor = TextColors.grey);

    return newColor;
  }};


  background: ${({ type, background, gradient, disabled }) => {
    let colors = BasicColors;
    let newBackground = colors.primary;
    if (gradient) {
      if (gradient[2]) {
        return (
          "linear-gradient(" +
          gradient[2] +
          "deg," +
          gradient[0] +
          " 0%," +
          gradient[1] +
          " 100%)"
        );
      } else {
        return (
          "linear-gradient(90deg," +
          gradient[0] +
          " 0%," +
          gradient[1] +
          " 100%)"
        );
      }
    }
    if (type) {
      type === "primary" && (newBackground = colors.primary);
      type === "secondary" && (newBackground = colors.secondary);
      type === "succes" && (newBackground = colors.succes);
      type === "danger" && (newBackground = colors.danger);
      type === "light" && (newBackground = colors.light);
      type === "dark" && (newBackground = colors.dark);
    }
    background && (newBackground = background);
    disabled && (newBackground = colors.disabled);
    return newBackground;
  }};

  :hover {
    transition: 0.1s;
    ${({ raised, raisedColor, type, disabled }) => {
      return getButtonRaised(raised, raisedColor, type, disabled, "hoverPress");
    }}
  }
  :active {
    transition: 0.1s;
    box-shadow: 0px 0px 0px #ccc;
  }
`;
//----------END_STYLED_COMPONENTS----------
export default MyBtnPrimary;
