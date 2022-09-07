import styled from "styled-components";
import Rating from "../detail/Rating";
import { useNavigate } from "react-router-dom";

const CommentsItem = ({ comment }) => {
  const navigate = useNavigate();
  const postedAt = comment.createdAt.slice(0, 10);

  return (
    <StyledDiv>
      <div></div>
      <StyledAuthorDiv>
        <StyledImg
          src={comment.restaurant_img}
          alt="업체 이미지"
          onClick={() => navigate(`/detail/${comment.restaurant_id}`)}
          // 준묵님! 업체 이미지랑 이름 그리고 상세 페이지로 이동까지
          // 백엔드에서 데이터 넣어주면 바로 적용될거에요!
          // 제가 진경님한테 부탁드려놨습니다!
        ></StyledImg>
        <div>
          <StyledSpan
            onClick={() => navigate(`/detail/${comment.restaurant_id}`)}
          >
            {comment.restaurant_name}
          </StyledSpan>
          <Rating star={comment.star} size={"12px"} margin={"25px auto 10px"} />
        </div>
        <StyledDiv>
          <StyledSpan>{comment.content}</StyledSpan>
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
  color: #4488f7;
  border: none;
  font-weight: bold;
`;

export default CommentsItem;
