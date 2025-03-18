"use client";
import React , {useState} from "react";
import  ConvexLogo  from '../..images/logo/convex.svg';  // Assurez-vous que le chemin est correct
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiSymfony,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import {
  FaNetworkWired,
  FaBrain,
  FaUsers,
  FaClock,
  FaProjectDiagram,
  FaCloud,
} from "react-icons/fa";

// Mapping des titres aux icônes correspondantes et à leurs couleurs spécifiques
const iconMapping: { [key: string]: { icon: React.ElementType, color: string } } = {
  "Next.js": { icon: SiNextdotjs, color: "text-blue-500" },
  "React.js": { icon: SiReact, color: "text-cyan-500" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-400" },
  "Symfony 7": { icon: SiSymfony, color: "text-white" },
  Convex: { icon: FaCloud, color: "text-purple-600" },
  MySql: { icon: SiMysql, color: "text-blue-600" },
  MongoDB: { icon: SiMongodb, color: "text-green-500" },
  Docker: { icon: SiDocker, color: "text-indigo-500" },
  GitHub: { icon: SiGithub, color: "text-gray-700" },
  "REST APIs": { icon: FaNetworkWired, color: "text-green-600" },
  Figma: { icon: SiFigma, color: "text-pink-500" },
  "Problem Solving": { icon: FaBrain, color: "text-yellow-500" },
  "Team Collaboration": { icon: FaUsers, color: "text-blue-400" },
  "Time Management": { icon: FaClock, color: "text-orange-500" },
  "System Design": { icon: FaProjectDiagram, color: "text-gray-500" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-teal-400" }, 
};

const Skills = () => {
  return (
    <div className="bg-black text-white min-h-screen p-12">
      <h1 className="text-5xl font-bold mb-4 mt-32">Tools & Skills</h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl">
      My journey as a self-taught student has fostered my independence, discipline, and efficiency. Learning on my own has not only helped me develop technical expertise but also enhanced my ability to tackle challenges with self-reliance and dedication.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Core Technologies */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Core Technologies</h2>
          <p className="text-gray-400 text-sm mb-4">
            Primary technologies I use for building modern web applications
          </p>
          <div className="grid grid-cols-2 gap-4">
            <SkillCard title="Next.js" />
            <SkillCard title="React.js" />
            <SkillCard title="TypeScript" />
            <SkillCard title="Tailwind CSS" />
          </div>
        </div>

        {/* Backend & Cloud */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Backend & Cloud</h2>
          <p className="text-gray-400 text-sm mb-4">
            Technologies for server-side development and cloud services
          </p>
          <div className="grid grid-cols-2 gap-4">
          <SkillCard title="Symfony 7" />
            <SkillCard title="Convex" />
            <SkillCard title="MySql" />
            <SkillCard title="MongoDB" />
            
          </div>
        </div>

        {/* Development Tools */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Development Tools</h2>
          <p className="text-gray-400 text-sm mb-4">
            Essential tools for development workflow and deployment
          </p>
          <div className="grid grid-cols-2 gap-4">
            <SkillCard title="Docker" />
            <SkillCard title="GitHub" />
            <SkillCard title="REST APIs" />
            <SkillCard title="Figma" />
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Professional Skills</h2>
          <p className="text-gray-400 text-sm mb-4">
            Soft skills and professional competencies that enhance technical work
          </p>
          <div className="grid grid-cols-2 gap-4">
            <SkillCard
              title="Problem Solving"
              description="Breaking down complex challenges into manageable solutions"
            />
            <SkillCard
              title="Team Collaboration"
              description="Effective communication and teamwork in development projects"
            />
            <SkillCard
              title="Time Management"
              description="Efficient project planning and deadline management using noCode solution"
            />
            <SkillCard
              title="System Design"
              description="Architecting scalable and maintainable solutions"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, description }: { title: string; description?: string }) => {
  const { icon: IconComponent, color } = iconMapping[title];
  
  // Gestion du suivi du curseur et de l'affichage du point lumineux
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Fonction pour suivre le curseur
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true); // Lorsque le survol commence
  const handleMouseLeave = () => setIsHovered(false); // Lorsque le survol se termine

  return (
    <div
      className="relative bg-gray-950 p-4 rounded-lg flex items-center shadow-md hover:bg-gray-800 transition duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter} // Détecte l'entrée de la souris
      onMouseLeave={handleMouseLeave} // Détecte la sortie de la souris
    >
      {IconComponent && <IconComponent size={40} className={`mr-4 ${color}`} />}
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
      </div>

      {/* Affichage conditionnel du point lumineux */}
      {isHovered && (
        <div
        className="absolute w-16 h-16 rounded-full border-4 border-transparent"
        style={{
          left: `${cursorPosition.x - 25}px`, // Déplace le point en fonction du curseur
          top: `${cursorPosition.y - 22}px`,
          background: "radial-gradient(circle, rgb(141, 99, 22 , 1), rgb(250, 248, 248 , 0))", // Dégradé de orange à transparent
          }}
        />
      )}
    </div>
  );
};


export default Skills;
