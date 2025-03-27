import React from 'react';

function Nav() {
  return (
    <nav style={{
      backgroundColor: '#6e4b34',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 20px',
      alignItems: 'center'
    }}>
      <div>
        <h1 style={{ margin: 0 }}>EdVance</h1>
      </div>
      <div>
        <a href="/App.jsx" style={{ 
          color: 'white', 
          textDecoration: 'none', 
          margin: '0 10px' 
        }}>
          Home
        </a>
        <a href="/about" style={{ 
          color: 'white', 
          textDecoration: 'none', 
          margin: '0 10px' 
        }}>
          About
        </a>
        <a href="/contact" style={{ 
          color: 'white', 
          textDecoration: 'none', 
          margin: '0 10px' 
        }}>
          Contact
        </a>
        <a href="/login" style={{ 
          color: 'white', 
          textDecoration: 'none', 
          margin: '0 10px' 
        }}>
          Login
        </a>
      </div>
    </nav>
  );
}

export default Nav