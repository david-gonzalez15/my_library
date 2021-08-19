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
//---------------END_IMPORTS---------------

//------------STYLED_COMPONENTS---------------
const MyBtnPrimary = styled.button`
  /* _Static properties*/
  border: none;

  /* _Dynamic properties */

  /* Customization of SIZE: small, medium and large.
     Customization of MARGIN, PADDING and FONTSIZE */
  ${({ padding, margin, fontSize, size }) => {
    //---------varibles--------
    let newPadding = ButtonsSizes.mediumPadding;
    let newMargin = ButtonsSizes.mediumMargin;
    let newFontSize = ButtonsSizes.mediumFont;

    //----------Type---------
    if (size) {
      switch (size) {
        case "small":
          newPadding = ButtonsSizes.smallPadding;
          newMargin = ButtonsSizes.smallMargin;
          newFontSize = ButtonsSizes.smallFont;
          break;
        case "medium":
          newPadding = ButtonsSizes.mediumPadding;
          newMargin = ButtonsSizes.mediumMargin;
          newFontSize = ButtonsSizes.mediumFont;
          break;
        case "large":
          newPadding = ButtonsSizes.largePadding;
          newMargin = ButtonsSizes.largeMargin;
          newFontSize = ButtonsSizes.largeFont;
          break;
        default:
          break;
      }
    }

    //---------Custome--------
    padding && (newPadding = padding);
    margin && (newMargin = margin);
    fontSize && (newFontSize = fontSize);

    //----------return--------
    return (
      "padding: " +
      newPadding +
      ";" +
      "margin: " +
      newMargin +
      ";" +
      "font-size: " +
      newFontSize +
      ";"
    );
  }}



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
    box-shadow:${({ raised, raisedColor, type, disabled }) => {
      if (disabled) {
      } else if (raised) {
        return +"#ccc";
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
  }
  :active {
    transition: 0.1s;
    box-shadow: ${({ raised, raisedColor, type, disabled }) => {
      if (disabled) {
      } else if (raised) {
        return SizeShadow.null + "#ccc";
      } else if (raisedColor) {
        if (raisedColor !== true) {
          return SizeShadow.null + raisedColor;
        } else if (type) {
          switch (type) {
            case "primary":
              return SizeShadow.under + BasicColorsDark.primary;
            case "secondary":
              return SizeShadow.under + BasicColorsDark.secondary;
            case "succes":
              return SizeShadow.under + BasicColorsDark.succes;
            case "danger":
              return SizeShadow.under + BasicColorsDark.danger;
            case "warning":
              return SizeShadow.under + BasicColorsDark.warning;
            case "info":
              return SizeShadow.under + BasicColorsDark.info;
            case "light":
              return SizeShadow.under + BasicColorsDark.light;
            case "dark":
              return SizeShadow.under + BasicColorsDark.dark;
            default:
              return SizeShadow.under + BasicColorsDark.primary;
          }
        }
      }
    }};
  }
`;
//----------END_STYLED_COMPONENTS----------
export default MyBtnPrimary;
