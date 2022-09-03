import React from "react";
import styled from "styled-components";

const DetailImage = ({ img }) => {
  return <StyledImg src={img} alt="img" />;
};

export default DetailImage;
const StyledImg = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 400px;
  margin: 0 auto 0;
`;
