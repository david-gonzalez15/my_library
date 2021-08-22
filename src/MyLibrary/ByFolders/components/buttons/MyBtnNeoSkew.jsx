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
import { getButtonSize } from "./theme/StyleFunctions";
//---------------END_IMPORTS---------------

//

//------------.STYLED_COMPONENT---------------
const MyBtnNeoSkew = styled.button`
  /* _Static properties*/
  border: none;
  
  /* style functions */
  ${({ padding, margin, fontSize, size }) => {
    return getButtonSize(padding, margin, fontSize, size);
  }}

  /* _Dynamic properties */
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  width: ${({ width }) => (width ? width : "")};
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
  
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
          return BasicColors.primary;
        case "secondary":
          return BasicColors.secondary;
        case "succes":
          return BasicColors.succes;
        case "danger":
          return BasicColors.danger;
        case "warning":
          return BasicColors.warning;
        case "info":
          return BasicColors.info;
        case "light":
          return BasicColors.light;
        case "dark":
          return BasicColors.dark;
        default:
          return BasicColors.primary;
      }
    } else {
      return BasicColors.primary;
    }
  }};

  color: ${({ color, type, disabled }) => {
    if (disabled) {
      return TextColors.grey;
    } else if (color) {
      return color;
    } else {
      if (type === "light") {
        return TextColors.dark;
      }
      return TextColors.white;
    }
  }};
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

  box-shadow: ${({ type, disabled, skewShadow }) => {
    let color = BasicColorsDark;
    let size = SizeShadow.basicSkew;

    if (disabled) {
    } else if (skewShadow) {
      return size + skewShadow;
    } else if (type) {
      switch (type) {
        case "primary":
          return size + color.primary;
        case "secondary":
          return size + color.secondary;
        case "succes":
          return size + color.succes;
        case "danger":
          return size + color.danger;
        case "warning":
          return size + color.warning;
        case "info":
          return size + color.info;
        case "light":
          return size + color.light;
        case "dark":
          return size + color.dark;
        default:
          return size + color.primary;
      }
    } else {
      return size + color.primary;
    }
  }};
  transition: 0.1s;
  :hover {
    transition: 0.1s;
    box-shadow: ${({ type, disabled, skewShadow }) => {
      let color = BasicColorsDark;
      let size = SizeShadow.hoverPressSkew;
      if (disabled) {
      } else if (skewShadow) {
        return size + skewShadow;
      } else if (type) {
        switch (type) {
          case "primary":
            return size + color.primary;
          case "secondary":
            return size + color.secondary;
          case "succes":
            return size + color.succes;
          case "danger":
            return size + color.danger;
          case "warning":
            return size + color.warning;
          case "info":
            return size + color.info;
          case "light":
            return size + color.light;
          case "dark":
            return size + color.dark;
          default:
            return size + color.primary;
        }
      } else {
        return size + color.primary;
      }
    }};
  }
  :active {
    transition: 0.1s;
    box-shadow: ${({ type, disabled, skewShadow }) => {
      let color = BasicColorsDark;
      let size = SizeShadow.underSkew;
      if (disabled) {
      } else if (skewShadow) {
        return SizeShadow.underSkew + skewShadow;
      } else if (type) {
        switch (type) {
          case "primary":
            return size + color.primary;
          case "secondary":
            return size + color.secondary;
          case "succes":
            return size + color.succes;
          case "danger":
            return size + color.danger;
          case "warning":
            return size + color.warning;
          case "info":
            return size + color.info;
          case "light":
            return size + color.light;
          case "dark":
            return size + color.dark;
          default:
            return size + color.primary;
        }
      } else {
        return SizeShadow.underSkew + BasicColorsDark.primary;
      }
    }};
  }
`;

export default MyBtnNeoSkew;
