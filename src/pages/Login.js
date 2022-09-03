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

  return (
    <div>
      <Header />
      <StyledH2>Login</StyledH2>
      <StyledInputDiv>
        <input type="text" ref={email} placeholder="Email" />
        <input type="password" ref={password} placeholder="Password" />
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
            alert("로그인 성공!");
            navigate("/");
          }}
        >
          Login
        </Button>
        <Button onClick={() => navigate("/join")}>Join</Button>
      </StyledButtonDiv>
    </div>
  );
};

const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-top: 10vh;
`;

const StyledInputDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  margin-bottom: 20px;

  input {
    width: 50vw;
    height: 40px;
    margin: 5px 0;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 16px;
    font-weight: 600;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export default Login;
