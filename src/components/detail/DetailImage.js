import React from "react";
import styled from "styled-components";

const DetailImage = ({ restaurant_img }) => {
  return <StyledImg src={restaurant_img} alt="img" />;
};

const StyledImg = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 400px;
  margin: 0 auto 0;
  box-shadow: 1px 1px 40px grey;
`;

export default DetailImage;
