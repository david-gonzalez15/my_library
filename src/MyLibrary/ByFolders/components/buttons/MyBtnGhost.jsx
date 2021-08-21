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
const MyBtnGhost = styled.button`
  //Static properties
  background: none;
  
  /* style functions */
  ${({ padding, margin, fontSize, size }) => {
    return getButtonSize(padding, margin, fontSize, size);
  }}

  /* _Dynamic properties */
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  width: ${({ width }) => (width ? width : "")};
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
  //type
  

  color: ${({ color, type, disabled }) => {
    if (disabled) {
      return TextColors.grey;
    } else if (color) {
      return color;
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

  box-shadow: ${({ raised, raisedColor, type, disabled }) => {
    if (disabled) {
    } else if (raised) {
      return SizeShadow.basic + "#ccc";
    } else if (raisedColor) {
      if (raisedColor !== true) {
        return SizeShadow.basic + raisedColor;
      } else if (type) {
        switch (type) {
          case "primary":
            return SizeShadow.basic + BasicColorsSmooth.primary;
          case "secondary":
            return SizeShadow.basic + BasicColorsSmooth.secondary;
          case "succes":
            return SizeShadow.basic + BasicColorsSmooth.succes;
          case "danger":
            return SizeShadow.basic + BasicColorsSmooth.danger;
          case "warning":
            return SizeShadow.basic + BasicColorsSmooth.warning;
          case "info":
            return SizeShadow.basic + BasicColorsSmooth.info;
          case "light":
            return SizeShadow.basic + BasicColorsSmooth.light;
          case "dark":
            return SizeShadow.basic + BasicColorsSmooth.dark;
          default:
            return SizeShadow.basic + BasicColorsSmooth.primary;
        }
      }
    }
  }};
  transition: 0.1s;
  :hover {
    transition: 0.1s;
    box-shadow: ${({ raised, raisedColor, type, disabled }) => {
      if (disabled) {
      } else if (raised) {
        return SizeShadow.hoverPress + "#ccc";
      } else if (raisedColor) {
        if (raisedColor !== true) {
          return SizeShadow.hoverPress + raisedColor;
        } else if (type) {
          switch (type) {
            case "primary":
              return SizeShadow.hoverPress + BasicColorsSmooth.primary;
            case "secondary":
              return SizeShadow.hoverPress + BasicColorsSmooth.secondary;
            case "succes":
              return SizeShadow.hoverPress + BasicColorsSmooth.succes;
            case "danger":
              return SizeShadow.hoverPress + BasicColorsSmooth.danger;
            case "warning":
              return SizeShadow.hoverPress + BasicColorsSmooth.warning;
            case "info":
              return SizeShadow.hoverPress + BasicColorsSmooth.info;
            case "light":
              return SizeShadow.hoverPress + BasicColorsSmooth.light;
            case "dark":
              return SizeShadow.hoverPress + BasicColorsSmooth.dark;
            default:
              return SizeShadow.hoverPress + BasicColorsSmooth.primary;
          }
        }
      }
    }};
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
