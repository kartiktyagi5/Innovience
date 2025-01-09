import React, { useState } from 'react';
import { Trophy, Clock, Users, Rocket, Target, Award } from 'lucide-react';
import './Hackton.css';

const Hackton = () => {
  const upcomingHackathons = [
    {
      id: 1,
      title: "AI Innovation Challenge",
      date: "April 15-17, 2024",
      prize: "$5000",
      participants: "150+",
      description: "Build AI-powered solutions for real-world problems",
      registrationOpen: true
    },
    {
      id: 2,
      title: "FinTech Hackathon",
      date: "May 1-3, 2024",
      prize: "$3000",
      participants: "100+",
      description: "Create innovative financial technology solutions",
      registrationOpen: true
    }
  ];

  const benefits = [
    {
      icon: <Trophy className="benefit-icon-hackton" />,
      title: "Win Prizes",
      description: "Compete for cash prizes and recognition"
    },
    {
      icon: <Users className="benefit-icon-hackton" />,
      title: "Network",
      description: "Connect with industry professionals and peers"
    },
    {
      icon: <Rocket className="benefit-icon-hackton" />,
      title: "Learn & Grow",
      description: "Gain hands-on experience with new technologies"
    }
  ];

  const requirements = [
    "Must have completed the internship program",
    "Strong understanding of core technologies",
    "Ability to work in a team environment",
    "Problem-solving and creative thinking skills"
  ];

  const [registeredHackathons, setRegisteredHackathons] = useState(new Set());

  const handleRegistration = (hackathonId) => {
    setRegisteredHackathons(prev => {
      const newSet = new Set(prev);
      newSet.add(hackathonId);
      return newSet;
    });
  };

  return (
    <div className="hackathons-page-hackton">
      {/* Hero Section */}
      <section className="hero-section-hackton">
        <div className="hero-content-hackton">
          <h1>Hackathons</h1>
          <p>Put your skills to the test, collaborate with peers, and build innovative solutions in our intensive hackathon events.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-hackton">
        <h2>Why Participate?</h2>
        <div className="benefits-grid-hackton">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card-hackton">
              {benefit.icon}
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Hackathons */}
      <section className="upcoming-section-hackton">
        <h2>Upcoming Hackathons</h2>
        <div className="hackathons-grid-hackton">
          {upcomingHackathons.map((hackathon) => (
            <div key={hackathon.id} className="hackathon-card-hackton">
              <h3>{hackathon.title}</h3>
              <div className="hackathon-details-hackton">
                <div className="detail-item-hackton">
                  <Clock className="detail-icon-hackton" />
                  <span>{hackathon.date}</span>
                </div>
                <div className="detail-item-hackton">
                  <Trophy className="detail-icon-hackton" />
                  <span>Prize Pool: {hackathon.prize}</span>
                </div>
                <div className="detail-item-hackton">
                  <Users className="detail-icon-hackton" />
                  <span>{hackathon.participants} Expected Participants</span>
                </div>
              </div>
              <p className="hackathon-description-hackton">{hackathon.description}</p>
              <button 
                className={`register-button-hackton ${registeredHackathons.has(hackathon.id) ? 'registered-hackton' : ''}`}
                onClick={() => handleRegistration(hackathon.id)}
                disabled={registeredHackathons.has(hackathon.id)}
              >
                {registeredHackathons.has(hackathon.id) ? 'Registered' : 'Register Now'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section-hackton">
        <h2>Eligibility Requirements</h2>
        <div className="requirements-list-hackton">
          {requirements.map((requirement, index) => (
            <div key={index} className="requirement-item-hackton">
              <Target className="requirement-icon-hackton" />
              <span>{requirement}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hackton;
