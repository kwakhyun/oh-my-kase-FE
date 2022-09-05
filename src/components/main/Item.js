import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Rating from "../detail/Rating";

const Item = React.forwardRef((item, ref) => {
  const { restaurant_id, name, address, img, avg_star } =
    item;
  const navigate = useNavigate();
 
  return (
    <StyledDiv>
      <StyledImg
        src={img}
        alt="img"
        onClick={() => {
          navigate("/detail/" + restaurant_id);
        }}
      />
      <div>
        
        <StyledText
          onClick={() => {
            navigate("/detail" + restaurant_id);
          }}
        >
          {name}
        </StyledText>
        <StyledText size="15px">{address}</StyledText>
        <Rating star={avg_star} />
      </div>
    </StyledDiv>
  );
});

export default Item;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 350px;
  margin: 20px auto;
  border-radius: 5px;
  font-size: 0.7em;
  box-shadow: 1px 1px 15px grey;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 90vw;
  height: 220px;
  margin: 0 auto 0;
`;
const StyledText = styled.p`
  font-size: ${(props) => props.size || "20px"};
  margin: 15px;
`;
