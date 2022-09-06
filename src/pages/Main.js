import React, { useEffect } from 'react';
import TopScrollButton from '../components/buttons/TopScrollButton';
import Header from '../components/Header';
import List from '../components/main/List';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/modules/mainSlice';
import MyPageButton from '../components/buttons/MyPageButton';
import BestPick from '../components/main/Best/BestPick';
import SideNav from '../components/main/sidemenu/SideNav';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <Header/>
      <MyPageButton/>
      <TopScrollButton/>
      <SideNav/>
      <BestPick/>
      <List/>
    </>
  );
};

export default Main;