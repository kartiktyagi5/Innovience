import React from 'react';
import { Code2, Database, CreditCard, Users, Server, Shield } from 'lucide-react';
import "./E-commerce.css"

const Ecommerce = () => {
  return (
    <div className="ecommerce-container-dash">
      <div className="ecommerce-wrapper-dash">
        <h1 className="ecommerce-title-dash">E-Commerce Platform</h1>
        
        <div className="ecommerce-grid-dash">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80"
              alt="E-commerce Platform"
              className="ecommerce-image-dash"
            />
          </div>
          
          <div className="ecommerce-content-dash">
            <div>
              <h2 className="section-title-dash">Project Overview</h2>
              <p className="section-text-dash">
                Build a full-featured online store with modern technologies and best practices.
                This project includes user authentication, product management, shopping cart,
                and secure payment processing.
              </p>
            </div>
            
            <div>
              <h3 className="section-subtitle-dash">Tech Stack</h3>
              <div className="tech-stack-grid-dash">
                {[
                  { icon: Code2, text: 'React & TypeScript' },
                  { icon: Database, text: 'MongoDB' },
                  { icon: Server, text: 'Node.js' },
                  { icon: CreditCard, text: 'Stripe Integration' },
                  { icon: Users, text: 'Auth System' },
                  { icon: Shield, text: 'Security Features' }
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
              <p className="section-text-dash">6 weeks</p>
            </div>
            
            <button className="start-button-dash">Start Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
