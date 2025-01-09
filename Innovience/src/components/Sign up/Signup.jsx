import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Phone } from 'lucide-react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Handle signup logic here
      console.log('Form submitted:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <h2>Create Account</h2>
          <p>Join our community today</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <User className="input-icon" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <Phone className="input-icon" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <Lock className="input-icon" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </div>
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <div className="terms-checkbox">
            <label>
              <input type="checkbox" required />
              <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
            </label>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>

        <div className="login-link">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
