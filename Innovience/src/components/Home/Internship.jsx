import React from "react";
import { Link } from "react-router-dom";
import "./Internship.css";

const Internship = () => {
  const internships = [
    {
      id: 1,
      title: "Digital Marketing",
      duration: "30hr 30mins",
      rating: "⭐⭐⭐⭐☆ (678)",
      link: "/WebDevInternPage",
    },
    {
      id: 2,
      title: "Web Development",
      duration: "40hr",
      rating: "⭐⭐⭐⭐☆ (450)",
      link: "/WebDevInternPage",
    },
    {
      id: 3,
      title: "Graphic Design",
      duration: "32hr 30mins",
      rating: "⭐⭐⭐⭐☆ (678)",
      link: "/WebDevInternPage",
    },
    {
      id: 4,
      title: "Machine Learning",
      duration: "62hr 30mins",
      rating: "⭐⭐⭐⭐☆ (978)",
      link: "/WebDevInternPage",
    },
    {
      id: 5,
      title: "App Development",
      duration: "50hr 30mins",
      rating: "⭐⭐⭐⭐☆ (1678)",
      link: "/WebDevInternPage",
    },
  ];

  return (
    <div className="internship-container">
      <div className="intern-div">
        {/* Heading Section */}
        <h2 className="internship-heading">
          For Pro Skills & <br />
          <span className="gradient-text">Paid Internship</span>
        </h2>

        <div className="internship-content">
          {/* Internship Cards */}
          <div className="internship-cards">
            {internships.map((internship) => (
              <Link
                key={internship.id}
                to={internship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="internship-link"
              >
                <div className="card pro">
                  <span className="internship-tag">Pro</span>
                  <h3>{internship.title}</h3>
                  <p>Duration: {internship.duration}</p>
                  <div className="stars">{internship.rating}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Side Details */}
          <div className="internship-details">
            <ul>
              <li>
                <span>📅</span>
                <div className="details-content">
                  <strong>30 - 45 Days of Training</strong>
                  <p>with Top Mentors</p>
                </div>
              </li>
              <li>
                <span>📜</span>
                <div className="details-content">
                  <strong>Guaranteed Paid Internship</strong>
                  <p>Opportunities</p>
                </div>
              </li>
              <li>
                <span>🤝</span>
                <div className="details-content">
                  <strong>Professional Mentors</strong>
                  <p>for Assistance</p>
                </div>
              </li>
              <li>
                <span>🏆</span>
                <div className="details-content">
                  <strong>Certification Included</strong>
                  <p>Get an industry-recognized certificate</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
