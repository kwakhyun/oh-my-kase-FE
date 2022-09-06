import React, { useEffect } from "react";
import Header from "../components/Header";
import LogInOutButton from "../components/buttons/LogInOutButton";
import DetailInfo from "../components/detail/DetailInfo";
import DetailImage from "../components/detail/DetailImage";
import { useDispatch, useSelector } from "react-redux";
import { getDetailData } from "../redux/modules/detailSlice";
import { useParams } from "react-router-dom";
import Tabs from "../components/detail/Tabs";
import MyPageButton from "../components/buttons/MyPageButton";
import Footer from "./Footer";

const Detail = () => {
  const dispatch = useDispatch();
  const { restaurant_id } = useParams();
  const item = useSelector((state) => state.detail.data);
  useEffect(() => {
    dispatch(getDetailData(restaurant_id));
  }, [dispatch, restaurant_id]);
 
  return (
    <>
      <Header />
      <DetailImage {...item} />
      <LogInOutButton />
      <MyPageButton />
      <DetailInfo {...item} />
      <Tabs item={item} />
      <Footer/>
    </>
  );
};

export default Detail;

