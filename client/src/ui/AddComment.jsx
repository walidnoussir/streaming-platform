import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../store/commentSlice";

function AddComment() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  function handleAddComment(e) {
    e.preventDefault();
    const newComment = {
      comment: comment.trim(),
    };
    if (!comment || !comment.trim()) return;

    dispatch(addComment(newComment));
    setComment("");
  }

  return (
    <form className="flex gap-2 mb-4 self-end w-full">
      <input
        type="text"
        placeholder="Add a comment..."
        className="input flex-1 border rounded p-2 dark:bg-transparent dark:placeholder:text-slate-50 dark:text-white dark:border-slate-500"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className="bg-primary-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={handleAddComment}
      >
        <SendHorizontal />
      </button>
    </form>
  );
}

export default AddComment;
