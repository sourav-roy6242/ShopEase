


import React, { useState } from "react";
import {
  FaPills, FaTshirt, FaTv, FaAppleAlt, FaFootballBall,
  FaBook, FaDumbbell, FaCouch, FaSpa, FaShoePrints
} from "react-icons/fa";

const categories = [
  { name: "Medicine", icon: FaPills },
  { name: "Clothes", icon: FaTshirt },
  { name: "Electronics", icon: FaTv },
  { name: "Groceries", icon: FaAppleAlt },
  { name: "Sports", icon: FaFootballBall },
  { name: "Books", icon: FaBook },
  { name: "Fitness", icon: FaDumbbell },
  { name: "Furniture", icon: FaCouch },
  { name: "Beauty", icon: FaSpa },
  { name: "Shoes", icon: FaShoePrints },
];

const colors = [
  "#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#BBDEFB",
  "#C8E6C9", "#FFF9C4", "#FFE0B2", "#FFECB3", "#D7CCC8"
];

const sliceAngle = 360 / categories.length;

const CategoryWheel = () => {
  const [angle, setAngle] = useState(0);

  const rotateToCategory = (index) => {
    const targetAngle = 360 - index * sliceAngle - sliceAngle / 2;
    const normalizedTarget = targetAngle % 360;
    setAngle((prev) => prev + ((normalizedTarget - (prev % 360) + 360) % 360));
  };

  const getSelectedCategory = () => {
    const normalized = (angle % 360 + 360) % 360;
    const selectedIndex = Math.floor((360 - normalized - sliceAngle / 2 + 360) % 360 / sliceAngle);
    return categories[selectedIndex].name;
  };

  return (
    <div className="flex flex-col mt-5 ml-250  items-center justify-center w-150 h-120  select-none">
      
      {/* Top Arrow */}
      <div className="z-10 mb-[-20px]">
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-yellow-500"></div>
      </div>

      {/* Wheel */}
      <div
        className="relative w-[400px] h-[400px] rounded-full border-[8px] border-blue-800 transition-transform duration-1000 ease-out shadow-lg-black"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          const rotation = i * sliceAngle;
          // Push out the items further from center (radius)
          const radius = 160; // adjust radius (max ~200 for 400px diameter)

          // Calculate position using basic trig
          const radians = (rotation - 90) * (Math.PI / 180); // -90 to start from top

          const x = 200 + radius * Math.cos(radians); // 200 is center x
          const y = 200 + radius * Math.sin(radians); // 200 is center y

          return (
            <div
              key={i}
              onClick={() => rotateToCategory(i)}
              className="absolute cursor-pointer flex flex-col items-center"
              style={{
                top: y,
                left: x,
                transform: "translate(-50%, -50%)",
                color: "#333",
                width: 70,
                userSelect: "none",
              }}
            >
              <Icon size={26} />
              <span className="mt-1 text-xs font-semibold text-center">{cat.name}</span>
            </div>
          );
        })}

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-[20px] h-[20px] bg-blue-800 rounded-full border-[3px] border-white transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Selected Display */}
      <div className="mt-6 text-lg font-medium">
        Selected: <span className="font-bold text-blue-600">{getSelectedCategory()}</span>
      </div>
    </div>
  );
};

export default CategoryWheel;
