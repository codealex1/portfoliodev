import React from 'react';
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
        <hr className="my-5 border-gray-600" />
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="w-1/6 mr-16">
          <h3 className="font-bold mb-2">About Me</h3>
          <p className="text-gray-400 text-sm">A passionate student developer focused on creating innovative solutions and meaningful user experiences.</p>
        </div>
        <div className="w-1/4">
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:underline text-gray-400 text-sm ">Home</a></li>
            <li><a href="#" className="hover:underline text-gray-400 text-sm">Projects</a></li>
            <li><a href="#" className="hover:underline text-gray-400 text-sm">Contact</a></li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="font-bold mb-2">Skills</h3>
          <ul>
            <li className='text-gray-400 text-sm mb-2'>Full Stack Development</li>
            
            <li className='text-gray-400 text-sm mb-2'>UI/UX Design</li>
            <li className='text-gray-400 text-sm'> Project Management</li>
          </ul>
        </div>
        <div className="w-1/4">
            <h3 className="font-bold mb-2">Connect</h3>
            <div className="flex space-x-4">
                <a href="#" className="hover:underline text-gray-400" aria-label="GitHub">
                    <FaGithub size={24} /> {/* Icône GitHub */}
                </a>
                <a href="#" className="hover:underline text-gray-400" aria-label="LinkedIn">
                    <FaLinkedin size={24} /> {/* Icône LinkedIn */}
                </a>
                <a href="#" className="hover:underline text-gray-400" aria-label="Gmail">
                    <FaGoogle size={24} /> {/* Icône Gmail */}
                </a>
            </div>
        </div>
      </div>
      
      <hr className="my-5 border-gray-600" />
      <div className="text-center mt-10">
        <p className='text-gray-400 text-sm'>© 2025 Alexandre Brunet. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;