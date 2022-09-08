import styled from "styled-components";
import Rating from "../detail/Rating";
import { useNavigate } from "react-router-dom";

const CommentsItem = ({ comment }) => {
  const navigate = useNavigate();
  const postedAt = comment.createdAt.slice(0, 10);

  return (
    // <StyledDiv>
    //   <div></div>
    //   <StyledAuthorDiv>
    //     <StyledImg
    //       src={comment.restaurant_img}
    //       alt="업체 이미지"
    //       onClick={() => navigate(`/detail/${comment.restaurant_id}`)}
    //       // 준묵님! 업체 이미지랑 이름 그리고 상세 페이지로 이동까지
    //       // 백엔드에서 데이터 넣어주면 바로 적용될거에요!
    //       // 제가 진경님한테 부탁드려놨습니다!
    //     ></StyledImg>
    //     <div>
    //       <StyledSpan
    //         onClick={() => navigate(`/detail/${comment.restaurant_id}`)}
    //       >
    //         {comment.restaurant_name}
    //       </StyledSpan>
    //       <Rating star={comment.star} size={"12px"} margin={"25px auto 10px"} />
    //     </div>
    //     <StyledDiv>
    //       <StyledSpan>{comment.content}</StyledSpan>
    //       <StyledDiv></StyledDiv>
    //       <StyledSpan style={{ float: "left" }}>{postedAt}</StyledSpan>
    //     </StyledDiv>
    //   </StyledAuthorDiv>

      <StyledDiv>
        <StyledAuthorDiv>
            <StyledImg
              src={comment.restaurant_img}
              alt="업체 이미지"
          onClick={() => navigate(`/detail/${comment.restaurant_id}`)}
            ></StyledImg>
          <Rating star={comment.star} size={"12px"} />
          <StyledUsername onClick={() => navigate(`/detail/${comment.restaurant_id}`)}
          >
            {comment.restaurant_name}</StyledUsername>
        </StyledAuthorDiv>
        <StyledContent>
          <StyledContentInner className="content">{comment.content}</StyledContentInner>
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
  border: 1px solid black;
`;


export default CommentsItem;

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
