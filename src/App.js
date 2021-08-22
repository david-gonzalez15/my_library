//https://www.linkedin.com/in/david-gonzalez-portfolio/
//-----------------IMPORTS---------------
import Home from "./FilesProyect/Home";

import { createGlobalStyle } from "styled-components";
//---------------END_IMPORTS---------------

//

//------------STYLED_COMPONENTS---------------
const GlobalStyle = createGlobalStyle`
    body{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    }
  `;
//----------END_STYLED_COMPONENTS----------

//

//-----------------COMPONENT---------------
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}
//---------------END_COMPONENT---------------
