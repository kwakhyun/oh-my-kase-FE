import React, { useCallback, useEffect, useRef, useState } from "react";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const List = () => {
  const regions = useSelector((state) => state.main.region);
  const { district } = useParams();
  const [items, setItems] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const page = useRef(0);
  const [ref, inView] = useInView();

  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://3.34.48.111/api/restaurant/page/${page.current}`
      );
      setItems((prevItems) => [...prevItems, ...data.data]);
      setHasNextPage(data.data.length === 5);
      if (data.data.length) {
        page.current += 5;
      }
      console.log(page.current);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      setTimeout(() => {
        fetch();
      }, 500);
    }
  }, [fetch, hasNextPage, inView]);

  return (
    <>
      <StyledDistrict>
        {district === "전체" ? "서울 오마카세" : district + " 오마카세"}
      </StyledDistrict>
      {district === "전체"
        ? items?.map((item, idx) => <Item {...item} key={idx} />)
        : regions.map((item, idx) => <Item {...item} key={idx} />)}
      <div ref={ref}></div>
      {hasNextPage ? (
        <>
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <div>마지막 페이지</div>
      )}
    </>
  );
};

const StyledDistrict = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  margin: 30px 30px;
  font-size: 25px;
  `;

export default List;