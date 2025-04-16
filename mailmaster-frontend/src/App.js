import React, { useState } from 'react';
import Login from './components/Login';
import Campaigns from './components/Campaigns';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      {user ? (
        <Campaigns />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;