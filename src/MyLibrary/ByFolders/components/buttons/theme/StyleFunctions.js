//-----------------IMPORTS---------------
import {
  ButtonsSizes,
  BasicColorsSmooth,
  BasicColorsDark,
  BasicColors,
  TextColors,
  SizeShadow
} from "./index";
//---------------END_IMPORTS---------------

//

//------------FUNCTIONS---------------

/* Customization of SIZE: small, medium and large.
     Customization of MARGIN, PADDING and FONTSIZE */
const getButtonSize = (padding, margin, fontSize, size) => {
  //---------default--------
  let newPadding = ButtonsSizes.mediumPadding;
  let newMargin = ButtonsSizes.mediumMargin;
  let newFontSize = ButtonsSizes.mediumFont;

  //----------Size---------
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
};

//----------------------------------------------
const getButtonRaised = (
  raised = false,
  raisedColor = false,
  type = false,
  disabled = false,
  state = "active"
) => {
  //--------Config------
  let color = BasicColorsSmooth;
  let size;

  state === "active" && (size = SizeShadow.active);
  state === "hoverPress" && (size = SizeShadow.hoverPress);
  state === "hoverOver" && (size = SizeShadow.hoverOver);
  state === "under" && (size = SizeShadow.under);

  //---------default--------
  let newBoxShadow = "";

  //---------raised---------
  raised && (newBoxShadow = size + "#ccc");

  //---------raisedColor--------
  if (raisedColor) {
    type === "primary" && (newBoxShadow = size + color.primary);
    type === "secondary" && (newBoxShadow = size + color.secondary);
    type === "succes" && (newBoxShadow = size + color.succes);
    type === "danger" && (newBoxShadow = size + color.danger);
    type === "light" && (newBoxShadow = size + color.light);
    type === "dark" && (newBoxShadow = size + color.dark);

    raisedColor !== true && (newBoxShadow = size + raisedColor);
  }
  //--------disabled------
  disabled && (newBoxShadow = "");
  //---------return------
  return "box-shadow: " + newBoxShadow + ";";
};

const getButtonColor = (color, type, disabled) => {
  let colors = BasicColors;
  let newColor = colors.primary;

  if (type) {
    type === "primary" && (newColor = colors.primary);
    type === "secondary" && (newColor = colors.secondary);
    type === "succes" && (newColor = colors.succes);
    type === "danger" && (newColor = colors.danger);
    type === "light" && (newColor = colors.light);
    type === "dark" && (newColor = colors.dark);
  }
  //-------custom------
  color && (newColor = color);
  //------disabled------
  disabled && (newColor = TextColors.grey);

  return "color: " + newColor + ";";
};
export { getButtonSize, getButtonRaised, getButtonColor };
