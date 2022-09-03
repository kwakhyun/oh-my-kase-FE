import React, { useCallback, useEffect, useState } from "react";
import Item from "./Item";
import { useInView } from "react-intersection-observer";
import { getDataScroll } from "../../redux/modules/mainSlice";
import Skeleton from "./Skeleton";

const List = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
  });
  console.log(items);
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
      {items.map((item) =>
        item.map((item, idx) => (
          <div key={idx}>
            <Item {...item} key={item.id} ref={ref} />
            {console.log(item)}
          </div>
        ))
      )}
      {}
    </>
  );
};

export default List;
