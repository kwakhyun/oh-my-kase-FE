import { useQuery } from "react-query";
import { myPageAPI } from "../../shared/api";
import CommentsItem from "./CommentsItem";
import { v4 } from "uuid";

const Comment = () => {
  const { data } = useQuery("myComments", myPageAPI.getMyComments, {
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });

  const myComments = data?.data.data;

  return (
    <div>
      {myComments?.map((comment) => {
        return <CommentsItem key={v4()} comment={comment} />;
      })}
    </div>
  );
};

export default Comment;
