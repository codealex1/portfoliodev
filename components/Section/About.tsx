import React from 'react';
import { FaCode, FaPuzzlePiece, FaStar } from 'react-icons/fa';
import One from '../../images/1.png'; // Ensure this is a valid image path


const About = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row p-10 h-screen">
      <div className="flex-1 flex flex-col justify-start ml-32 mt-24 ">
        <h1 className="text-5xl font-bold mb-4">About me</h1> 
        <p className="mb-8 text-gray-400">
          Passionate about crafting solutions through code. I thrive on solving complex problems and bringing ambitious web designs to life, specializing in modern web technologies and intuitive user experiences.
        </p>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg">
            <h2 className="text-xl  font-semibold">
              <FaCode className="inline mr-2 text-yellow-500" />
              Full Stack Development
            </h2>
            <p>
              Bridging front-end aesthetics with robust back-end solutions, creating seamless web experiences from concept to deployment.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">
              <FaPuzzlePiece className="inline mr-2 text-yellow-500" />
              Problem Solving
            </h2>
            <p>
              Approaching each challenge methodically, breaking down complex requirements into actionable solutions.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">
              <FaStar className="inline mr-2 text-yellow-500" />
              Technical Architecture
            </h2>
            <p>
              Designing scalable systems and intuitive interfaces that prioritize both performance and user experience.
            </p>
          </div>
        </div>
        <div className="mt-8 flex gap-4 text-yellow-500">
          <span className="bg-gray-900 px-3 py-1 rounded-full text-sm">NextJS</span>
          <span className="bg-gray-900 px-3 py-1 rounded-full text-sm">Tailwind</span>
          <span className="bg-gray-900 px-3 py-1 rounded-full text-sm">React Native</span>
          <span className="bg-gray-900 px-3 py-1 rounded-full text-sm">Modern JavaScript</span>
          <span className="bg-gray-900 px-3 py-1 rounded-full text-sm">PHP</span>
        </div>
        <p className="mt-4 text-gray-400">
           Every line of code I write is guided by the principles of clean architecture, performance optimization, and intuitive user experience.
        </p>
      </div>
      <div className="flex-1 flex ml-10 mt-24 items-start">
        <img 
          src={One.src} // Access the string URL from the StaticImageData object
          alt="Your Image"
          className="rounded-full w-1/3 object-cover"
        />
      </div>
    </div>
  );
};

export default About;