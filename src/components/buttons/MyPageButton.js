import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const MyPageButton = () => {
  const navigate = useNavigate();
  return (
    //TODO:로그인시에만 보이도록 조건문 
    <StyledMyPageButton src="https://velog.velcdn.com/images/danchoi/post/fac9c456-b1d5-41fd-b7e0-21a3feb2149f/image.png"
      onClick={() => {
        navigate("/mypage");
      }}
    />
  )
};

export default MyPageButton;

const StyledMyPageButton = styled.img`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #fff;
  width: 50px;
  height: 50px;
  font-size: 10px;
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
