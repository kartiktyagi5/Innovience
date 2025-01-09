import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Users, FileText, Settings } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/admin" className="nav-item active">
            <Layout className="nav-icon" />
            <span>Dashboard</span>
          </Link>
          <Link to="/admin/users" className="nav-item">
            <Users className="nav-icon" />
            <span>Users</span>
          </Link>
          <Link to="/admin/contact" className="nav-item">
            <FileText className="nav-icon" />
            <span>Contact</span>
          </Link>
          <Link to="/admin/faq" className="nav-item">
            <FileText className="faq-icon" />
            <span>FAQ</span>
          </Link>
          <Link to="/admin/hackathons" className="nav-item">
            <FileText className="nav-icon" />
            <span>Hackathons</span>
          </Link>
          <Link to="/admin/projects" className="nav-item">
            <FileText className="nav-icon" />
            <span>Projects</span>
          </Link>
          <Link to="/admin/settings" className="nav-item">
            <Settings className="nav-icon" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h1>Dashboard Overview</h1>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-value">0</p>
          </div>
          <div className="stat-card">
            <h3>Active Projects</h3>
            <p className="stat-value">0</p>
          </div>
          <div className="stat-card">
            <h3>Completed Tasks</h3>
            <p className="stat-value">0</p>
          </div>
          <div className="stat-card">
            <h3>Revenue</h3>
            <p className="stat-value">0</p>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-time">2 hours ago</span>
              <p>New user registration</p>
            </div>
            <div className="activity-item">
              <span className="activity-time">4 hours ago</span>
              <p>Project update: Website redesign</p>
            </div>
            <div className="activity-item">
              <span className="activity-time">6 hours ago</span>
              <p>New comment on Blog post</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
