import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { API_URL } from '../services/api';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)  // Asegúrate de que sea "/videos/${id}" si corresponde.
   
        .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      }) 
      
       .then(data=> setVideo(data))
       .catch(error => console.error('Error fetching video:', error));
  }, [id]);

  if (!video) return <div>Cargando...</div>;
   
  return (
    <div>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <ReactPlayer url={video.video} controls width="100%" height="480px" />
      
    </div>
  );
};

export default VideoDetail;
