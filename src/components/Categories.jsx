function Categories() {
  const categories = [
    "🏖 Beach",
    "🏕 Camping",
    "🏡 House",
    "❄ Arctic",
    "🌊 Lake",
    "🏔 Mountain",
    "🏙 City",
    "🏝 Island"
  ];

  return (
    <div className="categories">
      {categories.map((item) => (
        <div className="category" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Categories;