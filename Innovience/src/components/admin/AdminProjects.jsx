import React from 'react';
import { Plus, Edit, Trash } from 'lucide-react';
import './AdminProjects.css';

const AdminProjects = () => {
  return (
    <div className="admin-projects">
      <header className="projects-header">
        <h1>Project Management</h1>
        <button className="add-button">
          <Plus className="button-icon" />
          Add Project
        </button>
      </header>

      <div className="projects-grid">
        {[1, 2, 3].map((project) => (
          <div key={project} className="project-card">
            <div className="project-header">
              <h3>E-Commerce Platform</h3>
              <div className="project-actions">
                <button className="action-btn edit">
                  <Edit className="action-icon" />
                </button>
                <button className="action-btn delete">
                  <Trash className="action-icon" />
                </button>
              </div>
            </div>
            <p className="project-description">
              Full-featured online store with payment integration
            </p>
            <div className="project-meta">
              <span className="meta-item">Duration: 6 weeks</span>
              <span className="meta-item">Level: Advanced</span>
            </div>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjects;