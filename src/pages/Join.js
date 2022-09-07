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

  const fileRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    const data = {
      email: email.current.value,
      nickname: nickname.current.value,
      password: password.current.value,
    };

    formData.append("file", fileRef.current.files[0]);
    formData.append(
      "joinData",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );

    axios
      .post("http://3.34.48.111/api/member/signup", formData)
      .then((response) => {
        console.log(response);
        if (response.data.error === "DUPLICATE_EMAIL") {
          alert("이메일 중복입니다.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <form name="file" encType="multipart/form-data" onSubmit={handleSubmit}>
        <StyledImgDiv>
          <div className="image-upload">
            <label htmlFor="file-input">
              <img
                src="https://velog.velcdn.com/images/danchoi/post/fac9c456-b1d5-41fd-b7e0-21a3feb2149f/image.png"
                alt=""
              />
            </label>

            <input id="file-input" type="file" />
          </div>
        </StyledImgDiv>

        <input type="file" name="file" ref={fileRef} />

        <StyledInputDiv>
          <div>
            <span>이메일</span>
            <input type="text" ref={email} placeholder="Enter your email" />
          </div>
          <div>
            <span>이름</span>
            <input type="text" ref={nickname} placeholder="Enter your name" />
          </div>
          <div>
            <span>비밀번호</span>
            <input
              type="password"
              ref={password}
              placeholder="Create a password"
            />
          </div>
          <div>
            <span>비밀번호 확인</span>
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
              handleSubmit();
            }}
          >
            회원가입
          </Button>
          <Button onClick={() => navigate("/login")}>돌아가기</Button>
        </StyledButtonDiv>
        <input type="submit" value="가입하기" />
      </form>
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
}
`;
const StyledSpan = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  margin: auto;
`;
const StyledButtonDiv = styled.div`
  display: flex;
  width: 70vw;
  margin: auto;
`;

export default Join;
