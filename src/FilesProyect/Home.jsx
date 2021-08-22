//-----------------IMPORTS---------------
import React from "react";
//dependecies
import styled from "styled-components";
//icons
import { AiOutlineMenu } from "react-icons/ai";
//pages
//components
import {
  MyBtnNeoSkew,
  MyBtnPrimary,
  MyBtnGhost,
  MyBtnSmooth,
  MyBtnText
} from "../MyLibrary/ByFolders/components/buttons";
//---------------END_IMPORTS---------------

//------------STYLED_COMPONENTS------------
const Wrapper = styled.div``;
const MainTitle = styled.h1``;
const Title = styled.h2`
  font-size: 4rem;
  font-weight: 300;
`;
const SubTitle = styled.h3``;
const NewBtn = styled(MyBtnPrimary)`
  border-radius: 17px;
  background: #e8e8e8;
  box-shadow: 17px 17px 40px #d5d5d5, -17px -17px 40px #fbfbfb;
`;
//----------END_STYLED_COMPONENTS----------

//-----------------COMPONENT---------------
const Home = () => {
  //-----CODE-----
  //---END_CODE---

  //-----RENDER-----
  return (
    <>
      <Wrapper>
        <section className="section_hero">
          <MainTitle>My library</MainTitle>
          <p></p>
        </section>
        <section className="section_getStart"></section>
        <section className="section_theme"></section>

        <section className="section_buttons">
          <Title>Buttons</Title>
          <p>atrinutos</p>
          <ul>
            <li>type</li>
            <li>background</li>
            <li>color</li>
            <li>rounded</li>
            <li>raised</li>
            <li>reisedColor</li>
            <li>size</li>
            <li>disabled</li>
            <li>width</li>
            <li>fontWeight</li>
            <li>fontSize</li>
            <li>skewShadow</li>
            <li>background Hover</li>
          </ul>
          <div className="examples">
            <MyBtnNeoSkew>MyBtnNeoSkew</MyBtnNeoSkew>
            {/* done */}
            <MyBtnPrimary rounded="10px 0px">MyBtnPrimary</MyBtnPrimary>
            {/* riple effect*/}
            <MyBtnGhost type="succes" rounded>
              MyBtnGhost
            </MyBtnGhost>
            <MyBtnSmooth type="danger">INFO</MyBtnSmooth> {/* riple effect*/}
            <MyBtnText type="">MyBtnText</MyBtnText>
            {/* text, soft*/}
          </div>
        </section>
      </Wrapper>
    </>
  );
  //---END_RENDER---
};
//---------------END_COMPONENT---------------

export default Home;
