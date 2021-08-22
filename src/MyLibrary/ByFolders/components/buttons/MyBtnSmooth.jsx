//-----------------IMPORTS---------------
import styled from "styled-components";
import {
  BasicColors,
  BasicColorsDark,
  BasicColorsSmooth,
  TextColors,
  SizeShadow,
  ButtonsSizes
} from "./theme/index";
import {
  getButtonSize,
  getButtonRaised,
  getButtonColor
} from "./theme/StyleFunctions";
//---------------END_IMPORTS---------------

//

//------------.STYLED_COMPONENT---------------
const MyBtnSmooth = styled.button`
  //Static properties
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
  ${({ color, type, disabled }) => {
    return getButtonColor(color, type, disabled);
  }};

  /* _Dynamic properties */
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  width: ${({ width }) => (width ? width : "")};
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
  border-radius: ${({ rounded }) => {
    if (rounded) {
      if (rounded !== true) {
        return rounded;
      } else {
        return "200px";
      }
    } else {
      return "5px";
    }
  }};
  //type
  background: ${({ type, background, gradient, disabled }) => {
    if (disabled) {
      return BasicColors.disabled;
    } else if (background) {
      return background;
    } else if (gradient) {
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
    } else if (type) {
      switch (type) {
        case "primary":
          return BasicColorsSmooth.primary;
        case "secondary":
          return BasicColorsSmooth.secondary;
        case "succes":
          return BasicColorsSmooth.succes;
        case "danger":
          return BasicColorsSmooth.danger;
        case "warning":
          return BasicColorsSmooth.warning;
        case "info":
          return BasicColorsSmooth.info;
        case "light":
          return BasicColors.light;
        case "dark":
          return BasicColorsSmooth.dark;
        default:
          return BasicColorsSmooth.primary;
      }
    } else {
      return BasicColorsSmooth.primary;
    }
  }};

  :hover {
    transition: 0.1s;
    ${({ raised, raisedColor, type, disabled }) => {
      return getButtonRaised(raised, raisedColor, type, disabled, "hoverPress");
    }}
  }
  :active {
    transition: 0.1s;
    box-shadow: 0px 0px 0px #dedede;
  }
`;

export default MyBtnSmooth;
