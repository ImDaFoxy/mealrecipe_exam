import React, { useState, useEffect } from 'react';
import './Components/style.css';
import Meal from './Components/Meal';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const storedAuthState = localStorage.getItem('isAuthenticated');
    setAuthenticated(storedAuthState === 'true');
  }, []);

  const handleSignIn = () => {
    setAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleSignOut = () => {
    setAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <>
      {isAuthenticated ? (
        <Meal onSignOut={handleSignOut} />
      ) : (
        <div className='app-background'>
          <h1>Welcome To Meal Recipe! 😁</h1>
          <h6>By: Brittanie, Melinda, Michelle</h6>
          <SignIn onSignIn={handleSignIn} />
          <SignUp />
        </div>
      )}
    </>
  );
}

export default App;
