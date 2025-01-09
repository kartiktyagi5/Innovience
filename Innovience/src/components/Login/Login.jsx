import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container-login">
      <div className="login-box-login">
        <div className="login-header-login">
          <h2>Welcome Back</h2>
          <p>Please sign in to your account</p>
        </div>
        
        <form className="login-form-login" onSubmit={handleSubmit}>
          <div className="form-group-login">
            <div className="input-wrapper-login">
              <Mail className="input-icon-login" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
              />
            </div>
          </div>
          
          <div className="form-group-login">
            <div className="input-wrapper-login">
              <Lock className="input-icon-login" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div className="form-options-login">
            <label className="remember-me-login">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password-login">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-button-login">
            Sign in
          </button>
        </form>

        <div className="signup-link-login">
          <p>
            Don't have an account?{' '}
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
