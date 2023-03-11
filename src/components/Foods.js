import React, { useState } from "react";
import { data } from "../data/data";

const Foods = () => {
  // console.log(data);

  const [foods, setFoods] = useState(data);

  // Filter type Pizza,chiken,etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter type Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-green-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}

      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}

        <div className="">
          <p className="font-bold text-gray-700 flex-wrap">Filter Type</p>
          <div className="">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/*Filter Price */}
        <div className="">
          <p className="font-bold text-gray-700 max-w-[360px] w-full">
            Filter Price
          </p>
          <div className="">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/*Display Food*/}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            key={index}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p>{item.name}</p>
              <p>
                <span className="bg-green-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
