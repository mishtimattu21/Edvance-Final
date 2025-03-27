import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login attempted', { email, password });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(/background.png)', //Change the picture hd ko
      backgroundColor: '#f0f2f5'
    }}>
      <div style={{
        backgroundColor: '#fff8e7',
        padding: '40px',
        borderRadius: '30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
        
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#333'
        }}>
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              marginBottom: '15px',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              marginBottom: '15px',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
          />
          <button 
            type="submit"
            style={{
              backgroundColor: '#6e4b34',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#6e4b34'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#6e4b34'}
          >
            Log In
          </button>
        </form>
        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          color: '#666'
        }}>
          <p>
            Don't have an account? <a href="/signup" style={{ color: '#6e4b34', textDecoration: 'none' }}>
              Sign Up
            </a>
          </p>
          <p style={{ marginTop: '10px' }}>
            <a href="/forgot-password" style={{ color: '#666', textDecoration: 'none' }}>
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;