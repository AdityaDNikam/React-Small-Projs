import React from 'react';
import FoodCard from './FoodItem';

function Lander({ fooditemslist }) {

  if (!fooditemslist || fooditemslist.length === 0) {
    return (
      <div className="flex justify-center items-center py-20 w-full">
        <h1 className="text-3xl font-bold text-white tracking-wide font-poppins">
          Sold-out / No items match search!!!
        </h1>
      </div>
    );
  }

  return (
    <div className='max-w-screen h-cover mt-[60px] pb-10'>
      <div className='flex justify-center items-center flex-wrap max-w-7xl mx-auto'>
        {fooditemslist.map((item) => {
          return (
            <FoodCard
              key={item.name}
              image={item.image}
              title={item.name}
              description={item.text}
              price={item.price}
              type={item.type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Lander;