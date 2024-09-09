import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-sky-700">Welcome to Car Rental Service</h1>
      <p className="mt-4">
        {isAuthenticated
          ? "You are logged in. You can now upload your driver's license."
          : "Please sign up or log in to use our service."}
      </p>

      <div className="mt-6 space-y-4">
        {!isAuthenticated ? (
          <>
            <button
              onClick={() => navigate('/signup')}
              className="bg-sky-700 text-white p-2 mr-2.5 rounded"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate('/login')}
              className="bg-green-700 text-white p-2 rounded"
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate('/upload')}
              className="bg-sky-700 text-white p-2 mr-2.5 rounded"
            >
              Upload Driver's License
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-700 text-white p-2 rounded"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
