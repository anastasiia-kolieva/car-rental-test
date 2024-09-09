import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import LogIn from './components/Auth/LogIn';
import UploadPage from './pages/UploadPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
