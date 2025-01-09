import React from 'react';
import { LogOut, Trophy, Users, Award, Coffee, Sun, Laptop, Briefcase } from 'lucide-react';
import './Carrer.css';

const Carrer = () => {
  const benefits = [
    {
      icon: <Award className="benefit-icon-carrer" />, 
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: <Users className="benefit-icon-carrer" />, 
      title: 'Remote Work',
      description: 'Flexible work-from-anywhere policy'
    },
    {
      icon: <Trophy className="benefit-icon-carrer" />, 
      title: 'Learning Budget',
      description: 'Annual budget for courses and conferences'
    },
    {
      icon: <Coffee className="benefit-icon-carrer" />, 
      title: 'Work-Life Balance',
      description: 'Flexible hours and unlimited PTO'
    },
    {
      icon: <Sun className="benefit-icon-carrer" />, 
      title: 'Paid Time Off',
      description: 'Generous vacation and holiday policy'
    },
    {
      icon: <Laptop className="benefit-icon-carrer" />, 
      title: 'Equipment',
      description: 'Latest tech equipment of your choice'
    }
  ];

  const positions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Technical Content Writer',
      department: 'Content',
      location: 'Hybrid',
      type: 'Full-time'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <div className="career-page-carrer">
      {/* Hero Section */}
      <section className="hero-section-carrer">
        <div className="hero-content-carrer">
          <h1>Build Your Future With Us</h1>
          <p>Join our team of innovators and shape the future of technology education</p>
          <button className="primary-button-carrer">View Open Positions</button>
        </div>
      </section>

      {/* Career Path Section */}
      <section className="career-path-section-carrer">
        <h2>Your Growth Path</h2>
        <div className="career-path-grid-carrer">
          {[
            {
              icon: <Briefcase className="path-icon-carrer" />, 
              title: 'Entry Level',
              role: 'Associate Developer',
              description: 'Start your journey with hands-on development experience'
            },
            {
              icon: <Users className="path-icon-carrer" />, 
              title: 'Mid Level',
              role: 'Senior Developer',
              description: 'Lead projects and mentor junior developers'
            },
            {
              icon: <Trophy className="path-icon-carrer" />, 
              title: 'Expert Level',
              role: 'Technical Architect',
              description: 'Design system architecture and drive innovation'
            },
            {
              icon: <Award className="path-icon-carrer" />, 
              title: 'Leadership',
              role: 'Engineering Manager',
              description: 'Lead teams and shape technical strategy'
            }
          ].map((path, index) => (
            <div key={index} className="career-path-card-carrer">
              {path.icon}
              <h3>{path.title}</h3>
              <div className="role-carrer">{path.role}</div>
              <p>{path.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="positions-section-carrer">
        <h2>Open Positions</h2>
        <div className="positions-grid-carrer">
          {positions.map((position, index) => (
            <div key={index} className="position-card-carrer">
              <div className="position-header-carrer">
                <Briefcase className="position-icon-carrer" />
                <h3>{position.title}</h3>
              </div>
              <div className="position-details-carrer">
                <span>{position.department}</span>
                <span>{position.location}</span>
                <span>{position.type}</span>
              </div>
              <button className="apply-button-carrer">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-carrer">
        <h2>Benefits & Perks</h2>
        <div className="benefits-grid-carrer">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card-carrer">
              {benefit.icon}
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section-carrer">
        <div className="culture-content-carrer">
          <div className="culture-text-carrer">
            <h2>Our Culture</h2>
            <p>
              We believe in fostering an environment where creativity thrives and
              innovation is encouraged. Our culture is built on collaboration,
              continuous learning, and mutual respect.
            </p>
            <p>
              We celebrate diversity and believe that different perspectives lead
              to better solutions. Our team members come from various backgrounds
              and bring unique experiences to the table.
            </p>
          </div>
          <div className="culture-image-carrer">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              alt="Team Culture"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carrer;
