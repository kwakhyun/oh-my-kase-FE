import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/buttons/Button";
import Header from "../components/Header";
import Naver from "../img/naverButton.png";
import Google from "../img/googleButton.png";
import Footer from "./Footer";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const onLogin = () => {
    axios
      .post("http://3.34.48.111/api/member/login", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem(
            "accessToken",
            response.headers["authorization"]
          );
          localStorage.setItem(
            "refreshToken",
            response.headers["refresh-token"]
          );
          navigate("/");
        } else if (response.status !== 200) {
          alert("서버와 연결에 실패했습니다.");
        } else {
          alert("이메일과 비밀번호를 확인해주세요.");
        }
      });
  };

  return (
    <div>
      <Header />
      <StyledSpan>로그인</StyledSpan>
      <StyledInputDiv>
        <div>
          <span>이메일</span>
          <input
            type="email"
            ref={email}
            placeholder="이메일을 입력해주세요."
            autoFocus
          />
        </div>
        <div>
          <span>비밀번호</span>
          <input
            type="password"
            ref={password}
            placeholder="비밀번호를 입력해주세요."
          />
          <div className="error_message"></div>
        </div>
      </StyledInputDiv>
      <StyledButtonDiv>
        <Button
          font='"Do Hyeon", "sans-serif"'
          onClick={() => {
            if (email.current.value === "") {
              email.current.focus();
              document.querySelector(".error_message").innerHTML =
                "이메일을 입력해주세요.";
            } else if (password.current.value === "") {
              password.current.focus();
              document.querySelector(".error_message").innerHTML =
                "비밀번호를 입력해주세요.";
            } else {
              onLogin();
            }
          }}
        >
          로그인
        </Button>
        <Button onClick={() => navigate("/join")}>회원가입</Button>
      </StyledButtonDiv>
      <StyledSocialButtonDiv>
        <a href="http://jeeyeon.shop/oauth2/authorization/naver">
          <StyledSocialButton src={Naver} alt="button" />
        </a>
      </StyledSocialButtonDiv>
      <StyledSocialButtonDiv margin="0 auto 60px">
        <a href="http://jeeyeon.shop/oauth2/authorization/google">
          <StyledSocialButton src={Google} alt="button" />
        </a>
      </StyledSocialButtonDiv>
      <Footer />
    </div>
  );
};

const StyledSpan = styled.span`
  font-family: "Do Hyeon", sans-serif;
  font-size: 30px;
  color: #555;
`;

const StyledInputDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #aaa;
  margin: 2vh auto 20px;
  padding: 20px 10px;
  width: 80vw;
  box-shadow: 1px 1px 15px grey;
  border-radius: 15px;
  input {
    width: 50vw;
    height: 30px;
    margin: 15px 0;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ddd;
  }
  span {
    font-family: "Do Hyeon", sans-serif;
    font-size: 18px;
    margin: 10px;
    color: #555;
    text-align: left;
  }
  .error_message {
    color: red;
    font-size: 18px;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  width: 70vw;
  margin: auto;
`;

const StyledSocialButtonDiv = styled.div`
  width: 180px;
  margin: ${(props) => props.margin || "auto"};
`;

const StyledSocialButton = styled.img`
  position: relative;
  margin: 10px auto;
  height: 35px;
  width: 180px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;

export default Login;
