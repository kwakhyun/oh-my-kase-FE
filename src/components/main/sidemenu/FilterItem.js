import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getRegionData } from "../../../redux/modules/mainSlice";
const FilterItem = ({ item, setSelectDistrict }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const sendData = () => {
    navigate("/"+item);
    dispatch(getRegionData(item))
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
