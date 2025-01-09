import React from "react";
import "./InternshipPage.css";
import Thumbnail from "../assets/images/thumbnail.jpg";



const WebDevInternPage = () => { 
 
  return (
    <div className="internship-page">
      <h1>Web Development Internship</h1>
      <p>Get hands-on experience with real-world projects.</p>
      <p>Duration: 6 Months</p>
      <p>
        Learn to build responsive websites and web applications. Get a chance to
        work on live projects and build a strong portfolio.
      </p>
      <img src={Thumbnail} alt="Internship" />
    </div>
  );
};

export default WebDevInternPage;
