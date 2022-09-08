import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const Menu = () => {
  const { restaurant_id } = useParams();
  const getMenuList = async () => {
    return await axios.get(
      `http://3.34.48.111/api/restaurant/${restaurant_id}/menu`
    );
  };

  const { data } = useQuery("menuList", getMenuList, {
    refetchOnWindowFocus: false,
  });

  const menuList = data?.data.data;

  return (
    <>
      <StyledText size="22px">Menu</StyledText>
      {menuList &&
        menuList.map((menu, idx) => (
          <div key={idx}>
            <StyledText size="20px">{menu.name}</StyledText>
            <StyledText size="20px">{menu.price}</StyledText>
          </div>
        ))}
    </>
  );
};

const StyledText = styled.p`
  font-size: ${(props) => props.size || "25px"};
  margin: 30px auto 40px;
  line-height: ${(props) => props.line || "30px"};
`;

export default Menu;
