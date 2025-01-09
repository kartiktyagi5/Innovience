import React from 'react';
import {Code,Users,Clock,Code2,Database,Globe,Shield,Cloud,BarChart2,Target,ExternalLink,Briefcase,Trophy} from 'lucide-react';
import './Project.css';
import './E-commerce.css';
import { useNavigate } from "react-router-dom"; 

const Project = () => {
  const navigate = useNavigate(); 
  const categories = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Big data processing and analytics projects'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'AWS and Azure based cloud solutions'
    },
    {
      icon: Globe,
      title: 'API Development',
      description: 'RESTful and GraphQL API implementations'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security auditing and penetration testing'
    }
  ];

  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Build a full-featured online store with payment integration',
      duration: '6 weeks',
      difficulty: 'Advanced',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
      route: '/project/ecommerce'
     
    },
    {
      title: 'Social Media Dashboard',
      description: 'Create a real-time analytics dashboard for social media metrics',
      duration: '4 weeks',
      difficulty: 'Intermediate',
      tech: ['Vue.js', 'Firebase', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      route: '/project/Socialdashboard' 
      
    },
    {
      title: 'TaskManagement System',
      description: 'Develop a Kanban-style project management application',
      duration: '5 weeks',
      difficulty: 'Intermediate',
      tech: ['React', 'TypeScript', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
      route: '/project/Taskmanager' 
    }
  ];

  const projectCards = [
    {
      icon: Briefcase,
      title: 'Industry Experience',
      description: 'Work on real projects that companies use'
    },
    {
      icon: Trophy,
      title: 'Portfolio Building',
      description: 'Create impressive projects for your resume'
    },
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Master in-demand technical skills'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Learn from experienced professionals'
    }
  ];

  return (
   
    <div className="projects-page project">
      <section>
      <div className="hero-section project-hero-section">
        <div className="hero-content project-hero-content">
          <h1>Project-Based Learning</h1>
          <p>Get hands-on experience with real-world projects guided by industry experts</p>
        </div>
      </div>
      </section>
      

      
     <div className="features-grid project-features-grid">
        <div className="feature-card project-feature-card fade-in">
          <Code className="icon project-icon" />
          <h3>Real Projects</h3>
          <p>Work on actual projects used by companies</p>
        </div>

        <div className="feature-card project-feature-card fade-in">
          <Users className="icon project-icon" />
          <h3>Expert Guidance</h3>
          <p>Learn from experienced industry mentors</p>
        </div>

        <div className="feature-card project-feature-card fade-in">
          <Clock className="icon project-icon" />
          <h3>Flexible Timeline</h3>
          <p>Learn at your own pace with structured guidance</p>
        </div>
      </div>
     

      <div className="categories-section project-categories-section">
        <h2>Project Categories</h2>
        <div className="categories-grid project-categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card project-category-card">
              <category.icon className="icon project-icon" />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <span className="durationp">{project.duration}</span>
                  <span className="difficultyp">{project.difficulty}</span>
                </div>
                <div className="tech-stackp">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tagp">
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                className="view-projectp" 
                onClick={() => navigate(project.route)}>
                View Project
               <ExternalLink className="external-link-iconp" />
               </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="projects-containerp">
        <h1 className="projects-titlep">Why Choose Our Projects</h1>
        <div className="cards-containerp">
          {projectCards.map((card, index) => (
            <div key={index} className="cardp">
              <div className="card-iconp">
                <card.icon className="iconp" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="timeline-section project-timeline-section">
        <h2>Project Timeline</h2>
        <div className="timeline-container project-timeline-container">
          {[
            {
              icon: Code,
              title: 'Project Introduction',
              description: 'Understanding requirements and planning',
              duration: 'Week 1'
            },
            {
              icon: BarChart2,
              title: 'Development Phase',
              description: 'Hands-on coding and implementation',
              duration: 'Week 2-4'
            },
            {
              icon: Users,
              title: 'Review & Feedback',
              description: 'Code review and mentor feedback',
              duration: 'Week 5'
            },
            {
              icon: Target,
              title: 'Project Completion',
              description: 'Final submission and certification',
              duration: 'Week 6'
            }
          ].map((item, index) => (
            <div key={index} className="timeline-item project-timeline-item">
              <div className="timeline-icon project-timeline-icon">
                <item.icon />
              </div>
              <div className="timeline-content project-timeline-content">
                <div className="timeline-header project-timeline-header">
                  <h3>{item.title}</h3>
                  <span className="duration project-duration">{item.duration}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
