//-----------------IMPORTS---------------
import styled from "styled-components";
import {
  BasicColors,
  BasicColorsDark,
  BasicColorsSmooth,
  TextColors,
  SizeShadow
} from "./theme/index";
import {
  getButtonSize,
  getButtonRaised,
  getButtonColor
} from "./theme/StyleFunctions";
//---------------END_IMPORTS---------------

//

//------------.STYLED_COMPONENT---------------
const MyBtnGhost = styled.button`
  //Static properties
  background: none;
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

  border:1px solid ${({ border, type, disabled }) => {
    if (disabled) {
      return TextColors.grey;
    } else if (border) {
      return border;
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
 


  :hover {
    transition: 0.1s;
    ${({ raised, raisedColor, type, disabled }) => {
      return getButtonRaised(raised, raisedColor, type, disabled, "hoverPress");
    }}
    background: ${({ backgroundHover, type, disabled }) => {
      if (disabled) {
      } else if (backgroundHover) {
        return backgroundHover;
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
            return BasicColorsSmooth.light;
          case "dark":
            return BasicColorsSmooth.dark;
          default:
            return BasicColorsSmooth.primary;
        }
      } else {
        return BasicColorsSmooth.primary;
      }
    }};
  }
  :active {
    transition: 0.1s;
    box-shadow: 0px 0px 0px #ccc;
    background: ${({ background, type, disabled }) => {
      if (disabled) {
      } else if (background) {
        return background;
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
    color: #fff;
  }
`;

export default MyBtnGhost;
