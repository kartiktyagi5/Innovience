import React from 'react';
import { Quote } from 'lucide-react';
import './Testonimal.css';


const testimonials = [
  {
    name: 'Sarah Johnson',
    school: 'Stanford University',
    internship: 'Google',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'This program transformed my coding journey. The hands-on projects and mentorship were invaluable.'
  },
  {
    name: 'Michael Chen',
    school: 'MIT',
    internship: 'Microsoft',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'The practical experience I gained helped me land my dream internship. Highly recommended!'
  },
  {
    name: 'Emily Rodriguez',
    school: 'UC Berkeley',
    internship: 'Apple',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'From beginner to confident developer - this program exceeded all my expectations.'
  },
  {
    name: 'Sarah Johnson',
    school: 'Stanford University',
    internship: 'Google',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'This program transformed my coding journey. The hands-on projects and mentorship were invaluable.'
  },
  {
    name: 'Michael Chen',
    school: 'MIT',
    internship: 'Microsoft',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'The practical experience I gained helped me land my dream internship. Highly recommended!'
  },
  {
    name: 'Emily Rodriguez',
    school: 'UC Berkeley',
    internship: 'Apple',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    quote: 'From beginner to confident developer - this program exceeded all my expectations.'
  }
];

const Testonimal = () => {
  return (
    <div className="testonimal-section">
      <div className="testonimal-container">
        <h2 className="testonimal-heading">Let's Hear From Your</h2>
        <p className="testonimal-subheading">Fellow Teens</p>

        <div className="testonimal-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testonimal-card">
              <Quote className="testonimal-quote-icon" />
              <div className="testonimal-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testonimal-image"
                />
                <div>
                  <h3 className="testonimal-name">{testimonial.name}</h3>
                  <p className="testonimal-school">{testimonial.school}</p>
                  <p className="testonimal-internship">Internship at {testimonial.internship}</p>
                </div>
              </div>
              <p className="testonimal-quote">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testonimal;
