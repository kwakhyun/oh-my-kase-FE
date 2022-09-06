import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogInOutButton = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  return token ? (
    <StyledMyPageButton
      onClick={() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        alert("로그아웃 되었습니다.");
        navigate("/");
      }}
    >
      Logout
    </StyledMyPageButton>
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
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    color: white;
  }
`;
