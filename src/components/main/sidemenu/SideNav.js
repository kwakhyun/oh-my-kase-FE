import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "../../../hooks/useOutsideClick";
const SideNav = () => {
  //로그인에 따른 버튼 변화 테스트 코드
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ref = useRef()
  const [openSideNav, setOpenSideNav] = useState(false)
  const showSideNav = () => setOpenSideNav(!openSideNav)
  const [openDropDown, setOpenDropDown] = useState(false)
  // useOutsideClick(ref, ()=>{
  //     setOpenNav(false)
  // })
  const navigate = useNavigate();
  // const openNavHandler = () => {
  //   setOpenNav(!openNav);
  // };
  // const openDropDownHandler = () => {
  //   setOpenDropDown(!openDropDown);
  // };
 
  return (
    <>
      <StyledNavButton>
        <FaBars onClick={showSideNav}/>
      </StyledNavButton>
      {openSideNav && 
      <StyledContainer active={setOpenSideNav}>
        <StyledNavButton />
        {isLoggedIn ? (
          <>
            <StyledMyPageButton
              src="https://velog.velcdn.com/images/danchoi/post/fac9c456-b1d5-41fd-b7e0-21a3feb2149f/image.png"
              onClick={() => {
                navigate("/mypage");
              }}
            />
            <StyledItem size="20px">00님 환영합니다!</StyledItem>
          </>
        ) : (
          <StyledLogin
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </StyledLogin>
        )}
        <StyledDropDown>
          지역별 찾기
          <RiArrowDropDownFill />
        </StyledDropDown>
        {openDropDown ? <Filter /> : null}
        <StyledItem
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </StyledItem>
      </StyledContainer>
}
    </>
  );
};
const StyledNavButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: transparent;
  font-size: 25px;
  color: #aaa;
  border: none;
  transition: 0.5s;
  z-index: 2;
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
const StyledDropDownInner = styled.div`
  visibility: ${(props) => props.visibility};
`;
const StyledLogin = styled.div`
  font-size: 25px;
  margin: 40px auto;
`;
const StyledItem = styled.div`
  font-size: ${(props) => props.size || "25px"};
  margin: 40px auto;
`;

const StyledMyPageButton = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: none;
`;
export default SideNav;
