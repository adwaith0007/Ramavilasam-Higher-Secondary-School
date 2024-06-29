import React from 'react';

const MoreDetails = () => {
  return (
    <div className="flex flex-wrap justify-center items-stretch">
      <div className="w-full md:w-1/2 lg:w-1/4">
        <div className=" bg-white transition duration-300 ease-in-out delay-200 hover:bg-customOrange hover:text-white text-black p-6 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 ">School Information</h2>
            <p className="text-sm">Mandatory Public Disclosures / Class Strength/ Transfer Certificate & Etra</p>
          </div>
          <button className="mt-4 border rounded-lg border-gray-300 text-gray-300 py-2 px-4 hover:bg-white hover:text-red-500">View More →</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4">
        <div className=" bg-white transition duration-300 ease-in-out delay-200 hover:bg-customOrange hover:text-white text-black p-6 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 ">Co — Scholastic Support</h2>
            <p className="text-sm">The Infrastructure Provided by our School can be Broadly Classified into Academic and non Academic.</p>
          </div>
         
          <button className="mt-4 border rounded-lg border-gray-300 text-gray-300 py-2 px-4 hover:bg-white hover:text-red-500">View More →</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4">
        <div className=" bg-white transition duration-300 ease-in-out delay-200 hover:bg-customOrange hover:text-white text-black p-6 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2  border-black">Admission</h2>
            <p className="text-sm">Looking for a place where your child can learn and grow at their own pace?</p>
          </div>
          <button className="mt-4 border rounded-lg border-gray-300 text-gray-300 py-2 px-4 hover:bg-white hover:text-red-500">View More →</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4">
        <div className=" bg-white transition duration-300 ease-in-out delay-200 hover:bg-customOrange hover:text-white text-black p-6 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2  border-black">Prospectus</h2>
            <p className="text-sm">Click to Sree Gokulam Public School Calicut PROSPECTUS Pdf File</p>
          </div>
          <button className="mt-4 border  rounded-lg border-gray-300 text-gray-300 py-2 px-4 hower:border-whit hover:bg-white hover:text-red-500">View More →</button>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
