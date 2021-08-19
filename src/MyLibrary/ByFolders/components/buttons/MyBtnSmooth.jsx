// riple effect,
import styled from "styled-components";
import {
  BasicColors,
  BasicColorsDark,
  BasicColorsSmooth,
  TextColors,
  SizeShadow,
  ButtonsSizes
} from "./theme/index";
const MyBtnSmooth = styled.button`
  //Static properties
  border: none;

  //Dynamic properties
  /* size */
  font-size: ${({ fontSize, size }) => {
    if (fontSize) {
      return fontSize;
    } else if (size) {
      switch (size) {
        case "small":
          return ButtonsSizes.smallFont;
        case "medium":
          return ButtonsSizes.mediumFont;
        case "large":
          return ButtonsSizes.largeFont;
        default:
          return ButtonsSizes.mediumFont;
      }
    } else {
      return ButtonsSizes.mediumFont;
    }
  }}};
   padding: ${({ padding, size }) => {
     if (padding) {
       return padding;
     } else if (size) {
       switch (size) {
         case "small":
           return ButtonsSizes.smallPadding;
         case "medium":
           return ButtonsSizes.mediumPadding;
         case "large":
           return ButtonsSizes.largePadding;
         default:
           return ButtonsSizes.mediumPadding;
       }
     } else {
       return ButtonsSizes.mediumPadding;
     }
   }};
  margin: ${({ margin, size }) => {
    if (margin) {
      return margin;
    } else if (size) {
      switch (size) {
        case "small":
          return ButtonsSizes.smallMargin;
        case "medium":
          return ButtonsSizes.mediumMargin;
        case "large":
          return ButtonsSizes.largeMargin;
        default:
          return ButtonsSizes.mediumMargin;
      }
    } else {
      return ButtonsSizes.mediumMargin;
    }
  }};
  //other
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  width: ${({ width }) => (width ? width : "")};
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
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
      return SizeShadow.basic + "#dedede";
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
            return SizeShadow.basic + BasicColors.light;
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
        return SizeShadow.hoverPress + "#dedede";
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
              return SizeShadow.hoverPress + BasicColors.light;
            case "dark":
              return SizeShadow.hoverPress + BasicColorsSmooth.dark;
            default:
              return SizeShadow.hoverPress + BasicColorsSmooth.primary;
          }
        }
      }
    }};
  }
  :active {
    transition: 0.1s;
    box-shadow: 0px 0px 0px #dedede;
  }
`;

export default MyBtnSmooth;
