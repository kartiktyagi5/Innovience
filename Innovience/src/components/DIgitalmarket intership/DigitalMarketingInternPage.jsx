import React from 'react';
import { Clock, BookOpen, User } from 'lucide-react';
import './DigitalMarketingInternPage.css';

const DigitalMarketingInternPage = () => {
  return (
    <div className="video-intro">
      <div className="container">
        <div className="video-intro-content">
          <div className="video-wrapper">
            <video 
              className="video"
              poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
              controls
            >
              <source src="#" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="video-text-content">
            <h2 className="video-heading">Launch Your Career with Industry Experience</h2>
            <p className="video-description">
              Get hands-on experience with real projects and secure guaranteed internships 
              with top companies. Transform your career in just 37 days.
            </p>
            
            <div className="video-benefits">
              <div className="benefit-item">
                <IconWrapper Icon={User} />
                <span>Expert-led training by industry professionals</span>
              </div>
              <div className="benefit-item">
                <IconWrapper Icon={BookOpen} />
                <span>Comprehensive curriculum with real projects</span>
              </div>
              <div className="benefit-item">
                <IconWrapper Icon={Clock} />
                <span>37 days intensive program</span>
              </div>
            </div>
            
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingInternPage;
