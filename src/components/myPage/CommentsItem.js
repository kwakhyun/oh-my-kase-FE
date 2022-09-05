import styled from "styled-components";

const CommentsItem = ({ item }) => {
  return (
    <StyledDiv>
      <StyledSpanDiv>
        <span>{item.nickname}</span>
        <span>{item.star}</span>
      </StyledSpanDiv>
      <p>{item.content}</p>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 80%;
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  p {
    text-align: left;
  }
`;

const StyledSpanDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export default CommentsItem;
