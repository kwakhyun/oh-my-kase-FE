import React from "react";
import styled from "styled-components";
import Map from "./Map";

const Information = ({introduce, address, lat, lon}) => {
  return (
    <>
      <StyledText size="22px">Information</StyledText>
      <StyledText size="16px">{introduce}</StyledText>
      <StyledText size="18px" line='10px'>{address}</StyledText>
      <StyledText size="15px"></StyledText>
      <Map lat={lat} lon={lon}/>
    </>
  );
};

export default Information;
const StyledText = styled.h1`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px 45px 40px;
  line-height: ${(props) => props.line || "30px"};
`;
