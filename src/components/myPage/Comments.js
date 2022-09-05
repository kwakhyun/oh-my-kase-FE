import { useQuery } from "react-query";
import axios from "axios";
import CommentsItem from "./CommentsItem";

const Comment = () => {
  const getMyComments = () => {
    return axios.get("http://localhost:3001/comments");
  };

  const { data } = useQuery("myComments", getMyComments, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const myComments = data?.data;

  return (
    <div>
      {myComments?.map((item) => {
        return <CommentsItem key={item.email} item={item} />;
      })}
    </div>
  );
};

export default Comment;
