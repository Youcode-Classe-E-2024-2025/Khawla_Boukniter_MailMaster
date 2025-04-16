import React, { useState } from 'react';
import Login from './components/Login';
import Campaigns from './components/Campaigns';
import CreateNewsletter from './components/CreateNewsletter';
import CreateSubscriber from './components/CreateSubscriber';
import CreateCampaign from './components/CreateCampaign';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      {user ? (
        <div>
          <CreateNewsletter />
          <CreateSubscriber />
          <CreateCampaign />
          <Campaigns />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;