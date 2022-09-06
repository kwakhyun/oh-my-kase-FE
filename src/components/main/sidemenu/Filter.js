import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FilterItem from "./FilterItem";
const Filter = () => {
  const [selectDistrict, setSelectDistrict] = useState("전체");
  const districts = useSelector((state) => state.main.data);
  const sets = districts.map((item) => item.address.split(" ")[1]);
  const set = new Set(sets);
  const districtArr = [...set];
  districtArr.sort();
  return (
    <StyledFilter>
      <FilterItem setSelectDistrict={setSelectDistrict} item={"전체"} />
      {districtArr.map((item, idx) => (
        <FilterItem
          setSelectDistrict={setSelectDistrict}
          key={idx}
          item={item}
        />
      ))}
    </StyledFilter>
  );
};

export default Filter;

const StyledFilter = styled.div``;
