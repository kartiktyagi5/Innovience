import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Home.css";
import home3dimg from "./homeImage3d.png";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="main-home">
      <div className="home-container">
        {/* Background Orbs */}
        <div className="home-background-orb home-orb-1"></div>
        <div className="home-background-orb home-orb-2"></div>
        <div className="home-background-orb home-orb-3"></div>

        {/* Main Content */}
        <div className="home-content">
          <h1 className="home-title">
            GET CERTIFIED.
            <br />
            <div className="get-ahead">GET AHEAD.</div>
          </h1>
          <div className="line"></div>
          <p className="home-subtitle">
            EXPLORE PROGRAMS
            <br />
            MASTER TOMORROW'S SKILLS TODAY!
            <br />
            MAKE YOUR DREAM CAREER A REALITY
          </p>
          <button 
            className="home-button" 
            onClick={() => navigate("/Login")} 
          >
            <span className="span-mother">
              <span>G</span>
              <span>e</span>
              <span>t</span>
              <span> </span>
              <span>S</span>
              <span>t</span>
              <span>a</span>
              <span>r</span>
              <span>t</span>
              <span>e</span>
              <span>d</span>
              <span> </span>
              <span>N</span>
              <span>o</span>
              <span>w</span>
              <span>→</span>
            </span>
            <span className="span-mother2">
              <span>G</span>
              <span>e</span>
              <span>t</span>
              <span> </span>
              <span>S</span>
              <span>t</span>
              <span>a</span>
              <span>r</span>
              <span>t</span>
              <span>e</span>
              <span>d</span>
              <span> </span>
              <span>N</span>
              <span>o</span>
              <span>w</span>
              <span>!</span>
            </span>
          </button>
        </div>
        <div className="home-image">
          <img 
            src={home3dimg} 
            alt="Group Learning" 
            className="rounded-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
