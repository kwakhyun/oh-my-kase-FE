import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const MyPageButton = () => {
  const [isLoggedIn, setIsLoggedIn]=useState(true) //테스트용 코드
  const navigate = useNavigate()
  return isLoggedIn?<StyledMyPageButton onClick={()=>{navigate('/mypage')}}></StyledMyPageButton>:<StyledMyPageButton onClick={()=>{navigate('/login')}}>Login</StyledMyPageButton>
};

export default MyPageButton;

const StyledMyPageButton = styled.button`
  position: fixed;
  right: 20px;
  top: 30px;
  margin: 5px 2px;
  padding: 15px;
  background-color: #fff;
  width: 90px;
  height: 90px;
  font-size: 20px;
  color: #aaa;
  border-radius: 50%;
  border: none;
  transition: 0.3s;
  box-shadow: 1px 1px 15px grey;

  &:hover {
    background-color: #ddd;
    color: white;
  }
`;
