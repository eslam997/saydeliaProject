import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  const categories = [
    { image: "/image/Now_1739868905.webp", Type: "Medicines" },
    { image: "/image/Frame-2534_1744632197.webp", Type: "Hair care" },
    { image: "/image/Frame-2457-1_1679493245.webp", Type: "Skin care" },
    { image: "/image/Daily-Essentials_1707299956.webp", Type: "Daily care" },
    { image: "/image/Frame-2458-1_1667483491.webp", Type: "Medical supplies" },
    { image: "/image/Frame-2536_1741085282.webp", Type: "Vitamins and supplements" },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-10 mt-6 p-4">
      {categories.map((category, index) => (
        <div className="flex flex-col cursor-pointer hover:scale-125" key={index}>
          <Link to={`/ProductType/${category.Type}`}>
            <img
              className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover"
              src={category.image}
              alt={category.Type}
            />
          </Link>
          <h1 className="text-center font-bold text-sm">{category.Type}</h1>
        </div>
      ))}
    </div>
  );
}

export default Category;
