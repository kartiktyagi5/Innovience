import React from "react";
import {
  Code,
  Users,
  BookOpen,
  Rocket,
  Video,
  Route,
  GraduationCap,
} from "lucide-react";
import "./Featuresection.css";

const features = [
  {
    icon: Code,
    title: "Live Online Hackathons",
    description: "Participate in exciting coding challenges",
  },
  {
    icon: Users,
    title: "Training Programs",
    description: "Structured learning paths for various technologies",
  },
  {
    icon: BookOpen,
    title: "Mentoring Programs",
    description: "Get guidance from industry experts",
  },
  {
    icon: Rocket,
    title: "Project Internships",
    description: "Hands-on experience with real projects",
  },
  {
    icon: Video,
    title: "Live Classes",
    description: "Interactive sessions with expert instructors",
  },
  {
    icon: Route,
    title: "Personalized Roadmaps",
    description: "Customized learning paths for your goals",
  },
];

const Featuresection = () => {
  return (
    <section className="features-container">
      <div className="features-header">
        <h2>Things You Can Do on Intience</h2>
        <p className="features-subtitle">
          Discover a world of opportunities to learn, grow, and succeed
        </p>
      </div>
      
      <div className="features-flow">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={feature.title} 
              className={`feature-item feature-item-${index}`}
            >
              <div className="feature-content">
                <div className="icon-wrapper">
                  <Icon className="feature-icon" />
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="features-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Featuresection;
