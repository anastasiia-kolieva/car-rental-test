import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok && data.token){
          localStorage.setItem('token', data.token);
          navigate('/upload')
        } else {
          console.error('Error:', data.message);
        }
    } catch (error) {
        console.error('Error:',error);
        setEmail('');
        setPassword('');
    }
    };
  
    return (
      <div className="container mx-auto p-5">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-2.5">Log In</h2>
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
            Log In
          </button>
        </form>
      </div>
    );
  }
  
  export default LogIn;