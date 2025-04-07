import AddComment from "../ui/AddComment";
import TextComment from "../ui/TextComment";

function Comments() {
  return (
    <div className="bg-white p-4 m-2 shadow rounded h-[28rem] flex flex-col border border-gray-100 dark:bg-slate-800 dark:border-slate-950 dark:text-white">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      <TextComment />
      <AddComment />
    </div>
  );
}

export default Comments;
