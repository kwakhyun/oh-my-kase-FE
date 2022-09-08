import React from "react";
import styled from "styled-components";

const Skeleton = () => {
  return (
    <Div>
      <Img>
        <Shimmer />
      </Img>
      <Wrap>
        <Text>
          <Shimmer />
        </Text>
        <Text>
          <Shimmer />
        </Text>
      </Wrap>
    </Div>
  );
};

const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 30px 30px #e0e0e0;
  animation: loading 2s infinite;
  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translate(200%);
    }
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 350px;
  margin: 20px auto;
  border: 1px solid #e8e7e6;
  border-radius: 5px;
  font-size: 0.7em;
  overflow-x: visible;
  background-color: white;
  box-shadow: 1px 1px 15px grey;
`;

const Img = styled.div`
  width: 90vw;
  height: 220px;
  margin: 0 auto 0;
  overflow: hidden;
  background-color: #eeeeee;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0.4rem;
`;

export const Text = styled.div`
  width: 50vw;
  height: 30px;
  margin: 15px auto;
  overflow: hidden;
  background-color: #eeeeee;
`;

export default Skeleton;
