import React from "react";
import styled from "styled-components";
const FilterItem = ({item, setSelectGu}) => {
  const sendData = () => {
    setSelectGu(item);
  }
  return <><StyledDiv onClick={sendData}>{item}</StyledDiv></>
};
export default FilterItem;
const StyledDiv = styled.div`
width: 60px;
border: 1px solid black;
  margin: auto;
`;
