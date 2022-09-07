import styled from "styled-components";
import { RiHeartFill } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";
import { myPageAPI } from "../../shared/api";
import { useNavigate } from "react-router-dom";

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
        <StyledFavorite
          onClick={() => {
            mutate(item.restaurant_id);
          }}
        >
          <RiHeartFill />
        </StyledFavorite>
        <StyledText onClick={() => navigate(`/detail/${item.restaurant_id}`)}>
          {item.name}
        </StyledText>
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
  font-size: ${(props) => props.size || "20px"};
  margin: 15px;
`;
const StyledFavorite = styled.div`
  margin: 10px;
  right: 25px;
  padding: 2px;
  font-size: 28px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: #f44336;
  position: absolute;
  align-items: center;
  background-color: transparent;
  box-shadow: 1px 1px 15px #ccc;
  cursor: pointer;
`;

export default LikedItem;
