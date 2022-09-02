import React from "react";
import styled from "styled-components";
import FilterItem from "./FilterItem";
const Filter = () => {
  return (
    <StyledFilter>
      <FilterItem />
      <FilterItem />
      <FilterItem />
      <FilterItem />
      <FilterItem />
    </StyledFilter>
  );
};

export default Filter;

const StyledFilter = styled.div`
  display: flex;
  max-width: 700px;
  width: 700px;
  margin: auto;
  word-break: break-all;
`;
