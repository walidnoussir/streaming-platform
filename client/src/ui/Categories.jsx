import { useDispatch } from "react-redux";
import { addCategory } from "../store/categorySlice";

const categories = [
  "All",
  "Podcast",
  "Comedy",
  "Reading",
  "Intelligence",
  "Sport",
  "History",
  "Music",
  "Movies",
  "Programming",
];

function Categories() {
  const dispatch = useDispatch();

  function handleAddCategory(category) {
    dispatch(addCategory(category));
    console.log(category);
  }

  return (
    <div className="py-10 overflow-scroll">
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-4">
        {categories.map((category) => (
          <li
            className="py-2 px-4 bg-slate-200 rounded-full text-center font-semibold cursor-pointer hover:bg-slate-300 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-600 text-xs md:text-base"
            onClick={() => handleAddCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
