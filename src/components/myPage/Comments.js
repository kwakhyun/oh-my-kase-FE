import { useQuery } from "react-query";
import axios from "axios";
import CommentsItem from "./CommentsItem";

axios.defaults.headers.common["Authorization"] =
  localStorage.getItem("accessToken");
axios.defaults.headers.common["refresh-token"] =
  localStorage.getItem("refreshToken");

const Comment = () => {
  const getMyComments = () => {
    return axios.get("http://3.34.48.111/api/auth/member/mypage/comment");
  };

  const { data } = useQuery("myComments", getMyComments, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const myComments = data?.data.data;

  return (
    <div>
      {myComments?.map((item) => {
        return <CommentsItem key={item.email} item={item} />;
      })}
    </div>
  );
};

export default Comment;
