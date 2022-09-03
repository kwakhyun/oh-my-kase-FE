import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FilterItem from "./FilterItem";
const Filter = () => {
  const [selectGu, setSelectGu] = useState('전체')
  const gus = useSelector(state=>state.main.data)
  const sets = gus.map(item=>item.gu)
  const set = new Set(sets)
  const guArr = [...set]
  return (
    <StyledFilter>
      <FilterItem setSelectGu={setSelectGu} item={"전체"}/>
      {guArr.map((item, idx)=>(
        <FilterItem setSelectGu={setSelectGu} key={idx} item={item}/>
      ))}
    </StyledFilter>
  );
};

export default Filter;

const StyledFilter = styled.div`
  display: flex;
  max-width: 90vw;
  border: 1px solid black;
  margin: auto;
  width:100%; word-break:break-all;word-wrap:break-word;
`;
