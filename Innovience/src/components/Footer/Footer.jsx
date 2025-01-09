import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, MessageCircle } from 'lucide-react';
import './Footer.css';
import { useState } from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-heading">About Intience</h3>
            <p className="footer-text">
              Empowering students with professional skills and real-world experience through quality education and internship opportunities.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Courses</a></li>
              <li><a href="#" className="footer-link">Internships</a></li>
              <li><a href="#" className="footer-link">Become a Mentor</a></li>
              <li><a href="#" className="footer-link">Community</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-list">
              <li className="footer-text">tyagikartik576@gmail.com</li>
              <li className="footer-text">+91 8744915108</li>
              <li>
                <button className="whatsapp-button">
                  <MessageCircle className="whatsapp-icon" />
                  <span>WhatsApp Support</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                <Send className="newsletter-icon" />
              </button>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon"><Facebook className="social-icon-img" /></a>
              <a href="#" className="social-icon"><Twitter className="social-icon-img" /></a>
              <a href="#" className="social-icon"><Instagram className="social-icon-img" /></a>
              <a href="#" className="social-icon"><Linkedin className="social-icon-img" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">© 2024 Intience. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
