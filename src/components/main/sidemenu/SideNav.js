import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";
const SideNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

  const navigate = useNavigate()

  const openNavHandler = () => {
    setOpenNav(!openNav);
  };
  const openDropDownHandler = () => {
    setOpenDropDown(!openDropDown);
  };
  console.log(openNav);
  return (
    <>
      <StyledNavButton onClick={openNavHandler}>
        <AiOutlineMenu />
      </StyledNavButton>
      <StyledContainer visibility={openNav ? "visible" : "hidden"}>
        <StyledNavButton onClick={openNavHandler} />
        <StyledLogin onClick={()=>{navigate('/login')}}>로그인</StyledLogin>
        <StyledDropDown>
          지역별 찾기
          <RiArrowDropDownFill />
        </StyledDropDown>
        <Filter />
        <StyledItem onClick={()=>{navigate('/contact')}}>Contact</StyledItem>
        <StyledItem></StyledItem>
        <StyledItem></StyledItem>
      </StyledContainer>
    </>
  );
};
const StyledNavButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: transparent;
  font-size: 25px;
  color: #aaa;
  border: none;
  transition: 0.5s;
  z-index: 2;
  &:hover {
    background-color: #ddd;
    color: white;
  }
`;

const StyledContainer = styled.div`
  visibility: ${(props) => props.visibility};
  font-family: "Do Hyeon", sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 40vw;
  height: 100vh;
  background-color: white;
  transition: 100ms;
  padding: 60px;
  overflow: hidden;
`;
const StyledDropDown = styled.div`
  font-size: 25px;
  margin: 40px auto 10px;
`;
const StyledLogin = styled.div`
  font-size: 25px;
  margin: 40px auto;
`;
const StyledItem = styled.div`
  font-size: 25px;
  margin: 40px auto;
`;
export default SideNav;
