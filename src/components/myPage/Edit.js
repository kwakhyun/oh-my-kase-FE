import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import { useQuery } from "react-query";
import axios from "axios";

const Edit = () => {
  const nickname = useRef(null);

  const getMyInfo = () => {
    return axios.get("http://localhost:3001/member");
  };

  const { data } = useQuery("myInfo", getMyInfo, {
    onSuccess: (data) => {
      console.log(data);
    }
  });

  const myInfo = data?.data;
  console.log(myInfo);

  return (
    <div>
      <StyledImgDiv>
        <img
          src="https://i.pinimg.com/originals/4e/4f/da/4e4fda126c6778bfc2b2a678b58342df.jpg"
          alt="logo"
        />
        <input type="file" />
      </StyledImgDiv>
      <StyledInputDiv>
        <input type="text" ref={nickname} placeholder="변경할 닉네임 입력"/>
      </StyledInputDiv>
      <StyledButtonDiv>
        <Button onClick={() => {}}>Save</Button>
      </StyledButtonDiv>
    </div>
  );
};

const StyledImgDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
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

export default Edit;
