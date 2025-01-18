import React from 'react';
import VideoForm from './VideoForm.jsx';
import { API_URL } from '../services/api'; 

const NewVideo = () => {
  const handleSubmit = (data) => {
    fetch(`${API_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then(() => alert('¡Video agregado con éxito!'))
      .catch(error => console.error('Error al agregar video:', error));
  };

  return (
    <div>
      <h2>Nuevo Video</h2>
      <VideoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewVideo;
