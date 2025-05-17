import { CircleX } from "lucide-react";

import { useSelector } from "react-redux";

function Filter() {
  const { categories } = useSelector((state) => state.category);

  return (
    <ul className="flex gap-2 py-4 px-2 overflow-x-scroll">
      {categories.map((category) => (
        <li className="bg-primary-500 text-white py-1 px-3.5 rounded-full flex items-center gap-10">
          <h3>{category}</h3>
          <CircleX className="cursor-pointer" />
        </li>
      ))}
    </ul>
  );
}

export default Filter;
