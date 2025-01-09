import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  const contactInfo = [
    {
      icon: <MapPin />,
      title: 'Our Location',
      details: ['kl university', 'guntur, 522302', 'Andhra Pradesh']
    },
    {
      icon: <Phone />,
      title: 'Phone Numbers',
      details: ['+91 8744915108', '+91 8750470265']
    },
    {
      icon: <Mail />,
      title: 'Email Address',
      details: ['Innovienceintallgience@gmail.com', 'tyagikartik576@gmail.com']
    },
    {
      icon: <Clock />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 2PM']
    }
  ];

  return (
    <div className="contact-contact-page">
      <section className="contact-contact-hero">
        <h1>Get in Touch</h1>
        <p>Have questions? We'd love to hear from you.</p>
      </section>

      <section className="contact-contact-info">
        <div className="contact-info-grid">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-info-card">
              <div className="contact-icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="contact-contact-form-section">
        <div className="contact-form-container">
          <h2>Send us a Message</h2>
          {status.message && (
            <div className={`contact-status-message ${status.type}`}>
              {status.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>
            <button type="submit">
              <Send className="contact-send-icon" />
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282867255806!2d-122.08374688447536!3d37.42199987982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
