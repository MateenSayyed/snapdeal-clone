import React from "react";
import "./Tags.css";

const Tags = () => {
  const tags = [
    "kitchen product",
    "shoes for men",
    "kurti set",
    "sandal men",
    "sport shoe men",
    "saree",
    "tshirt",
    "wall stickers",
  ];

  return (
    <div className="tags">
      <span>Trending searches:</span>
      {tags.map((tag, index) => (
        <button key={index} className="tag-btn">
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;
