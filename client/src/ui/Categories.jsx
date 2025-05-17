import { useDispatch } from "react-redux";
import { addCategory } from "../store/categorySlice";
import { useContext } from "react";
import { ModalContext } from "./Modal";

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
  const { close } = useContext(ModalContext);

  function handleAddCategory(category) {
    dispatch(addCategory(category));

    close();
  }

  return (
    <div className="py-10 overflow-scroll max-h-[15rem] w-full">
      <ul className="grid grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-4">
        {categories.map((category) => (
          <li
            key={category}
            className="py-2 px-4 bg-primary-500 rounded-full text-center font-semibold cursor-pointer hover:bg-primary-600 text-white text-xs md:text-sm"
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
