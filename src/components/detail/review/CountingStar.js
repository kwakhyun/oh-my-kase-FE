import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const ARRAY = [0, 1, 2, 3, 4];

const Stars = ({ setStar }) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const handleStarClick = (index) => {
    const clickState = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickState[i] = i <= index ? true : false;
    }
    setClicked(clickState);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    setStar(score);
  };
  return (
    <Wrap>
      <Star>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="20"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && "yellowStar"}
            />
          );
        })}
      </Star>
    </Wrap>
  );
};

export default Stars;

const Star = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: #999;
    cursor: pointer;
  }

  :hover svg {
    color: #ffcc33;
  }

  & svg:hover ~ svg {
    color: #999;
  }

  .yellowStar {
    color: #ffcc33;
  }
`;

const Wrap = styled.div`
  width: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;
