import React, { useEffect } from 'react';
import TopScrollButton from '../components/buttons/TopScrollButton';
import Header from '../components/Header';
import Filter from '../components/main/Filter';
import List from '../components/main/List';
import LogInOutButton from '../components/buttons/LogInOutButton';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/modules/mainSlice';
import MyPageButton from '../components/buttons/MyPageButton';
import BestPick from '../components/main/Best/BestPick';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <Header/>
      <LogInOutButton/>
      <MyPageButton/>
      <TopScrollButton/>
      <BestPick/>
      <Filter/>
      <List/>
    </>
  );
};

export default Main;