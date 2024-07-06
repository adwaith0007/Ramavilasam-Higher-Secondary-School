import React from 'react';
import imageUrl from '/about-image.jpg'; // Replace with your image URL

const AboutSubHead = () => {
  return (
    <div className="relative w-full lg:h-auto">
      <div className="relative flex flex-col lg:flex-row items-center justify-center h-full bg-gradient-to-r from-white to-blue-100">
        {/* Text Container */}
        <div className="w-full lg:w-1/2 px-4 py-8 lg:py-16 lg:text-black lg:relative order-2 lg:order-1">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Welcome To</h1>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Sree Gokulam Public School Vatakara</h2>
          <p className="text-base lg:text-lg mb-4">
            Education authenticates eminent thoughts and deeds. As it is both a physical and mental stratagem; formation of an ideal personality is one of the supreme goals of education. School is the right center to discharge physical and spiritual energy to the students for the fruitful attainment of these ideals. Gokulam educational and medical trust established Gokulam public school in 1996 at Kurikkiladu near Vatakara with the sole aim of generalizing a comprehensive education policy.
          </p>
          <p className="text-base lg:text-lg mb-4">
            It is a unique contribution to his hometown by the veteran business tycoon Gokulam Gopalan; Gokulam public school proudly upholds the name as the first ISO certified public school in North Malabar.
          </p>
          <p className="text-base lg:text-lg mb-4">
            The school started its journey with sixty students from LKG to VI std. Now we have two thousand students from play class to XII. The captivating, comely, and eco-friendly campus stretches over fifteen acres of land with all facilities; capable of competing with any international school in the country. The school maintains an unflinching track record in the secondary and senior secondary examinations. Our students stamp their signature in science and arts fest every year.
          </p>
          <p className="text-base lg:text-lg mb-4">
            We transmute the innate energy of our students to become ideal citizens; productive and beneficial to society.
          </p>
          <button className="mt-4 rounded-lg bg-customOrange text-white py-2 px-4 hover:bg-white hover:text-customOrange transition duration-300 ease-in-out">
            View More
          </button>
        </div>
        {/* Image Container */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8 lg:py-16 lg:order-2">
          <img
            src={imageUrl}
            alt="Sree Gokulam Public School Vatakara"
            className="rounded-lg shadow-lg object-cover w-full h-auto lg:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSubHead;
