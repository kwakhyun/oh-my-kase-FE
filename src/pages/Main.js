import React, { useEffect } from 'react';
import TopScrollButton from '../components/buttons/TopScrollButton';
import Header from '../components/Header';
import Filter from '../components/main/Filter';
import List from '../components/main/List';
import MyPageButton from '../components/buttons/MyPageButton';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/modules/mainSlice';

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
      <Filter/>
      <List/>
    </>
  );
};

export default Main;