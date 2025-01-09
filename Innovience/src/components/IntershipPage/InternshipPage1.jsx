import React from 'react';
import { Award, Users, Rocket, Target, Star, Shield, Zap, Trophy, Code, Database, Layout, Terminal, GitBranch, Globe, Server, Cpu, Cloud, Book } from 'lucide-react';

import './InternshipPage1.css';

function InternshipPage1() {
  return (
    <div className="addintern-container">
      {/* Program Benefits Section */}
      <section className="addintern-section">
        <h1 className="addintern-section-title">Program Benefits</h1>
        <p className="addintern-section-subtitle">What you'll gain from our internship program</p>
        
        <div className="addintern-benefits-grid">
          <div className="addintern-card">
            <Award className="addintern-card-icon" />
            <h3 className="addintern-card-title">Industry Recognition</h3>
            <p className="addintern-card-description">Get certified and recognized by top companies</p>
          </div>
          
          <div className="addintern-card">
            <Users className="addintern-card-icon" />
            <h3 className="addintern-card-title">Expert Mentorship</h3>
            <p className="addintern-card-description">1-on-1 guidance from industry professionals</p>
          </div>
          
          <div className="addintern-card">
            <Rocket className="addintern-card-icon" />
            <h3 className="addintern-card-title">Career Growth</h3>
            <p className="addintern-card-description">Fast-track your career development</p>
          </div>
          
          <div className="addintern-card">
            <Target className="addintern-card-icon" />
            <h3 className="addintern-card-title">Practical Experience</h3>
            <p className="addintern-card-description">Work on real-world projects</p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Program Section */}
      <section className="addintern-section">
        <h1 className="addintern-section-title">Why Choose Our Program?</h1>
        <p className="addintern-section-subtitle">Stand out from the crowd with our unique advantages</p>
        
        <div className="addintern-advantages-grid">
          <div className="addintern-card">
            <Star className="addintern-card-icon" />
            <h3 className="addintern-card-title">Industry-Leading Curriculum</h3>
            <p className="addintern-card-description">Designed by experts to meet current industry demands</p>
          </div>
          
          <div className="addintern-card">
            <Shield className="addintern-card-icon" />
            <h3 className="addintern-card-title">Guaranteed Placement</h3>
            <p className="addintern-card-description">We ensure you land the right opportunity</p>
          </div>
          
          <div className="addintern-card">
            <Zap className="addintern-card-icon" />
            <h3 className="addintern-card-title">Fast-Track Learning</h3>
            <p className="addintern-card-description">Accelerated program to jumpstart your career</p>
          </div>
          
          <div className="addintern-card">
            <Trophy className="addintern-card-icon" />
            <h3 className="addintern-card-title">Proven Track Record</h3>
            <p className="addintern-card-description">95% success rate in career placement</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="addintern-section">
        <h1 className="addintern-section-title">Skills You'll Master</h1>
        <p className="addintern-section-subtitle">Comprehensive skill development for modern tech careers</p>
        
        <div className="addintern-skills-grid">
          <div className="addintern-card">
            <Code className="addintern-card-icon" />
            <h3 className="addintern-card-title">Frontend Development</h3>
          </div>
          
          <div className="addintern-card">
            <Database className="addintern-card-icon" />
            <h3 className="addintern-card-title">Backend Development</h3>
          </div>
          
          <div className="addintern-card">
            <Layout className="addintern-card-icon" />
            <h3 className="addintern-card-title">UI/UX Design</h3>
          </div>
          
          <div className="addintern-card">
            <Terminal className="addintern-card-icon" />
            <h3 className="addintern-card-title">DevOps</h3>
          </div>
          
          <div className="addintern-card">
            <GitBranch className="addintern-card-icon" />
            <h3 className="addintern-card-title">Version Control</h3>
          </div>
          
          <div className="addintern-card">
            <Shield className="addintern-card-icon" />
            <h3 className="addintern-card-title">Security</h3>
          </div>
          
          <div className="addintern-card">
            <Globe className="addintern-card-icon" />
            <h3 className="addintern-card-title">Web Services</h3>
          </div>
          
          <div className="addintern-card">
            <Server className="addintern-card-icon" />
            <h3 className="addintern-card-title">Server Management</h3>
          </div>
          
          <div className="addintern-card">
            <Cpu className="addintern-card-icon" />
            <h3 className="addintern-card-title">System Architecture</h3>
          </div>
          
          <div className="addintern-card">
            <Cloud className="addintern-card-icon" />
            <h3 className="addintern-card-title">Cloud Computing</h3>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="addintern-section">
        <h1 className="addintern-section-title">Your Journey With Us</h1>
        <p className="addintern-section-subtitle">A structured path to success</p>
        
        <div className="addintern-journey-grid">
          <div className="addintern-card addintern-journey-card">
            <div className="addintern-journey-icon">
              <Book />
            </div>
            <h3 className="addintern-card-title">Foundation</h3>
            <p className="addintern-journey-week">Week 1-2</p>
            <p className="addintern-card-description">Master the fundamentals and core concepts</p>
          </div>
          
          <div className="addintern-card addintern-journey-card">
            <div className="addintern-journey-icon">
              <Code />
            </div>
            <h3 className="addintern-card-title">Skill Building</h3>
            <p className="addintern-journey-week">Week 3-4</p>
            <p className="addintern-card-description">Hands-on practice with real-world projects</p>
          </div>
          
          <div className="addintern-card addintern-journey-card">
            <div className="addintern-journey-icon">
              <Users />
            </div>
            <h3 className="addintern-card-title">Team Projects</h3>
            <p className="addintern-journey-week">Week 5-6</p>
            <p className="addintern-card-description">Collaborate on industry-level applications</p>
          </div>
          
          <div className="addintern-card addintern-journey-card">
            <div className="addintern-journey-icon">
              <Trophy />
            </div>
            <h3 className="addintern-card-title">Career Launch</h3>
            <p className="addintern-journey-week">Week 7-8</p>
            <p className="addintern-card-description">Interview prep and job placement</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InternshipPage1;
