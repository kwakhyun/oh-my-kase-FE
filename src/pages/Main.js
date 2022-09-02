import React from 'react';
import TopScrollButton from '../components/buttons/TopScrollButton';
import Header from '../components/Header';
import Filter from '../components/main/Filter';
import List from '../components/main/List';
import MyPageButton from '../components/buttons/MyPageButton';

const Main = () => {
  return (
    <div>
      <MyPageButton/>
      <TopScrollButton/>
      <Header/>
      <Filter/>
      <List/>
    </div>
  );
};

export default Main;