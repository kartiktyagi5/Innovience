import React from 'react';
import { Save } from 'lucide-react';
import './AdminSettings.css';

const AdminSettings = () => {
  return (
    <div className="admin-settings">
      <header className="settings-header">
        <h1>Settings</h1>
      </header>

      <div className="settings-container">
        <section className="settings-section">
          <h2>General Settings</h2>
          <form className="settings-form">
            <div className="form-group">
              <label>Site Name</label>
              <input type="text" defaultValue="Admin Dashboard" />
            </div>

            <div className="form-group">
              <label>Site Description</label>
              <textarea defaultValue="Admin dashboard for managing users and content." />
            </div>

            <div className="form-group">
              <label>Time Zone</label>
              <select>
                <option>UTC (00:00)</option>
                <option>EST (-05:00)</option>
                <option>PST (-08:00)</option>
              </select>
            </div>
          </form>
        </section>

        <section className="settings-section">
          <h2>Email Settings</h2>
          <form className="settings-form">
            <div className="form-group">
              <label>SMTP Host</label>
              <input type="text" placeholder="smtp.example.com" />
            </div>

            <div className="form-group">
              <label>SMTP Port</label>
              <input type="number" placeholder="587" />
            </div>

            <div className="form-group">
              <label>Email From</label>
              <input type="email" placeholder="noreply@example.com" />
            </div>
          </form>
        </section>

        <div className="settings-actions">
          <button className="save-button">
            <Save className="button-icon" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;