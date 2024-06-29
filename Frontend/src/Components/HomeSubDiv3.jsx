import React from 'react';
import imageUrl from '/about-img-2.png'; // Replace with your image URL

const HomeSubDiv3 = () => {
  return (
    <div className="relative w-full lg:h-[550px]">
      <div className="absolute inset-0 bg-gradient-to-r from-black opacity-50"></div>
      <div className="relative flex flex-col lg:flex-row items-center justify-center h-full">
        {/* Text Container */}
        <div className="w-full lg:w-1/2 px-4 lg:text-black lg:relative order-2 lg:order-1">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Welcome To</h1>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">RVHSS Thalasserry</h2>
          <p className="text-base lg:text-lg mb-4">
            We at RVHSS Thalasserry are very proud to introduce you to this tantalizing glimpse of the purposeful and varied life at our school. Our aim is to guide each individual towards a confident, resourceful, independent, and happy adulthood well qualified in every way. If you share that vision for your child, this is the school for you.
          </p>
          <p className="text-base lg:text-lg">
            <span className="font-bold">Our Mission:</span> We envision a global village where the students of RVHSS Thalasserry are the torchbearers of educational, physical, and cultural excellence.
          </p>
          <button className="mt-4 rounded-lg bg-customOrange text-white py-2 px-4 hover:bg-white hover:text-customOrange transition duration-300 ease-in-out">
            View More
          </button>
        </div>
        {/* Image Container */}
        <div className="w-full lg:w-1/2 px-4 lg:static lg:order-2">
          <img
            src={imageUrl}
            alt="RVHSS Thalasserry"
            className="rounded-lg shadow-lg object-cover w-full h-auto lg:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSubDiv3;
