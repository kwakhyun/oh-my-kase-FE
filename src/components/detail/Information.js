import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Map from "./Map";

const Information = ({introduce}) => {
  return (
    <>
      <StyledText size="22px">Information</StyledText>
      <StyledText size="16px">{introduce}</StyledText>
      <StyledText size="18px" line='10px'>Location</StyledText>
      <StyledText size="15px">서울 마포구 연희로1길 11 2층</StyledText>
      <Map/>
    </>
  );
};

export default Information;
const StyledText = styled.h1`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px 45px 40px;
  line-height: ${(props) => props.line || "30px"};
`;
