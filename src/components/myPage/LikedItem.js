import styled from "styled-components";
import { RiHeartFill } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";
import { myPageAPI } from "../../shared/api";
import { useNavigate } from "react-router-dom";
import Rating from "../detail/Rating";

const LikedItem = ({ item }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(myPageAPI.cancelMyLiked, {
    onSuccess: () => {
      queryClient.invalidateQueries("myLiked");
    },
  });

  return (
    <StyledDiv>
      <StyledImg
        src={item.img}
        alt="img"
        onClick={() => navigate(`/detail/${item.restaurant_id}`)}
      />
      <div>
        <StyledText onClick={() => navigate(`/detail/${item.restaurant_id}`)}>
          {item.name}
        </StyledText>
        <Rating star={item.avg_star} />
        <StyledFavoriteDiv>
          <StyledText size="15px" color="#F44336" margin="0">
            <RiHeartFill />
          </StyledText>
          <StyledText size="15px" margin="0">
            ({item.favorite_num})
          </StyledText>
          <StyledFavorite
            onClick={() => {
              mutate(item.restaurant_id);
            }}
          >
            <RiHeartFill />
          </StyledFavorite>
        </StyledFavoriteDiv>
      </div>
    </StyledDiv>
  );
};

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
  font-size: ${(props) => props.size || "25px"};
  margin: ${(props) => props.margin || "10px auto 25px"};
  color: ${(props) => props.color};
`;
const StyledFavorite = styled.div`
  position: absolute;
  right: 8vw;
  padding: 2px;
  font-size: 25px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  color: #f44336;
  position: absolute;
  align-items: center;
  background-color: transparent;
  box-shadow: 1px 1px 15px #ccc;
  transform: translateY(-1vh);
  cursor: pointer;
`;
const StyledFavoriteDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;
export default LikedItem;
