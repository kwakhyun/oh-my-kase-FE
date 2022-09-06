import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <Header />
      <StyledDiv>
        <StyledImg
          src="https://images.unsplash.com/photo-1635452065566-9c89471bb86c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="img"
        />
        <StyledParagraph>Email</StyledParagraph>
        <StyledParagraph>ohmykase.official@gmail.com</StyledParagraph>
      </StyledDiv>
      <Footer/>
    </>
  );
};

export default Contact;
const StyledParagraph = styled.p`
  font-size: 20px;
`;
const StyledDiv = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 20px auto 50px;
  border-radius: 7px;
  font-size: 0.7em;
  box-shadow: 1px 1px 15px grey;
  background-color: white;
`;

const StyledImg = styled.img`
  object-fit: cover;
  border-radius: 7px;
`;
