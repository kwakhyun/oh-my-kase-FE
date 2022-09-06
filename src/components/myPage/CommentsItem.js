import styled from "styled-components";
import Rating from "../detail/Rating";

const CommentsItem = ({ item }) => {
  const {editReview,
    setEditReview,
    nickname,
    profile_img,
    star,
    content,
    createdAt} = item
  const postedAt = createdAt.slice(0, 10);
  return (
    <StyledDiv>
      <div>
      </div>
      <StyledAuthorDiv>
        {profile_img?(
          <StyledImg src={profile_img} onerror="this.style.display='none';" alt="업체이미지"></StyledImg>
        ) : (
          <StyledImg
            src="https://velog.velcdn.com/images/danchoi/post/fac9c456-b1d5-41fd-b7e0-21a3feb2149f/image.png"
            alt=""
          ></StyledImg>
        )}
        <div>
          <StyledSpan>업체명</StyledSpan>
          <Rating star={star} size={"12px"} margin={"25px auto 10px"} />
        </div>
        <StyledDiv>
          <StyledSpan>{content}</StyledSpan>
          <StyledDiv></StyledDiv>
          <StyledSpan style={{ float: "left" }}>{postedAt}</StyledSpan>
        </StyledDiv>
      </StyledAuthorDiv>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 20px;
  display: grid;
  grid-template-rows: 1fr;
`;
const StyledSpan = styled.span`
  font-size: 15px;
`;
const StyledImg = styled.img`
  height: 60px;
  width: 120px;
  object-fit: cover;
  float: left;
`;
const StyledAuthorDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 9fr;
  word-break: break-all;
`;
const StyledButton = styled.button`
  background-color: transparent;
  color: #4488F7;
  border: none;
  font-weight: bold;
`;


export default CommentsItem;
