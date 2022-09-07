import React, { useCallback, useEffect, useState } from "react";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getItems } from "../../redux/modules/mainSlice";

const List = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView({
    threshold: 1,
  });
  //infinite scroll =useEffect와 useState를 통해 배열에 추가
  // 로드되는 요소의 마지막 데이터 아이디를 같이 넘기는 방식으로 page => x
  const regions = useSelector((state) => state.main.region);
  const data = useSelector((state) => state.main.data);
  const { district } = useParams();

  // //로컬 스토리지에 데이터 저장
  // useEffect(() => {
  //   var getList = localStorage.getItem("array");
  //   if (getList === null) {
  //     getList = [];
  //   } else {
  //     getList = JSON.parse(getList);
  //   }
  //   localStorage.setItem("array", JSON.stringify(data));
  // }, [data]);

  // var getList = localStorage.getItem("array");
  // const restaurantArray = JSON.parse(getList);
  // //배열 나누기 함수
  // const division = (arr, count) => {
  //   const length = arr.length;
  //   const divide =
  //     Math.floor(length / count) + (Math.floor(length % count) > 0 ? 1 : 0);
  //     const newArray = []
  //     for (let i = 0; i<=divide; i++){
  //       newArray.push(arr.splice(0, count))
  //     }
  //     return newArray
  // };
  // //로컬스토리지 저장된 배열 5개씩 자르기
  // const paging = division(restaurantArray, 5)

  const loadItems = useCallback(async () => {
    setLoading(true);
    await getItems(page, 6).then((res) => {
      setItems((prevState) => [...prevState, res]);
    });
    setLoading(false);
  }, [page]);

  
  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    loadItems();
  }, [loadItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setTimeout(() => {
        setPage((prevState) => prevState + 1);
      }, 200);
    } 
  }, [inView, loading]);

  

  return (
    <>
      <StyledDistrict>
        {district === "전체" ? "서울 오마카세" : district + " 오마카세"}
      </StyledDistrict>
      {district === "전체"
        ? data.length > 0 &&
          items?.map((item, idx) => <Item {...item} key={idx}/>)
        : regions.map((item, idx) => <Item {...item} key={idx}/>)}
        <div ref={ref} style={{"border":"1px solid black"}}></div>
    </>
  );
};

export default List;

const StyledDistrict = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  margin: 30px 30px;
  font-size: 25px;
`;
