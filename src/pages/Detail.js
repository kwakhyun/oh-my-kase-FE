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
import TopScrollButton from "../components/buttons/TopScrollButton";
import SideNav from "../components/main/sidemenu/SideNav";
import { useQuery } from "react-query";
import { detailPageAPI } from "../shared/api";
import axios from "axios";

const Detail = () => {
  // const dispatch = useDispatch();
  // const item = useSelector((state) => state.detail.data);
  // useEffect(() => {
  //   dispatch(getDetailData(restaurant_id));
  // }, [dispatch, restaurant_id]);
  const { restaurant_id } = useParams();

  const getDetailData = async () => {
    return await axios.get(
      `http://3.34.48.111/api/restaurant/${restaurant_id}`,
      {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
          "refresh-token": localStorage.getItem("refreshToken"),
        },
      }
    );
  };
  const { data } = useQuery("getDetailData", getDetailData);
  const detailData = data?.data.data;

  return (
    <>
      <Header />
      <DetailImage {...detailData} />
      <TopScrollButton />
      <SideNav />
      <DetailInfo {...detailData} />
      <Tabs item={detailData} />
      <Footer />
    </>
  );
};

export default Detail;
