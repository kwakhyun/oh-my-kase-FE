import { useQuery } from "react-query";
import axios from "axios";
import LikedItem from "./LikedItem";

const Like = () => {
  const getMyLiked = () => {
    // return axios.get("http://localhost:3001/api/auth/member/mypage/favorite");
    return axios.get("http://localhost:3001/liked");
  };

  const { data } = useQuery("myLiked", getMyLiked, {
    // retry: 0,
    // refetchOnWindowFocus: false,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // console.log(data);
  // console.log(data.data);

  const myLiked = data?.data;

  return (
    <div>
      {myLiked?.map((item) => {
        return <LikedItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Like;
