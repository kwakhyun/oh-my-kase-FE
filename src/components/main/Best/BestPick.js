import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BestPickItem from './BestPickItem';

const BestPick = () => {
  const item = useSelector(state=>state.main.data)
  const itemArray = [...item]
  const items =  itemArray.sort((x, y) => y.avg_star - x.avg_star);
  const best = items.slice(0,5)
  
  return (
    <>
    <StyledTitle>Weekly Best</StyledTitle>
    <StyledDiv>
    {best.map((item, idx)=> <BestPickItem key={idx} {...item}/>)}
    </StyledDiv>
    </>
  );
};

export default BestPick;
const StyledDiv = styled.div`
display: flex;
width: 95vw;
height: 265px;
margin: 10px 20px 5px;
overflow-x: scroll;
overflow-y: hidden;
`
const StyledTitle = styled.span`
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
display: flex;
margin: 5px 30px
`
