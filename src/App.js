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

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.success) {
        setIsLoggedIn(true);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in');
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
