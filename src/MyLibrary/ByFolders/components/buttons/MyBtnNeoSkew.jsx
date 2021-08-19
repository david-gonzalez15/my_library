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
const MyBtnNeoSkew = styled.button`
  //Static properties

  border: none;
  //Dynamic properties
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
    if (disabled) {
    } else if (skewShadow) {
      return SizeShadow.basicSkew + skewShadow;
    } else if (type) {
      switch (type) {
        case "primary":
          return SizeShadow.basicSkew + BasicColorsDark.primary;
        case "secondary":
          return SizeShadow.basicSkew + BasicColorsDark.secondary;
        case "succes":
          return SizeShadow.basicSkew + BasicColorsDark.succes;
        case "danger":
          return SizeShadow.basicSkew + BasicColorsDark.danger;
        case "warning":
          return SizeShadow.basicSkew + BasicColorsDark.warning;
        case "info":
          return SizeShadow.basicSkew + BasicColorsDark.info;
        case "light":
          return SizeShadow.basicSkew + BasicColorsDark.light;
        case "dark":
          return SizeShadow.basicSkew + BasicColorsDark.dark;
        default:
          return SizeShadow.basicSkew + BasicColorsDark.primary;
      }
    } else {
      return SizeShadow.basicSkew + BasicColorsDark.primary;
    }
  }};
  transition: 0.1s;
  :hover {
    transition: 0.1s;
    box-shadow: ${({ type, disabled, skewShadow }) => {
      if (disabled) {
      } else if (skewShadow) {
        return SizeShadow.hoverPressSkew + skewShadow;
      } else if (type) {
        switch (type) {
          case "primary":
            return SizeShadow.hoverPressSkew + BasicColorsDark.primary;
          case "secondary":
            return SizeShadow.hoverPressSkew + BasicColorsDark.secondary;
          case "succes":
            return SizeShadow.hoverPressSkew + BasicColorsDark.succes;
          case "danger":
            return SizeShadow.hoverPressSkew + BasicColorsDark.danger;
          case "warning":
            return SizeShadow.hoverPressSkew + BasicColorsDark.warning;
          case "info":
            return SizeShadow.hoverPressSkew + BasicColorsDark.info;
          case "light":
            return SizeShadow.hoverPressSkew + BasicColorsDark.light;
          case "dark":
            return SizeShadow.hoverPressSkew + BasicColorsDark.dark;
          default:
            return SizeShadow.hoverPressSkew + BasicColorsDark.primary;
        }
      } else {
        return SizeShadow.hoverPressSkew + BasicColorsDark.primary;
      }
    }};
  }
  :active {
    transition: 0.1s;
    box-shadow: ${({ type, disabled, skewShadow }) => {
      if (disabled) {
      } else if (skewShadow) {
        return SizeShadow.underSkew + skewShadow;
      } else if (type) {
        switch (type) {
          case "primary":
            return SizeShadow.underSkew + BasicColorsDark.primary;
          case "secondary":
            return SizeShadow.underSkew + BasicColorsDark.secondary;
          case "succes":
            return SizeShadow.underSkew + BasicColorsDark.succes;
          case "danger":
            return SizeShadow.underSkew + BasicColorsDark.danger;
          case "warning":
            return SizeShadow.underSkew + BasicColorsDark.warning;
          case "info":
            return SizeShadow.underSkew + BasicColorsDark.info;
          case "light":
            return SizeShadow.underSkew + BasicColorsDark.light;
          case "dark":
            return SizeShadow.underSkew + BasicColorsDark.dark;
          default:
            return SizeShadow.underSkew + BasicColorsDark.primary;
        }
      } else {
        return SizeShadow.underSkew + BasicColorsDark.primary;
      }
    }};
  }
`;

export default MyBtnNeoSkew;
