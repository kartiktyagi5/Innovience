import React from 'react';
import { Plus, Calendar, Users, Trophy } from 'lucide-react';
import './AdminHackathons.css';

const AdminHackathons = () => {
  return (
    <div className="admin-hackathons">
      <header className="hackathons-header">
        <h1>Hackathon Management</h1>
        <button className="add-button">
          <Plus className="button-icon" />
          Add Hackathon
        </button>
      </header>

      <div className="hackathons-list">
        {[1, 2].map((hackathon) => (
          <div key={hackathon} className="hackathon-card">
            <div className="hackathon-info">
              <h3>AI Innovation Challenge</h3>
              <p className="hackathon-description">
                Build AI-powered solutions for real-world problems
              </p>
              <div className="hackathon-details">
                <div className="detail-item">
                  <Calendar className="detail-icon" />
                  <span>April 15-17, 2024</span>
                </div>
                <div className="detail-item">
                  <Users className="detail-icon" />
                  <span>150+ Participants</span>
                </div>
                <div className="detail-item">
                  <Trophy className="detail-icon" />
                  <span>$5000 Prize Pool</span>
                </div>
              </div>
            </div>
            <div className="hackathon-status">
              <span className="status-badge upcoming">Upcoming</span>
              <div className="action-buttons">
                <button className="action-btn edit">Edit</button>
                <button className="action-btn delete">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHackathons;