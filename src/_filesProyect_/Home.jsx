//-----------------IMPORTS---------------
import React from "react";
//dependecies
import styled from "styled-components";
//icons
//pages
//components
import {
  MyBtnNeoSkew,
  MyBtnNeuMor,
  MyBtnPrimary,
  MyBtnGhost,
  MyBtnSmooth,
  MyBtnText
} from "../components/buttons/index";
//---------------END_IMPORTS---------------

//------------STYLED_COMPONENTS------------
const MainTitle = styled.h1``;
const Title = styled.h2``;
const SubTitle = styled.h3``;
//----------END_STYLED_COMPONENTS----------

//-----------------COMPONENT---------------
const Home = () => {
  //-----CODE-----
  //---END_CODE---

  //-----RENDER-----
  return (
    <>
      <div className="wrapper">
        <section className="section_hero">
          <h1>My library</h1>
          <p></p>
        </section>
        <section className="section_getStart"></section>
        <section className="section_theme"></section>

        <section className="section_buttons">
          <h2>Buttons</h2>
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
          </ul>
          <div className="examples">
            <MyBtnNeoSkew>MyBtnNeoSkew</MyBtnNeoSkew>
            <MyBtnNeuMor>MyBtnNeuMor</MyBtnNeuMor>
            <MyBtnPrimary rounded type="warning" raised color="">
              MyBtnPrimary
            </MyBtnPrimary>
            <MyBtnGhost>MyBtnGhost</MyBtnGhost>
            <MyBtnSmooth>MyBtnSmooth</MyBtnSmooth>
            <MyBtnText>MyBtnText</MyBtnText>
          </div>
        </section>
      </div>
    </>
  );
  //---END_RENDER---
};
//---------------END_COMPONENT---------------

export default Home;
