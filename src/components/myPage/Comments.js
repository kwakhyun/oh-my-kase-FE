import { useQuery } from "react-query";
import { commentsAPI } from "../../shared/api";
import CommentsItem from "./CommentsItem";
import { v4 } from "uuid";

const Comment = () => {
  const { data } = useQuery("myComments", commentsAPI.getMyComments, {
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
        return <CommentsItem key={v4()} item={item} />;
      })}
    </div>
  );
};

export default Comment;
