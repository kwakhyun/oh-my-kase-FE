import React, { useEffect } from 'react';
import TopScrollButton from '../components/buttons/TopScrollButton';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/modules/mainSlice';
import BestPick from '../components/main/Best/BestPick';
import SideNav from '../components/main/sidemenu/SideNav';
import Footer from './Footer';
import Intro from '../components/main/Intro';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  
  return (
    <>
      <Header/>
      <TopScrollButton/>
      <SideNav/>
      <BestPick/>
      <Intro/>
      <Footer/>
    </>
  );
};

export default Main;