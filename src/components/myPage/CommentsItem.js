import styled from "styled-components";
import Rating from "../detail/Rating";
import { useNavigate } from "react-router-dom";

const CommentsItem = ({ comment }) => {
  const navigate = useNavigate();
  const postedAt = comment.createdAt.slice(0, 10);

  return (
    <StyledDiv>
      <StyledAuthorDiv>
        <StyledImg
          src={comment.restaurant_img}
          alt="업체 이미지"
          onClick={() => navigate(`/detail/${comment.restaurant_id}`)}
        ></StyledImg>
        <Rating star={comment.star} size={"12px"} />
        <StyledUsername
          onClick={() => navigate(`/detail/${comment.restaurant_id}`)}
        >
          {comment.restaurant_name}
        </StyledUsername>
      </StyledAuthorDiv>
      <StyledContent>
        <StyledContentInner className="content">
          {comment.content}
        </StyledContentInner>
        <StyledContentInner>
          <StyledContentInnerChild className="content">
            {postedAt}
          </StyledContentInnerChild>
        </StyledContentInner>
      </StyledContent>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 5px 40px 0 20px;
  word-break: break-all;
  display: grid;
  grid-template-columns: 1.8fr 3fr;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .content {
    margin: 0 0 5px 10px;
  }
`;

const StyledAuthorDiv = styled.div`
  font-size: 15px;
  display: grid;
  justify-content: center;
`;

const StyledImg = styled.img`
  height: 100px;
  width: 140px;
  object-fit: cover;
  float: left;
  display: grid;
`;

const StyledContent = styled.div`
  font-size: 17px;
  grid-template-rows: 3fr 1fr;
`;

const StyledContentInner = styled.div`
  font-size: 15px;
`;

const StyledContentInnerChild = styled.div`
  font-size: 13px;
`;

const StyledUsername = styled.div`
  font-size: 17px;
`;

export default CommentsItem;