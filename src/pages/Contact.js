import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SideNav from "../components/main/sidemenu/SideNav";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <SideNav/>
      <StyledDiv>
        <StyledImg
          src="https://images.unsplash.com/photo-1635452065566-9c89471bb86c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="img"
        />
        <StyledTextDiv>
          <StyledParagraph>Email</StyledParagraph>
          <StyledParagraph>ohmykase.official@gmail.com</StyledParagraph>
        </StyledTextDiv>
      </StyledDiv>
      <Footer />
    </>
  );
};

const StyledParagraph = styled.p`
  font-size: 20px;
  `;
const StyledDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
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
const StyledTextDiv = styled.div`
  margin-bottom: 20px;
  `;

const StyledImg = styled.img`
  object-fit: cover;
  border-radius: 7px;
  `;

export default Contact;