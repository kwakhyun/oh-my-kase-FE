import React, { useCallback, useEffect, useState } from "react";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const List = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  //infinite scroll =useEffect와 useState를 통해 배열에 추가
  // 로드되는 요소의 마지막 데이터 아이디를 같이 넘기는 방식으로 page => x
  const regions = useSelector((state) => state.main.region);
  const data = useSelector((state) => state.main.data);
  const {district} = useParams();

  return (
    <>
      {district === "전체"
        ? data.map((item, idx) => <Item {...item} key={idx} ref={ref} />)
        : regions.map((item, idx) => <Item {...item} key={idx} ref={ref} />)}
    </>
  );
};

export default List;
