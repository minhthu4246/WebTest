// App.js
import React, { useState } from 'react';
import './App.css';
import PhotoUploader from './PhotoUploader';
import PhotoGrid from './PhotoGrid';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handleLogin = () => {
    // Simulate login process
    if (username === 'demo' && password === 'demo') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handlePhotosSelected = (files) => {
    setUploadedPhotos([...uploadedPhotos, ...files]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Photos</h1>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </header>
      {isLoggedIn && (
        <main>
          <PhotoUploader onPhotosSelected={handlePhotosSelected} />
          <PhotoGrid photos={uploadedPhotos} />
        </main>
      )}

    </div>
  );
}

export default App;

