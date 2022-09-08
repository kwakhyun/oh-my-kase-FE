import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getRegionData } from "../../../redux/modules/mainSlice";

const FilterItem = ({ item, setSelectDistrict }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendData = () => {
    navigate("/" + item);
    dispatch(getRegionData(item));
  };

  return (
    <>
      <StyledDiv onClick={sendData}>{item}</StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  font-size: 22px;
  height: 30px;
  width: 70px;
  margin-top: 5px;
  padding: 5px;
  &:hover {
    color: #ccc;
  }
`;

export default FilterItem;
