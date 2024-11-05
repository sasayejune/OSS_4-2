import React from 'react';
import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated, handleDeleteAll }) => {
  return (
    <header>
      <div style={{ 
          padding: '10px', 
          marginTop: '20px',
          textAlign: 'center'
        }}>
        <h1 style={{ margin: 0 }}>Community Management Software</h1>
      </div>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Community</button>
        <button
          onClick={handleDeleteAll}
          className="button muted-button"
          style={{ marginLeft: '12px' }} 
        >
          Delete All Communities
        </button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;
