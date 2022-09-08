import React, { useEffect } from "react";
import TopScrollButton from "../components/buttons/TopScrollButton";
import Header from "../components/Header";
import List from "../components/main/List";
import { useDispatch } from "react-redux";
import { getData } from "../redux/modules/mainSlice";
import BestPick from "../components/main/Best/BestPick";
import SideNav from "../components/main/sidemenu/SideNav";
import Footer from "./Footer";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <Header />
      <TopScrollButton />
      <SideNav />
      <BestPick />
      <List />
      <Footer />
    </>
  );
};

export default Main;
