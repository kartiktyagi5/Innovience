import React from 'react';
import { Clock, Users, Award, Code, Database, Brain, Coffee, Layers, Calendar } from 'lucide-react';
import './InternshipPage.css';
import InternshipPage1 from './InternshipPage1';

function InternshipPage() {
  return (
    <div>
      <section className="hero-inter">
        <div className="hero-content-inter">
          <h1>Launch Your Career with Real Experience</h1>
          <p>Join our industry-leading internship program and gain hands-on experience working on real projects with expert mentorship.</p>
          
          <div className="features-inter">
            <div className="feature-inter">
              <Clock />
              <span>3-6 Months</span>
            </div>
            <div className="feature-inter">
              <Users />
              <span>1:1 Mentorship</span>
            </div>
            <div className="feature-inter">
              <Award />
              <span>Certificate</span>
            </div>
          </div>

          <a href="#apply" className="button-inter">Apply Now →</a>
        </div>
        
        <div className="hero-image-inter">
          <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80" 
               alt="Students collaborating" />
        </div>
      </section>

      <section className="domains-inter">
        <div className="domains-header-inter">
          <h2>Available Internship Domains</h2>
          <p>Choose your path and start your journey in tech</p>
        </div>

        <div className="domains-grid-inter">
          <div className="domain-card-inter">
            <div className="domain-icon-inter">
              <Code />
            </div>
            <h3>Web Development</h3>
            <p>Learn modern web development with React, Node.js, and related.</p>
            <div className="domain-info-inter">
              <Clock /> <span>Duration: 3 months</span>
            </div>
            <div className="domain-info-inter">
              <Layers /> <span>Level: Beginner to Intermediate</span>
            </div>
            <div className="domain-info-inter">
              <Calendar /> <span>Starts: April 1, 2024</span>
            </div>
            <a href="#apply" className="button-wide-inter">Apply Now</a>
          </div>

          <div className="domain-card-inter">
            <div className="domain-icon-inter">
              <Database />
            </div>
            <h3>Data Science</h3>
            <p>Master data analysis, visualization, and statistical modeling.</p>
            <div className="domain-info-inter">
              <Clock /> <span>Duration: 4 months</span>
            </div>
            <div className="domain-info-inter">
              <Layers /> <span>Level: Intermediate</span>
            </div>
            <div className="domain-info-inter">
              <Calendar /> <span>Starts: April 15, 2024</span>
            </div>
            <a href="#apply" className="button-wide-inter">Apply Now</a>
          </div>

          <div className="domain-card-inter">
            <div className="domain-icon-inter">
              <Brain />
            </div>
            <h3>Machine Learning</h3>
            <p>Deep dive into ML algorithms, neural networks, and AI applications.</p>
            <div className="domain-info-inter">
              <Clock /> <span>Duration: 6 months</span>
            </div>
            <div className="domain-info-inter">
              <Layers /> <span>Level: Advanced</span>
            </div>
            <div className="domain-info-inter">
              <Calendar /> <span>Starts: May 1, 2024</span>
            </div>
            <a href="#apply" className="button-wide-inter">Apply Now</a>
          </div>

          <div className="domain-card-inter">
            <div className="domain-icon-inter">
              <Code />
            </div>
            <h3>Python Development</h3>
            <p>Build applications and automation tools using Python.</p>
            <div className="domain-info-inter">
              <Clock /> <span>Duration: 3 months</span>
            </div>
            <div className="domain-info-inter">
              <Layers /> <span>Level: Beginner to Intermediate</span>
            </div>
            <div className="domain-info-inter">
              <Calendar /> <span>Starts: April 1, 2024</span>
            </div>
            <a href="#apply" className="button-wide-inter">Apply Now</a>
          </div>

          <div className="domain-card-inter">
            <div className="domain-icon-inter">
              <Coffee />
            </div>
            <h3>Java Development</h3>
            <p>Enterprise Java development with Spring Boot and microservices.</p>
            <div className="domain-info-inter">
              <Clock /> <span>Duration: 4 months</span>
            </div>
            <div className="domain-info-inter">
              <Layers /> <span>Level: Intermediate</span>
            </div>
            <div className="domain-info-inter">
              <Calendar /> <span>Starts: April 15, 2024</span>
            </div>
            <a href="#apply" className="button-wide-inter">Apply Now</a>
          </div>

          <div className="domain-card-inter">
            <div className="domain-icon-inter">
              <Layers />
            </div>
            <h3>Full Stack Development</h3>
            <p>Complete web development from frontend to backend and deployment.</p>
            <div className="domain-info-inter">
              <Clock /> <span>Duration: 6 months</span>
            </div>
            <div className="domain-info-inter">
              <Layers /> <span>Level: Intermediate to Advanced</span>
            </div>
            <div className="domain-info-inter">
              <Calendar /> <span>Starts: May 1, 2024</span>
            </div>
            <a href="#apply" className="button-wide-inter">Apply Now</a>
          </div>
        </div>

        <InternshipPage1 />
      </section>
    </div>
  );
}

export default InternshipPage;
