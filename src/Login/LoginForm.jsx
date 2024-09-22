import React, { useState } from 'react';
import './LoginForm.css';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setMessage('Email and password fields are required');
    } else {
      setMessage('Successfully logged in');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor='email-field'>Email</label>
          <input 
            id='email-field'
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="form-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor='password-field'>Password</label>
          <input 
            id="password-field"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="form-input"
          />
        </div>
        <button data-testid="submit" type="submit" className="submit-button">Submit</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
