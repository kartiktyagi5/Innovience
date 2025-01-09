import React from 'react';
import { Calendar, Users, Award, Briefcase, BookOpen, GraduationCap, Share2 } from 'lucide-react';
import './WebDevInternPage.css';
import WebDevInternPage1 from './WebDevInternPage1'
import WebDevInternPage2 from './WebDevInternPage2'

const WebDevInternPage = ()=> {
  return (
    <div className="web-container">
      <section className="web-hero">
        <div className="web-hero-content">
          <h1>Launch Your Career with Industry Experience</h1>
          <p>Get hands-on experience with real projects and secure guaranteed internships with top companies. Transform your career in just 37 days.</p>
          
          <ul className="web-features-list">
            <li className="web-feature-item">
              <div className="web-feature-icon">
                <Users size={15} color="white" />
              </div>
              <span>Expert-led training by industry professionals</span>
            </li>
            <li className="web-feature-item">
              <div className="web-feature-icon">
                <BookOpen size={15} color="white" />
              </div>
              <span>Comprehensive curriculum with real projects</span>
            </li>
            <li className="web-feature-item">
              <div className="web-feature-icon">
                <Calendar size={15} color="white" />
              </div>
              <span>37 days intensive program</span>
            </li>
          </ul>

          <a href="#apply" className="web-apply-button">Apply Now</a>
        </div>
        
        <div className="web-hero-video">
          <video width="100%" controls poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3">
            <source src="your-video-source.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="web-highlights">
        <div className="web-highlight-card">
          <div className="web-highlight-icon">
            <Calendar size={32} />
          </div>
          <h3 className="web-highlight-title">37 Days Program</h3>
          <p className="web-highlight-description">Intensive hands-on training with experts</p>
        </div>

        <div className="web-highlight-card">
          <div className="web-highlight-icon">
            <Users size={32} />
          </div>
          <h3 className="web-highlight-title">Dedicated Mentor</h3>
          <p className="web-highlight-description">Personal guidance throughout your journey</p>
        </div>

        <div className="web-highlight-card">
          <div className="web-highlight-icon">
            <Award size={32} />
          </div>
          <h3 className="web-highlight-title">Dual Certification</h3>
          <p className="web-highlight-description">From institute and partner companies</p>
        </div>

        <div className="web-highlight-card">
          <div className="web-highlight-icon">
            <Briefcase size={32} />
          </div>
          <h3 className="web-highlight-title">Guaranteed Internship</h3>
          <p className="web-highlight-description">With top startups in India</p>
        </div>
      </section>

      <section className="web-journey">
        <h2>Your Learning Journey</h2>
        
        <div className="web-journey-steps">
          <div className="web-journey-step">
            <div className="web-step-icon">
              <BookOpen size={20} color="white" />
            </div>
            <div className="web-step-content">
              <h3 className="web-step-title">Enrollment</h3>
              <p className="web-step-description">Begin your journey with a structured learning path</p>
            </div>
          </div>

          <div className="web-journey-step">
            <div className="web-step-icon">
              <GraduationCap size={20} color="white" />
            </div>
            <div className="web-step-content">
              <h3 className="web-step-title">Learning</h3>
              <p className="web-step-description">Master concepts through interactive lessons</p>
            </div>
          </div>

          <div className="web-journey-step">
            <div className="web-step-icon">
              <Award size={20} color="white" />
            </div>
            <div className="web-step-content">
              <h3 className="web-step-title">Practice</h3>
              <p className="web-step-description">Apply knowledge through real projects</p>
            </div>
          </div>

          <div className="web-journey-step">
            <div className="web-step-icon">
              <Share2 size={20} color="white" />
            </div>
            <div className="web-step-content">
              <h3 className="web-step-title">Completion</h3>
              <p className="web-step-description">Graduate and share your achievements</p>
            </div>
          </div>
        </div>
      </section>
      <WebDevInternPage1/>
      <WebDevInternPage2/>
    </div>
    
  );
}

export default WebDevInternPage;
