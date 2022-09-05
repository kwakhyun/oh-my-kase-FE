import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { RiHeartFill, RiHeartAddLine } from "react-icons/ri";
import MyPageButton from "../components/buttons/MyPageButton";
import DetailInfo from "../components/detail/DetailInfo";
import DetailImage from "../components/detail/DetailImage";
import { useDispatch, useSelector } from "react-redux";
import { getDetailData } from "../redux/modules/detailSlice";
import { useParams } from "react-router-dom";
import Tabs from "../components/detail/Tabs";

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
      <MyPageButton />
      
      <DetailInfo {...item} />
      <Tabs item={item} />
    </>
  );
};

export default Detail;

