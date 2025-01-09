import React from 'react';
import { Zap, Target, Trophy, Users, Lightbulb, Rocket, Star, UsersRound, Award, Code, BookOpen, DollarSign } from 'lucide-react';
import './About_us.css';
import Testonimal from '../Testonimal/Testonimal';
import FAQ from '../FAQ/FAQ';

const About_us = () => {
  return (
    <>
      <main className="hero-section">
        <div className="hero-content">
          <h1>
            Empowering Skills.<br /><span className="blue-text">Shaping Futures.</span>
          </h1>
          <p>
            Innovience empowers students through practical skill development, providing industry-level projects, live courses, hackathons, and opportunities to earn while they learn.
          </p>
          <button className="cta-button">Start Your Journey →</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Students collaborating"
          />
        </div>
      </main>

      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p className="section-description">
          Innovience is a pioneering ed-tech platform that transforms how students learn and prepare for their careers. We bridge the gap between theoretical knowledge and practical skills through immersive learning experiences.
        </p>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Our Purpose</h3>
            <p>To empower students with practical skills and real-world experience, making them industry-ready.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>What We Do</h3>
            <p>Provide hands-on learning through live courses, industry projects, and hackathons with earning opportunities.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>How We Do It</h3>
            <p>Combine expert mentorship, practical projects, and innovative learning methods for maximum impact.</p>
          </div>
        </div>
      </section>

      <div className="container">
        <header className="heading1">
          <h1>Why Innovience?</h1>
          <p>What sets us apart from traditional learning platforms</p>
        </header>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Zap /></div>
            <h3 className="feature-title">Live Interactive Learning</h3>
            <p className="feature-description">No recorded content - pure live sessions to prevent backlogs and ensure active engagement</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Target /></div>
            <h3 className="feature-title">Industry-Ready Skills</h3>
            <p className="feature-description">Work on real projects from companies, not theoretical assignments</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Trophy /></div>
            <h3 className="feature-title">Earn While Learning</h3>
            <p className="feature-description">Top performers get paid projects and internship opportunities</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Users /></div>
            <h3 className="feature-title">Dedicated Mentorship</h3>
            <p className="feature-description">1-on-1 guidance from industry experts throughout your journey</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Lightbulb /></div>
            <h3 className="feature-title">Live Hackathons</h3>
            <p className="feature-description">Regular competitions with prizes and recognition from top companies</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Rocket /></div>
            <h3 className="feature-title">Structured Growth</h3>
            <p className="feature-description">Milestone-based progress tracking to ensure consistent development</p>
          </div>
        </div>

        <section className="values-section">
          <h2 className="header">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Star /></div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">Striving for the highest standards in everything we do</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><UsersRound /></div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">Fostering teamwork and mutual growth</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><Lightbulb /></div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">Embracing new ideas and creative solutions</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><Award /></div>
              <h3 className="value-title">Achievement</h3>
              <p className="value-description">Celebrating and rewarding success</p>
            </div>
          </div>

          <div className="vision-mission-grid">
            <div className="vision-mission-card">
              <h3 className="vision-mission-title">
                <Target /> Our Vision
              </h3>
              <p className="vision-mission-description">
                To create a world where students excel through experiential learning,
                unlocking their full potential to lead and innovate.
              </p>
            </div>

            <div className="vision-mission-card">
              <h3 className="vision-mission-title">
                <Rocket /> Our Mission
              </h3>
              <p className="vision-mission-description">
                To bridge the gap between theoretical education and practical application
                through hands-on projects, mentorship, and real-world opportunities.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="offer-section-unique">
        <h2>What We Offer</h2>
        <div className="offer-grid-unique">
          <div className="offer-card-unique">
            <Code className="icon-unique" />
            <h3>Industry Projects</h3>
            <p>Hands-on experience with real-world projects and dedicated mentorship</p>
          </div>
          <div className="offer-card-unique">
            <BookOpen className="icon-unique" />
            <h3>Live Courses</h3>
            <p>Interactive sessions with industry experts, no recorded content to prevent backlogs</p>
          </div>
          <div className="offer-card-unique">
            <Award className="icon-unique" />
            <h3>Live Hackathons</h3>
            <p>Team-based competitions with prizes, internships, and recognition</p>
          </div>
          <div className="offer-card-unique">
            <DollarSign className="icon-unique" />
            <h3>Earn While Learning</h3>
            <p>Paid projects for top performers, connecting talent with opportunities</p>
          </div>
        </div>
      </section>

      <section className="stats-section-unique">
        <div className="stat-item-unique">
          <div className="number-unique" id="students">500+</div>
          <div className="label-unique">Students Trained</div>
        </div>
        <div className="stat-item-unique">
          <div className="number-unique" id="partners">20+</div>
          <div className="label-unique">Corporate Partners</div>
        </div>
        <div className="stat-item-unique">
          <div className="number-unique" id="success">95%</div>
          <div className="label-unique">Success Rate</div>
        </div>
        <div className="stat-item-unique">
          <div className="number-unique" id="projects">100+</div>
          <div className="label-unique">Live Projects</div>
        </div>
      </section>

      {/*<Testonimal />
      <FAQ />*/}

      <section className="cta-section-unique">
        <div className="cta-content-unique">
          <h2>Ready to Transform Your Future?</h2>
          <p>Join us in shaping the next generation of tech leaders</p>

          <div className="cta-grid-unique">
            <div className="cta-card-unique">
              <h3>Start Learning</h3>
              <p>Explore our courses and join upcoming hackathons to kickstart your journey</p>
              <a href="#" className="button button-primary-unique">Enroll Now →</a>
            </div>
            <div className="cta-card-unique">
              <h3>Partner With Us</h3>
              <p>Collaborate for project sponsorships and corporate training programs</p>
              <a href="#" className="button button-secondary-unique">Get in Touch →</a>
            </div>
          </div>

          <div className="social-links-unique">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_us;
