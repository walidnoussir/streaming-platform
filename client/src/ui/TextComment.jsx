import { useSelector } from "react-redux";

function TextComment() {
  const { comments } = useSelector((store) => store.comment);

  return (
    <main className="h-[80%] overflow-y-scroll flex flex-col gap-2.5">
      {comments?.map((comment) => (
        <p
          className="text-black bg-gray-200 rounded-lg w-fit p-2"
          key={comment}
        >
          {comment.comment}
        </p>
      ))}
    </main>
  );
}

export default TextComment;
