import React, { useState } from 'react';
import './VideoForm.css'; // Asegúrate de tener una hoja de estilos

const VideoForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="video-form">
      <div className="form-group">
        <label>Título:</label>
        <input name="title" value={formData.title || ''} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Categoría:</label>
        <input name="category" value={formData.category || ''} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>URL de Imagen:</label>
        <input name="image" value={formData.image || ''} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Video:</label>
        <input name="video" value={formData.video || ''} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Descripción:</label>
        <textarea name="description" value={formData.description || ''} onChange={handleChange} required />
      </div>
      <button type="submit" className="submit-button">Guardar</button>
    </form>
  );
};

export default VideoForm;


