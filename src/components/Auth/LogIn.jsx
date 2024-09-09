import React, { useState } from 'react';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

      // need to add logic here
    
    };
  
    return (
      <div className="container mx-auto p-5">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-2.5">Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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