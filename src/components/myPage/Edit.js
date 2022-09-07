import React, { useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { myPageAPI } from "../../shared/api";
import styled from "styled-components";
import Button from "../buttons/Button";

const Edit = () => {
  const nickname = useRef(null);

  const { data } = useQuery("myInfo", myPageAPI.getMyInfo, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const myInfo = data?.data.data;

  const queryClient = useQueryClient();
  const { mutate } = useMutation(myPageAPI.editMyInfo, {
    onSuccess: () => {
      alert("저장 완료!");
      queryClient.invalidateQueries("myInfo");
    },
  });

  const file = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file.current.files[0]);
    formData.append(
      "editData",
      new Blob([JSON.stringify({ nickname: nickname.current.value })], {
        type: "application/json",
      })
    );
    mutate(formData);
  };

  return (
    <div>
      <form name="file" encType="multipart/form-data" onSubmit={handleSubmit}>
        <StyledImgDiv>
          {myInfo?.profile_img !== "" ? (
            <img src={myInfo?.profile_img} alt="logo" />
          ) : (
            <img
              src="https://i.pinimg.com/originals/4e/4f/da/4e4fda126c6778bfc2b2a678b58342df.jpg"
              alt="logo"
            />
          )}
          <input type="file" name="file" ref={file} />
        </StyledImgDiv>
        <StyledInputDiv>
          <input type="text" ref={nickname} defaultValue={myInfo?.nickname} />
        </StyledInputDiv>
        <StyledButtonDiv>
          <Button type="submit">저장하기</Button>
        </StyledButtonDiv>
      </form>
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
    width: 40vw;
    height: 40px;
    margin: 5px 0;
    border: none;
    border-bottom: 1px solid #000;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    outline: none;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Edit;
