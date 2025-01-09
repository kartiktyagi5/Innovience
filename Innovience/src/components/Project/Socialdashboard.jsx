import React from 'react';
import { BarChart2, Database, Globe, Zap, LineChart, Share2 } from 'lucide-react';
import "./E-commerce.css"

const Socialdashboard = () => {
  return (
    <div className="dashboard-container-dash">
      <div className="dashboard-wrapper-dash">
        <h1 className="dashboard-title-dash">Social Media Dashboard</h1>
        
        <div className="dashboard-grid-dash">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Social Dashboard"
              className="dashboard-image-dash"
            />
          </div>
          
          <div className="dashboard-content-dash">
            <div>
              <h2 className="section-title-dash">Project Overview</h2>
              <p className="section-text-dash">
                Create a real-time analytics dashboard for social media metrics.
                Monitor engagement, track growth, and visualize data with interactive charts.
              </p>
            </div>
            
            <div>
              <h3 className="section-subtitle-dash">Tech Stack</h3>
              <div className="tech-stack-grid-dash">
                {[
                  { icon: Globe, text: 'Vue.js' },
                  { icon: Database, text: 'Firebase' },
                  { icon: BarChart2, text: 'D3.js' },
                  { icon: Zap, text: 'Real-time Updates' },
                  { icon: LineChart, text: 'Analytics' },
                  { icon: Share2, text: 'Social APIs' }
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
              <p className="section-text-dash">4 weeks</p>
            </div>
            
            <button className="start-button-dash">Start Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialdashboard;