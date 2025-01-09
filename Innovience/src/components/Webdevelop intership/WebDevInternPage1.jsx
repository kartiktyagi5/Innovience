import React from 'react';
import { Calendar, Users, Award, FileText } from 'lucide-react';
import './WebDevInternPage1.css';

function WebDevInternPage1() {
  return (
    <div className="app-web">
      <header className="header-web">
        <h1>This <span className="highlight-web">Programme</span> Offers...</h1>
      </header>

      <div className="features-grid-web">
        <div className="feature-card-web">
          <div className="feature-icon-web">
            <Calendar size={24} />
          </div>
          <div className="feature-content-web">
            <h3>37 Days of hands-on intensive training</h3>
            <p>with expert and like-minded peers</p>
          </div>
        </div>

        <div className="feature-card-web">
          <div className="feature-icon-web">
            <Users size={24} />
          </div>
          <div className="feature-content-web">
            <h3>Dedicated program manager</h3>
            <p>who will help you from Day 1 till you get an internship</p>
          </div>
        </div>

        <div className="feature-card-web">
          <div className="feature-icon-web">
            <Award size={24} />
          </div>
          <div className="feature-content-web">
            <h3>Training Certificate</h3>
            <p>corresponding to IIM Ahmedabad and IIM Bangalore</p>
          </div>
        </div>

        <div className="feature-card-web">
          <div className="feature-icon-web">
            <FileText size={24} />
          </div>
          <div className="feature-content-web">
            <h3>Resume Building</h3>
            <p>and Interview Preparation</p>
          </div>
        </div>
      </div>

      <div className="quote-section-web">
        "First comes the <span className="highlight-web">knowledge</span> then comes the <span className="highlight-web">opportunity</span> and finally comes <span className="highlight-web">success</span>"
      </div>

      <div className="cta-section-web">
        <h2>START YOUR JOURNEY TODAY</h2>
        <p>SECURE YOUR FUTURE WITH HANDS-ON EXPERIENCE</p>
        <button className="enroll-button-web">Enroll Now</button>
      </div>

      <div className="careers-section-web">
        <h2><span className="highlight-web">Career</span> Opportunities</h2>
        <div className="careers-grid-web">
          {[
            'SEO Specialist',
            'Email Marketer',
            'Content Creator',
            'Content Strategist',
            'Social Media Manager',
            'Digital Marketing Analyst',
            'Digital Marketing Manager',
            'Marketing Operations Manager'
          ].map((title) => (
            <div key={title} className="career-card-web">
              <div className="career-icon-web">
                <FileText size={24} />
              </div>
              <h3 className="career-title-web">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebDevInternPage1;
