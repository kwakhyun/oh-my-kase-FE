import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const FilterItem = ({item, setSelectDistrict}) => {
  const navigate = useNavigate()
  const sendData = () => {
    navigate('/'+item)
    setSelectDistrict(item);
  }
  return <><StyledDiv onClick={sendData}>{item}</StyledDiv></>
};
export default FilterItem;
const StyledDiv = styled.div`
width: 60px;
border: 1px solid black;
  margin: auto;
`;
