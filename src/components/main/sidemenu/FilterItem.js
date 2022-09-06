import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const FilterItem = ({ item, setSelectDistrict }) => {
  const navigate = useNavigate();
  const sendData = () => {
    navigate("/" + item);
    setSelectDistrict(item);
  };
  return (
    <>
      <StyledDiv onClick={sendData}>{item}</StyledDiv>
    </>
  );
};
export default FilterItem;
const StyledDiv = styled.div`
  font-size: 20px;
  height: 25px;
  margin-top: 5px;
  padding: 5px;
  &:hover{
    color: #ccc;
  }
`;
