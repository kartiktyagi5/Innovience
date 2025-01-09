import React from 'react';
import { User, Lock } from 'lucide-react';
import './AdminLogin.css';

const AdminLogin = () => {
  return (
    <div className="admin-login">
      <div className="login-container">
        <h2>Admin Login</h2>
        
        <form className="login-form">
          <div className="input-group">
            <User className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              className="input-field"
            />
          </div>
          
          <div className="input-group">
            <Lock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;