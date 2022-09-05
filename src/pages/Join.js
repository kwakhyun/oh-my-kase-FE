import axios from "axios";
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

  const token = localStorage.getItem("accessToken");
  console.log(token);

  const signup = () => {
    axios
      .post(
        "http://3.34.48.111/api/member/signup",
        {
          email: email.current.value,
          nickname: nickname.current.value,
          password: password.current.value,
          profile_image: "test",
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <StyledImgDiv>
        <div class="image-upload">
          <label for="file-input">
            <img
              src="https://velog.velcdn.com/images/danchoi/post/fac9c456-b1d5-41fd-b7e0-21a3feb2149f/image.png"
              alt=""
            />
          </label>

          <input id="file-input" type="file" />
        </div>
      </StyledImgDiv>
      <StyledSpan>Upload Image</StyledSpan>
      <StyledInputDiv>
      <div>
        <StyledSpan>Email*</StyledSpan>
        <input type="text" ref={email} placeholder="Enter your email" />
      </div>
      <div>
        <StyledSpan>Name*</StyledSpan>
        <input type="text" ref={nickname} placeholder="Enter yout name" />
      </div>
      <div>
        <StyledSpan>Password*</StyledSpan>
        <input type="password" ref={password} placeholder="Create a password" />
      </div>
      <div>
        <StyledSpan>Confirm Password*</StyledSpan>
        <input
          type="password"
          ref={passwordConfirm}
          placeholder="Confirm Password"
        />
      </div>
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
            // alert("회원가입 성공!");
            // navigate("/login");
            signup();
          }}
        >
          Submit
        </Button>
        <Button onClick={() => navigate("/login")}>Go Back</Button>
      </StyledButtonDiv>
    </div>
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
  .image-upload > input {
    display: none;
  }
`;

const StyledInputDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: #aaa;
  margin-top: 5vh;
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
`;
const StyledSpan = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
`;
const StyledButtonDiv = styled.div`
  display: flex;
  width: 220px;
  margin: auto;
`;

export default Join;
