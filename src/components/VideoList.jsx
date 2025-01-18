import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../services/api';
import './VideoList.css'; // Asegúrate de tener este archivo de estilos.

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setVideos(data);
        } else {
          console.error('Datos incorrectos:', data);
        }
      })
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este video?')) {
      fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo eliminar el video.');
          }
          setVideos(videos.filter(video => video.id !== id));
        })
        .catch(error => console.error('Error al eliminar el video:', error));
    }
  };

  return (
    <div className="video-list">
      <h2>Lista de Videos</h2>
      <div className="video-grid">
        {videos.length > 0 ? (
          videos.map(video => (
            <div key={video.id} className="card">
              <img src={video.image} alt={video.title} className="card-image" />
              <div className="card-content">
                <h3>{video.title}</h3>
                <p><strong>Categoría:</strong> {video.category}</p>
                <p><strong>Descripción:</strong> {video.description}</p>
                <div className="card-buttons">
                  <Link to={`/videos/${video.id}`}>Ver Video</Link>
                  <Link to={`/videos/edit/${video.id}`}>Editar</Link>
                  <button onClick={() => handleDelete(video.id)} className="delete-button">Eliminar</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay videos disponibles.</p>
        )}
      </div>
      <Link to="/videos/new" className="new-video-button">Agregar Nuevo Video</Link>
    </div>
  );
};

export default VideoList;
