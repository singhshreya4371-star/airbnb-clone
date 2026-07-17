import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

function Categories() {
  const { category, setCategory } = useContext(CategoryContext);

  const categories = [
    "🏖 Beach",
    "🏕 Camping",
    "🏡 House",
    "❄ Arctic",
    "🌊 Lake",
    "🏔 Mountain",
    "🏙 City",
    "🏝 Island",
    "🌲 Forest",
    "🏰 Castle",
  ];

  return (
    <div className="categories">
      {categories.map((item) => (
        <div
          className={`category ${category === item ? "active" : ""}`}
          key={item}
          onClick={() => setCategory(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Categories;