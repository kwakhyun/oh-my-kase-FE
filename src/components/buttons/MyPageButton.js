import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const MyPageButton = () => {
  const navigate = useNavigate()
  return <StyledMyPageButton onClick={()=>{navigate('/mypage')}}></StyledMyPageButton>;
};

export default MyPageButton;

const StyledMyPageButton = styled.button`
  position: fixed;
  left: 20px;
  top: 20px;
  margin: 5px 2px;
  padding: 15px;
  background-color: #fff;
  width: 80px;
  height: 80px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  transition: 0.3s;
  box-shadow: 1px 1px 15px grey;

  &:hover {
    background-color: #ddd;
    color: white;
  }
`;
