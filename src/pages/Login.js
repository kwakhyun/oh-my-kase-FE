import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/buttons/Button";
import Header from "../components/Header";

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
        console.log(response);
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
      <StyledSpan>Login</StyledSpan>
      <StyledInputDiv>
        <span>Email*</span>
        <input
          type="email"
          ref={email}
          placeholder="Enter your email"
          autoFocus
        />
        <span>Passwords*</span>
        <input
          type="password"
          ref={password}
          placeholder="Enter your password"
        />
        <div className="error_message"></div>
      </StyledInputDiv>
      <StyledButtonDiv>
        <Button
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
          Login
        </Button>
        <Button onClick={() => navigate("/join")}>Join</Button>
      </StyledButtonDiv>
    </div>
  );
};

const StyledSpan = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
`;

const StyledInputDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #aaa;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 8vh;
  margin-bottom: 20px;
  input {
    width: 50vw;
    height: 30px;
    margin: 10px 0;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
  }
  .error_message {
    color: red;
    font-size: 12px;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  width: 200px;
  margin: auto;
`;
export default Login;
