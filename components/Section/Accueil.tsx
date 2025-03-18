"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const roles = ["Fullstack Developer Junior", "Mobile App Developer", "Website Creator"];

const Accueil = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [fadeOut, setFadeOut] = useState(false); // Etat pour gérer la transition de texte

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // Déclenche la sortie du texte actuel
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setFadeOut(false); // Le nouveau texte arrive
      }, 500); // Attente pour que l'animation de disparition soit terminée
    }, 3000); // Change chaque 4 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white flex h-screen">
      {/* Partie gauche : Texte centré */}
      <div className="w-1/2 flex flex-col items-start justify-center text-left px-10">
        <h1 className="text-6xl font-bold">Alexandre Brunet</h1>
        <h2 className="text-2xl font-semibold mt-12">
          <span className="text-gray-400">I am a </span>
          <span
          className={`transition-all duration-500 ${
            fadeOut ? "text-eject" : "text-appear"
          } text-yellow-500`}
        >
          {roles[currentRole]}
        </span>
        </h2>
        <p className="mt-4 text-xl leading-relaxed max-w text-gray-400">
          Creating refined and efficient web experiences that combine{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          creativity 
          </span>{" "}
          with advanced technology.
        </p>

        {/* Bouton + Logos */}
        <div className="flex items-center gap-6 mt-6">
          <button className="bg-yellow-600 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition">
            Download Resume
          </button>
          <div className="flex space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-yellow-500 transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-yellow-500 transition" />
            </a>
            <a href="mailto:email@example.com">
              <FaEnvelope className="text-2xl hover:text-yellow-500 transition" />
            </a>
          </div>
        </div>

        {/* Ligne de texte avec effet de déplacement */}
        <div className="flex items-center mt-6">
          <div className="w-1 h-6 bg-yellow-500 mr-4"></div>
          <p className="text-sm text-gray-500 relative overflow-hidden whitespace-nowrap">
            <span className="animate-text-fade">
              Turning lines of code into digital contents that inspire and innovate.
            </span>
          </p>
        </div>

      </div>

      {/* Partie droite : Ton élément Spine */}
      <div className="w-1/2 flex items-center justify-center">
        {/* Ici, tu insères ton élément Spine */}
      </div>
    </div>
  );
};

export default Accueil;
