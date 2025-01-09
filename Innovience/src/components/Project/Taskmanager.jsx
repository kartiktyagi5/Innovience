import React from 'react';
import { Layout, Database, Code2, Shield, Users, GitBranch } from 'lucide-react';
import "./E-commerce.css";

const Taskmanager = () => {
  return (
    <div className="task-manager-container-dash">
      <div className="task-manager-wrapper-dash">
        <h1 className="task-manager-title-dash">Task Management System</h1>
        
        <div className="task-manager-grid-dash">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80"
              alt="Task Manager"
              className="task-manager-image-dash"
            />
          </div>
          
          <div className="task-manager-content-dash">
            <div>
              <h2 className="section-title-dash">Project Overview</h2>
              <p className="section-text-dash">
                Develop a Kanban-style project management application with real-time
                updates, team collaboration features, and advanced task tracking.
              </p>
            </div>
            
            <div>
              <h3 className="section-subtitle-dash">Tech Stack</h3>
              <div className="tech-stack-grid-dash">
                {[
                  { icon: Code2, text: 'React' },
                  { icon: Database, text: 'PostgreSQL' },
                  { icon: Layout, text: 'TypeScript' },
                  { icon: Users, text: 'Team Features' },
                  { icon: Shield, text: 'Auth System' },
                  { icon: GitBranch, text: 'Version Control' }
                ].map((item, index) => (
                  <div key={index} className="tech-stack-item-dash">
                    <item.icon className="tech-stack-icon-dash" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="section-subtitle-dash">Duration</h3>
              <p className="section-text-dash">5 weeks</p>
            </div>
            
            <button className="start-button-dash">Start Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskmanager;
