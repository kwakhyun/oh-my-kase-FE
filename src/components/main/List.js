import React, { useCallback, useEffect, useState } from "react";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
import { getDataScroll } from "../../redux/modules/mainSlice";
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
  const {district} = useParams()
  const districts = useSelector(state=>state.main.data)
  const filterDistrict = districts.filter((item)=>item.address.split(' ')[1]===district)
  console.log(filterDistrict)

  const loadItems = useCallback(async () => {
    setLoading(true);
    await getDataScroll(page, 2).then((res) => {
      setItems((prevState) => [...prevState, res]);
    });
    setLoading(false);
  }, [page]);
  // `getDataScroll` 이 바뀔 때 마다 함수 실행
  useEffect(() => {
    loadItems();
  }, [loadItems]);

  useEffect(() => {
    if (inView && !loading) {
      setTimeout(() => {
        setPage((prevState) => prevState + 1);
      }, 500);
    }
  }, [inView, loading]);

  const loadSkeleton = () => {
    <>
      <Skeleton />
      <Skeleton />
    </>;
  };

  return (
    <>
      {filterDistrict.map((item) =>
            <Item {...item} key={item.id} ref={ref} />
      )}
      {}
    </>
  );
};

export default List;