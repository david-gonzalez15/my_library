//-----------------IMPORTS---------------
import styled from "styled-components";
import { BasicColors, BasicColorsDark, TextColors } from "/src/theme/index";
//---------------END_IMPORTS---------------

//

//------------STYLED_COMPONENTS---------------
const MyBtnText = styled.button`
  //Static properties
  padding: 10px;
  margin: 10px;
  background: none;

  //Dynamic properties
  border: none;

  color: ${({ type, color }) => {
    if (type) {
    } else if (color) {
      return color;
    } else {
    }
  }};
  border-radius: ${({ rounded }) => (rounded ? "200px" : "5px")};
`;
//----------END_STYLED_COMPONENTS----------
export default MyBtnText;
