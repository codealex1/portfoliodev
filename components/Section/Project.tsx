import React from 'react';
import Link from 'next/link';

const Project = () => {
  return (
    <div className="bg-black text-white h-screen   p-8">
      <h1 className="text-6xl font-bold mb-6 mt-6 ml-12">Projects</h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-6 w-full h-full max-w-7xl ml-12 ">
        <Link href="/grentich" passHref>
        <div className=" w-[650px] h-[550px] rounded-lg flex items-center justify-center p-8  transition-transform duration-300 hover:scale-105 bg-gradient-to-b from-gray-500 to-black">
          <h2 className="text-lg font-bold ">Restaurant clone</h2>
        </div>
        </Link>
        <Link href="/arcadia" passHref>
        <div className="bg-gradient-to-b from-gray-600 to-black w-[1115px] h-[320px] rounded-lg flex items-center justify-center p-8 ml-88 transition-transform duration-300 hover:scale-105 cursor-pointer">
          <h2 className="text-lg font-bold text-white">Zoo Arcadia</h2>
        </div>
      </Link>

      <Link href="/ecoride">
        <div className="cursor-pointer bg-gradient-to-b from-gray-800 to-black w-[650px] h-[470px] rounded-lg flex items-center justify-center p-8 mt-88 ml-6 transition-transform duration-300 hover:scale-105">
          <h2 className="text-lg font-bold">Plateforme Ecoride</h2>
        </div>
      </Link>

        <Link href="/serbatel">
        <div className="bg-gradient-to-b from-gray-500 to-black w-[450px] h-[470px] rounded-lg flex items-center justify-center p-8 mt-88 ml-92  transition-transform duration-300 hover:scale-105">
          <h2 className="text-lg font-bold">Serbatel</h2>
        </div>
        </Link>
        {/* Case 5 - Petit rectangle horizontal */}
        <div className="bg-gradient-to-b from-gray-600 to-black w-[650px] h-[250px] rounded-lg flex items-center justify-center p-8 mt-32  transition-transform duration-300 hover:scale-105">
          <h2 className="text-lg font-bold">Portfolio Website</h2>
        </div>
      </div>
    </div>
  );
};

export default Project;
