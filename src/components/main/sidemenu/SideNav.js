import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MdDehaze, MdClose } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { myPageAPI } from "../../../shared/api";

const SideNav = () => {
  const menuRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true);
    }
  }, []);

  const { data } = useQuery("getMyInfo", myPageAPI.getMyInfo);
  const myInfo = data?.data.data;

  const navigate = useNavigate();
  const openDropDownHandler = () => {
    setOpenDropDown(!openDropDown);
  };

  const openNavHandler = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpenNav(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <StyledNavButton>
        <MdDehaze onClick={openNavHandler} />
      </StyledNavButton>
      {openNav ? (
        <StyledContainer ref={menuRef}>
          <StyledNavButton>
            <MdClose onClick={openNavHandler} />
          </StyledNavButton>
          {isLogin ? (
            <>
              <StyledItem>{myInfo.nickname}님 환영합니다!</StyledItem>
              <StyledImg
                src={myInfo.profile_img}
                onClick={() => navigate("/myPage")}
              />
              <StyledItem onClick={() => navigate("/myPage")}>
                마이 페이지
              </StyledItem>
            </>
          ) : (
            <StyledItem
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </StyledItem>
          )}
          <StyledDropDown onClick={openDropDownHandler}>
            지역별 찾기
            <RiArrowDropDownFill />
          </StyledDropDown>
          {openDropDown ? <Filter /> : null}
          <StyledItem
            margin="40px auto"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </StyledItem>
          {isLogin ? (
            <StyledItem
              margin="40px auto"
              onClick={() => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                setIsLogin(false);
              }}
            >
              로그아웃
            </StyledItem>
          ) : null}
        </StyledContainer>
      ) : null}
    </>
  );
};

const StyledNavButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: transparent;
  font-size: 35px;
  color: #aaa;
  border: none;
  transition: 0.5s;
  z-index: 0;
`;

const StyledContainer = styled.div`
  visibility: ${(props) => props.visibility};
  font-family: "Do Hyeon", sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 60vw;
  height: 100vh;
  background-color: white;
  transition: 100ms;
  padding: 8vw;
  overflow: hidden;
  opacity: 0.95;
  box-shadow: 1px 1px 65px grey;
`;

const StyledDropDown = styled.div`
  font-size: 25px;
  margin: 40px auto 10px;
`;

const StyledItem = styled.div`
  font-size: ${({ size }) => size || "20px"};
  margin: ${({ margin }) => margin || "20px auto"};
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: none;
`;

export default SideNav;
