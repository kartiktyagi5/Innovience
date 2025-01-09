import React, { useState, useEffect } from "react";
import businesses from "./digital.jpg";
import hr from "./hrf.jpg";
import startup from "./startup1.png";
import "./Technologies.css";

import {
  Code,
  Terminal,
  Database,
  Brain,
  Globe,
  LineChart,
} from "lucide-react";

const technologies = [
  { 
    icon: Code, 
    name: "Java", 
    color: "from-orange-500 to-red-500" 
  },
  { 
    icon: Terminal, 
    name: "Full-Stack Development", 
    color: "from-blue-500 to-green-500" 
  },
  {
    icon: Database,
    name: "Data Science",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    name: "Machine Learning",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Globe,
    name: "Python",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: LineChart,
    name: "Artificial Intelligence",
    color: "from-red-500 to-pink-500",
  },
];

const TechnologyScroll = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Create a duplicate set of items to ensure smooth infinite scroll
    setItems([...technologies, ...technologies,...technologies,...technologies,...technologies,...technologies,...technologies,...technologies]);
  }, []);

  const renderTechItem = (tech, index) => (
    <div
      key={`${tech.name}-${index}`}
      className="tech-item"
      onMouseEnter={() => setHoveredTech(tech.name)}
      onMouseLeave={() => setHoveredTech(null)}
    >
      <div
        className="gradient-overlay"
        style={{
          "--color-start": tech.color.split(" ")[0].replace("from-", ""),
          "--color-end": tech.color.split(" ")[1].replace("to-", ""),
        }}
      />

      {hoveredTech === tech.name && (
        <div className="tech-name">{tech.name}</div>
      )}

      <tech.icon className="tech-icon" />
    </div>
  );

  return (
    <div className="technologies-container">
      <h1 className="tech-head">Technologies You Will Learn</h1>
      <div className="header">
       
      </div>

      <div className="scroll-container">
        <div
          className={`scroll-content ${isPaused ? "paused" : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {items.map((tech, index) => renderTechItem(tech, index))}
        </div>
      </div>

      <div className="tech-section">
        <div className="text-card">
          <img
            src={businesses}
            alt="Business Development"
            className="card-image"
          />
          <h3 className="card-heading">Business Development</h3>
          <p className="card-text">
            Management and development opportunities for business growth
          </p>
        </div>

        <div className="text-card">
          <img src={hr} alt="HR & Marketing" className="card-image" />
          <h3 className="card-heading">HR & Marketing</h3>
          <p className="card-text">
            Professional training in human resources and marketing strategies
          </p>
        </div>

        <div className="text-card">
          <img
            src={startup}
            alt="Startup Experience"
            className="card-image"
          />
          <h3 className="card-heading">Startup Experience</h3>
          <p className="card-text">
            Hands-on experience working with innovative startups
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyScroll;