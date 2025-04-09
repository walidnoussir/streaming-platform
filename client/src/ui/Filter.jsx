import { useSelector } from "react-redux";

function Filter() {
  const { categories } = useSelector((state) => state.category);
  console.log(categories);

  return (
    <ul>
      {categories.map((category) => (
        <li>{category}</li>
      ))}
    </ul>
  );
}

export default Filter;
