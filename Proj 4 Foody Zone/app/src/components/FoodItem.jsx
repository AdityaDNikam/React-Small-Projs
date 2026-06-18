import React from 'react';

const FoodCard = ({ title, image, description, price, type }) => {
  return (
    // The main card container with a subtle glassmorphism/dark styling
    <div className={`max-h-[167px] m-[10px] flex p-5 rounded-3xl bg-[#232324]/80 backdrop-blur-xs border border-white/10 max-w-[340px] font-poppins `}>

      {/* Left Side: Circular Image */}
      <div className="w-[140px] h-[140px] shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-full shadow-xl"
        />
      </div>

      {/* Right Side: Text and Price */}
      <div className="flex flex-col flex justify-between flex-1 ml-5">

        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-bold text-white tracking-wide">
            {title}
          </h3>
          <p className="text-[10px] text-gray-300 mt-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price Tag (Aligned to bottom right) */}
        <div className="self-end mt-4">
          <span className="bg-brand-red text-white px-5 py-1.5 rounded-lg font-medium text-lg shadow-md">
            ${price}
          </span>
        </div>

      </div>
    </div>
  );
};

export default FoodCard;