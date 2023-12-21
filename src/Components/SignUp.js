// SignUp.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, database } from '../firebaseConfig';
import './style.css';

const SignUp = () => {
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
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
        alert('Sign-up successful! You can sign in now!.');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className='sign-up-container'>
      <div >
        <h4 className='title'> Don't Have an Account? Please Sign Up Here! 👇</h4>
      </div>
      
      <input
        placeholder="email"
        name="email"
        type="email"
        className="sign-up-input"
        onChange={(event) => handleInputs(event)}
      />
      <input
        placeholder="password"
        name="password"
        type="password"
        className="sign-up-input"
        onChange={(event) => handleInputs(event)}
      />
      <button className="sign-up-button" onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default SignUp;
