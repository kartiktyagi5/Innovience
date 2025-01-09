import React from 'react';
import { Users, GraduationCap, Trophy } from 'lucide-react';
import './StatsSection.css';  

const StatsSection = () => {
  return (
    <section className='stats-main' >
      <div className="stats-section">
      <div className="stats-container">
        <h2 className="stats-heading">Some Numbers That Matter</h2>
        
        <div className="stats-grid">
          <div className="stats-card experts">
            <Users className="stats-icon" />
            <div className="stats-number">50+</div>
            <div className="stats-description">Experts</div>
          </div>
          
          <div className="stats-card students">
            <GraduationCap className="stats-icon" />
            <div className="stats-number">7,390</div>
            <div className="stats-description">Students</div>
          </div>
          
          <div className="stats-card success">
            <Trophy className="stats-icon" />
            <div className="stats-number">98%</div>
            <div className="stats-description">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default StatsSection;
