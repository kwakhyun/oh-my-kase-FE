import React, { useState } from "react";
import styled from "styled-components";
import Information from "./Information";
import Menu from "./Menu";
import Review from "./Review";

const Tabs = () => {
  const [tabSelect, setTabSelect] = useState("menu");
  return (
    <>
      <StyledTab>
        {tabSelect === "menu" ? (
          <StyledSelectedTabItem
            onClick={() => {
              setTabSelect("menu");
            }}
          >
            메뉴
          </StyledSelectedTabItem>
        ) : (
          <StyledTabItem
            onClick={() => {
              setTabSelect("menu");
            }}
          >
            메뉴
          </StyledTabItem>
        )}
        {tabSelect === "information" ? (
          <StyledSelectedTabItem
            onClick={() => {
              setTabSelect("information");
            }}
          >
            정보
          </StyledSelectedTabItem>
        ) : (
          <StyledTabItem
            onClick={() => {
              setTabSelect("information");
            }}
          >
            정보
          </StyledTabItem>
        )}
        {tabSelect === "review" ? (
          <StyledSelectedTabItem
            onClick={() => {
              setTabSelect("review");
            }}
          >
            리뷰
          </StyledSelectedTabItem>
        ) : (
          <StyledTabItem
            onClick={() => {
              setTabSelect("review");
            }}
          >
            리뷰
          </StyledTabItem>
        )}
      </StyledTab>
      <hr />
      <StyledDiv>
        {tabSelect === "menu" ? (
          <Menu />
        ) : tabSelect === "information" ? (
          <Information />
        ) : tabSelect === "review" ? (
          <Review />
        ) : null}
      </StyledDiv>
    </>
  );
};

export default Tabs;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 20px auto;
  border-radius: 5px;
  font-size: 0.7em;
  box-shadow: 1px 1px 15px grey;
`;

const StyledTab = styled.div`
  display: flex;
  width: 80vw;
  margin: auto;
`;
const StyledTabItem = styled.div`
  width: 200px;
  padding: 5px;
  font-size: 25px;
  margin: auto;
`;
const StyledSelectedTabItem = styled.div`
  width: 200px;
  padding: 5px;
  font-size: 25px;
  margin: auto;
  text-decoration-line: underline;
  text-decoration-thickness: 3px;
`;
