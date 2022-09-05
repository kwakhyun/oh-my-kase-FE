import axios, { Axios } from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../components/buttons/Button";
import Header from "../components/Header";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // 로그인 요청 테스트
  const loginTest = () => {
    axios
      .post("http://3.34.48.111/api/member/login", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((response) => {
        // if (response.payload.success) {
        console.log("로그인 성공!");
        console.log(response);

        localStorage.setItem("accessToken", response.headers["authorization"]);
        localStorage.setItem("refreshToken", response.headers["refresh-token"]);

        axios.defaults.headers.common["Authorization"] =
          localStorage.getItem("accessToken");

        // axios.get("api/user").then((response) => {
        //   console.log(response);
        // });
        // }
      });
  };

  const postTest = (restaurant_id) => {
    axios
      .post(`http://3.34.48.111/api/auth/favorite/`, {
        restaurant_id: restaurant_id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <StyledSpan>Login</StyledSpan>
      <StyledInputDiv>
        <div className="emailInput">
        <p>Email*</p>
        <input type="text" ref={email} placeholder="Enter your email" />
        </div>
        <div className="passwordInput">
        <p>Passwords*</p>
        <input type="password" ref={password} placeholder="Enter your password" />
        </div>
      </StyledInputDiv>
      <StyledButtonDiv>
        <Button
          onClick={() => {
            if (email.current.value === "") {
              alert("이메일을 입력해주세요.");
              return;
            } else if (password.current.value === "") {
              alert("비밀번호를 입력해주세요.");
              return;
            }
            // alert("로그인 성공!");
            // navigate("/");

            loginTest();
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
  margin-top: 10vh;
  margin-bottom: 20px;

  input {
    width: 50vw;
    height: 30px;
    margin: 10px 0;
    font-size: 16px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ddd;
  }
  .emailInput{
    margin-bottom: 10px;
  }
  .passwordInput{
    margin-bottom: 10px;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  width: 220px;
  margin: auto;
`;
export default Login;
