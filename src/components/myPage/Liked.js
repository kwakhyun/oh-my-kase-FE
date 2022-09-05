import { useQuery } from "react-query";
import axios from "axios";
import LikedItem from "./LikedItem";

axios.defaults.headers.common["Authorization"] =
  localStorage.getItem("accessToken");
axios.defaults.headers.common["refresh-token"] =
  localStorage.getItem("refreshToken");

const getMyLiked = () => {
  return axios.get("http://3.34.48.111/api/auth/member/mypage/favorite");
};

const Like = () => {
  const { data } = useQuery("myLiked", getMyLiked, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // console.log(data);
  // console.log(data.data);

  const myLiked = data?.data.data;

  return (
    <div>
      {myLiked?.map((item) => {
        return <LikedItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Like;
