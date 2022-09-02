import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const MyPageButton = () => {
  const [isLoggedIn, setIsLoggedIn]=useState(false) //테스트용 코드
  const navigate = useNavigate()
  return isLoggedIn?<StyledMyPageButton onClick={()=>{navigate('/mypage')}}></StyledMyPageButton>:<StyledMyPageButton onClick={()=>{navigate('/login')}}>Login</StyledMyPageButton>
};

export default MyPageButton;

const StyledMyPageButton = styled.button`
  position: fixed;
  right: 20px;
  margin: auto;
  background-color: #fff;
  width: 50px;
  height: 50px;
  font-size: 15px;
  color: #aaa;
  border-radius: 50%;
  border: none;
  transition: 0.3s;
  box-shadow: 1px 1px 15px grey;
  z-index: 1;
  &:hover {
    background-color: #ddd;
    color: white;
  }
`;
