import React from "react";

const HomeImage = () => {
  const imageUrl = "/main-school.jpg"; // Image path in the public folder

  return (
    <div className="relative w-full h-[550px] lg:h-[850px]">
      <div className="absolute w-full h-full bg-gradient-to-r from-black opacity-50" />
      <img
        className="w-full h-full object-cover object-top"
        src={imageUrl}
        alt="School"
      />
      <div className="absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8">
        <h1 className="text-3xl md:text-6xl font-bold text-white">Welcome</h1>
        <div className="mt-8 mb-4">
          <button className="capitalize border bg-gray-300 py-2 px-5 text-black">
            Learn More
          </button>
        </div>
        <p className="w-full md:max-w-[70%] lg:max-w-[35%] xl:max-w-[35%] text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
      </div>
    </div>
  );
};

export default HomeImage;
