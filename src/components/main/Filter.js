import React from "react";
import styled from "styled-components";
import FilterItem from "./FilterItem";
const Filter = () => {
  return (
    <StyledFilter>
      <FilterItem />
      <FilterItem />
      <FilterItem />
    </StyledFilter>
  );
};

export default Filter;

const StyledFilter = styled.div`
  display: flex;
  max-width: 400px;
  width: 400px;
  margin: auto;
  word-break: break-all;
`;
