import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if(response.ok && data.token){
          localStorage.setItem('token', data.token);
          navigate('/upload')
        } else {
          setErrorMessage(`Error: ${data.message}`);
        }
    } catch (error) {
        setErrorMessage(`Error: ${error}`);
        setEmail('');
        setPassword('');
    }
    };
  
    return (
      <div className="container mx-auto p-5">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-2.5">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            className="border p-2 w-full"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            className="border p-2 w-full"
            placeholder="Password"
            required
          />
          <button type="submit" className="bg-sky-700 text-white font-bold p-2 rounded">
            Sign Up
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>}
      </div>
    );
  }
  
  export default SignUp;
  