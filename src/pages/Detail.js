import React from "react";
import Header from "../components/Header";
import DetailInfo from "../components/detail/DetailInfo";
import DetailImage from "../components/detail/DetailImage";
import { useParams } from "react-router-dom";
import Tabs from "../components/detail/Tabs";
import Footer from "./Footer";
import TopScrollButton from "../components/buttons/TopScrollButton";
import SideNav from "../components/main/sidemenu/SideNav";
import { useQuery } from "react-query";
import { detailPageAPI } from "../shared/api";
import axios from "axios";

const Detail = () => {
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
