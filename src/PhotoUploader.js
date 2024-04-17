// PhotoUploader.js
import React, { useState } from 'react';

const PhotoUploader = ({ onPhotosSelected }) => {
  const handleFileSelect = (event) => {
    const files = event.target.files;
    onPhotosSelected(files);
  };

  return (
    <input type="file" onChange={handleFileSelect} accept="image/*" multiple />
  );
};

export default PhotoUploader;
