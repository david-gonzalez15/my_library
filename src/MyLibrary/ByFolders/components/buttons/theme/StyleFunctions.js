//-----------------IMPORTS---------------
import { ButtonsSizes } from "./index";
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
};
export { getButtonSize };
