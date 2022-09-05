import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const LogInOutButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //테스트용 코드
  const navigate = useNavigate();
  return isLoggedIn ? (
    <StyledMyPageButton
      onClick={() => {
        //navigate("/logout");
      }}
    ></StyledMyPageButton>
  ) : (
    <StyledMyPageButton
      onClick={() => {
        navigate("/login");
      }}
    >
      Login
    </StyledMyPageButton>
  );
};

export default LogInOutButton;

const StyledMyPageButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
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
