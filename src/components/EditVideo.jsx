import React, { useEffect, useState } from 'react';
import VideoForm from './VideoForm.jsx';
import { API_URL } from '../services/api';  
import { useParams } from 'react-router-dom';

const EditVideo = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setInitialData(data))
      .catch(error => console.error('Error fetching video:', error));
  }, [id]);

  const handleSubmit = (data) => {
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        alert('¡Video actualizado con éxito!');
      })
      .catch(error => console.error('Error updating video:', error));
  };

  if (!initialData) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Editar Video</h2>
      <VideoForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditVideo;
