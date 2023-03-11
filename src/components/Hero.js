import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* AAA */}

        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
            The <span className="text-green-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-green-500">Delivery </span> Foods
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;