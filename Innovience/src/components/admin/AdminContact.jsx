import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './AdminContact.css';

const AdminContact = () => {
  return (
    <div className="admin-contact">
      <header className="contact-header">
        <h1>Contact Management</h1>
      </header>

      <div className="contact-grid">
        <div className="contact-card">
          <h2>Messages</h2>
          <div className="message-list">
            {[1, 2, 3].map((message) => (
              <div key={message} className="message-item">
                <div className="message-header">
                  <h3>Rohit</h3>
                  <span className="message-time">2 hours ago</span>
                </div>
                <p className="message-preview">
                  I would like to inquire about the internship program...
                </p>
                <div className="message-footer">
                  <span className="message-email">rohit@example.com</span>
                  <button className="view-button">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-card">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="info-item">
              <Mail className="info-icon" />
              <div className="info-content">
                <label>Email Address</label>
                <input type="email" value="Innovienceintillengence@gmail.com" />
              </div>
            </div>
            <div className="info-item">
              <Phone className="info-icon" />
              <div className="info-content">
                <label>Phone Number</label>
                <input type="tel" value="+91 8744915108" />
              </div>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <div className="info-content">
                <label>Address</label>
                <textarea>Kl UNIVERSITY, guntur Pincode:522302</textarea>
              </div>
            </div>
            <button className="save-button">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContact;