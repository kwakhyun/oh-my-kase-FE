import { useQuery } from "react-query";
import { likedAPI } from "../../shared/api";
import { v4 } from "uuid";
import LikedItem from "./LikedItem";

const Like = () => {
  const { data } = useQuery("myLiked", likedAPI.getMyLiked, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const myLiked = data?.data.data;

  return (
    <div>
      {myLiked?.map((item) => {
        return <LikedItem key={v4()} item={item} />;
      })}
    </div>
  );
};

export default Like;
