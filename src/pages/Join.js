import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/buttons/Button";
import Header from "../components/Header";

const Join = () => {
  const email = useRef(null);
  const nickname = useRef(null);
  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <StyledImgDiv>
        <img
          src="https://i.pinimg.com/originals/4e/4f/da/4e4fda126c6778bfc2b2a678b58342df.jpg"
          alt="logo"
        />
        <input type="file" />
      </StyledImgDiv>
      <StyledInputDiv>
        <input type="text" ref={email} placeholder="Email" />
        <input type="text" ref={nickname} placeholder="Ninkname" />
        <input type="password" ref={password} placeholder="Password" />
        <input
          type="password"
          ref={passwordConfirm}
          placeholder="Password Confirm"
        />
      </StyledInputDiv>
      <StyledButtonDiv>
        <Button
          onClick={() => {
            if (email.current.value === "") {
              alert("이메일을 입력해주세요.");
              return;
            } else if (nickname.current.value === "") {
              alert("닉네임을 입력해주세요.");
              return;
            } else if (password.current.value === "") {
              alert("비밀번호를 입력해주세요.");
              return;
            } else if (passwordConfirm.current.value === "") {
              alert("비밀번호 확인을 입력해주세요.");
              return;
            }
            alert("회원가입 성공!");
            navigate("/login");
          }}
        >
          Submit
        </Button>
        <Button onClick={() => navigate("/login")}>초기화</Button>
      </StyledButtonDiv>
    </>
  );
};

const StyledImgDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
`;

const StyledInputDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5vh;
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
`;

export default Join;
