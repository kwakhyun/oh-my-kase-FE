import React, { useEffect } from 'react';
import TopScrollButton from '../components/buttons/TopScrollButton';
import Header from '../components/Header';
import Filter from '../components/main/Filter';
import List from '../components/main/List';
import MyPageButton from '../components/buttons/MyPageButton';
import { useDispatch } from 'react-redux';
import { __getData } from '../redux/modules/mainSlice';

//TODO: 상세페이지에 들어갔다가 다시 메인으로 나오면 게시물이 배수가됨.
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getData());
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