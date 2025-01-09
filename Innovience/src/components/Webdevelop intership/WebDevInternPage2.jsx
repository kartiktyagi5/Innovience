import React from 'react';
import { Code, Database, Layout, Terminal, GitBranch, Shield, Globe, Server, Cpu, Cloud, Building2 } from 'lucide-react';
import './WebDevInternPage2.css';

function WebDevInternPage2() {
  const skills = [
    { icon: <Code className="iconweb" />, name: 'Coding' },
    { icon: <Database className="iconweb" />, name: 'Database' },
    { icon: <Layout className="iconweb" />, name: 'UI/UX' },
    { icon: <Terminal className="iconweb" />, name: 'DevOps' },
    { icon: <GitBranch className="iconweb" />, name: 'Git' },
    { icon: <Shield className="iconweb" />, name: 'Security' },
    { icon: <Globe className="iconweb" />, name: 'Web Dev' },
    { icon: <Server className="iconweb" />, name: 'Backend' },
    { icon: <Cpu className="iconweb" />, name: 'Systems' },
    { icon: <Cloud className="iconweb" />, name: 'Cloud' }
  ];

  const companies = [
    'Google', 'Microsoft', 'Amazon', 'Meta',
    'Apple', 'Netflix', 'Tesla', 'Adobe'
  ];

  return (
    <div className="containerweb">
      <section className="sectionweb">
        <h1 className="headingweb">Skills You'll Master</h1>
        <div className="skills-gridweb">
          {skills.map((skill, index) => (
            <div key={index} className="cardweb">
              {skill.icon}
              <p className="card-textweb">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sectionweb">
        <h1 className="headingweb">See Where Our Students</h1>
        <h2 className="subheadingweb">are Interning</h2>
        <div className="companies-gridweb">
          {companies.map((company, index) => (
            <div key={index} className="cardweb">
              <Building2 className="company-iconweb" />
              <p className="card-textweb">{company}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default WebDevInternPage2;