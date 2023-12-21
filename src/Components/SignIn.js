import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app, database } from '../firebaseConfig';
import './style.css';

const SignIn = ({ onSignIn }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const auth = getAuth();

  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        // Call onSignIn when the user successfully signs in
        onSignIn();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className='sign-in-container'>
      <div>
        <h4 className='title-s'>Sign In</h4>
      </div>
      
      <input
        placeholder="email"
        name="email"
        type="email"
        className="sign-in-input"
        onChange={(event) => handleInputs(event)}
      />
      <input
        placeholder="password"
        name="password"
        type="password"
        className="sign-in-input"
        onChange={(event) => handleInputs(event)}
      />
      <button className="sign-in-button" onClick={handleSubmit}>Sign In</button>
    </div>
  );
};

export default SignIn;