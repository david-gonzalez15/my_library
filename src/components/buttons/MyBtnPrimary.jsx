import styled from "styled-components";
import { BasicColors, BasicColorsSmooth, TextColors } from "/src/theme/index";
const MyBtnPrimary = styled.button`
  //Static properties
  padding: 10px;
  margin: 10px;
  border: none;

  //Dynamic properties
  background: ${({ type, background, gradient }) => {
    if (type) {
      switch (type) {
        case "primary":
          return BasicColors.primary;
          break;
        case "secondary":
          return BasicColors.secondary;
          break;
        case "succes":
          return BasicColors.succes;
          break;
        case "danger":
          return BasicColors.danger;
          break;
        case "warning":
          return BasicColors.warning;
          break;
        case "info":
          return BasicColors.info;
          break;
        case "light":
          return BasicColors.light;
          break;
        case "dark":
          return BasicColors.dark;
          break;
        default:
          return BasicColors.primary;
          break;
      }
    } else if (gradient) {
    } else if (background) {
      return background;
    } else {
    }
  }};

  color: ${({ color }) => {
    if (color) {
      return color;
    } else {
      return TextColors.white;
    }
  }};
  border-radius: ${({ rounded }) => (rounded ? "200px" : "5px")};
  box-shadow: 3px 5px 8px
    ${({ raised, raisedColor, type }) => {
      if (raised) {
        return "#ccc";
      } else if (raisedColor) {
        if (type) {
          switch (type) {
            case "primary":
              return BasicColorsSmooth.primary;
              break;
            case "secondary":
              return BasicColorsSmooth.secondary;
              break;
            case "succes":
              return BasicColorsSmooth.succes;
              break;
            case "danger":
              return BasicColorsSmooth.danger;
              break;
            case "warning":
              return BasicColorsSmooth.warning;
              break;
            case "info":
              return BasicColorsSmooth.info;
              break;
            case "light":
              return BasicColorsSmooth.light;
              break;
            case "dark":
              return BasicColorsSmooth.dark;
              break;
            default:
              return BasicColorsSmooth.primary;
              break;
          }
        } else {
          return raisedColor;
        }
      }
    }};

  :hover {
  }
  :active {
  }
`;

export default MyBtnPrimary;
