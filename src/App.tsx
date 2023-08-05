import React, {useEffect, useState} from 'react';
import './App.css';
import {SPService} from "./services/SPService";

function App() {

  const [currentUser, setCurrentUser] = useState('');
  const spService = new SPService();

  useEffect(() => {
    (async () => {
      const spUser = await spService.getCurrentUser();
      debugger;
      setCurrentUser(spUser.Title)
    })();
  }, []);

  return (
      <div className="App">
        {currentUser.length > 0 &&
            <b>Hello {currentUser}!</b>
        }
      </div>
  );
}

export default App;
