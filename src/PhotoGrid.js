// PhotoGrid.js
import React, { useState } from 'react';

const PhotoGrid = ({ photos }) => {
  const [selectedPhotoInfo, setSelectedPhotoInfo] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhotoInfo(photo);
  };

  const closeModal = () => {
    setSelectedPhotoInfo(null);
  };

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <div key={index} className="photo-item" onClick={() => handlePhotoClick(photo)}>
          <img src={URL.createObjectURL(photo)} alt={`Photo ${index + 1}`} />
        </div>
      ))}
      {selectedPhotoInfo && (
        <div className="modal" onClick={closeModal}>
         <div className="photo-info">
          <button className="close-button" onClick={closeModal}>Close</button>
          <img src={URL.createObjectURL(selectedPhotoInfo)} alt="Selected Photo" />
          <div>
            <p>Date: {selectedPhotoInfo.date}</p>
            <p>Name: {selectedPhotoInfo.name}</p>
            <p>Location: {selectedPhotoInfo.location}</p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;
