import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoList from './components/VideoList.jsx';
import NewVideo from './components/NewVideo.jsx';
import VideoDetail from './components/VideoDetail';
import EditVideo from './components/EditVideo.jsx';
import Footer from './components/Footer.jsx'; // Importa el Footer


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <h1>Aluraflix</h1>
          <div>
            <a href="/">Home</a>
            <a href="/videos/new">Nuevo Video</a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<VideoList />} />
          <Route path="/videos/new" element={<NewVideo />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/videos/edit/:id" element={<EditVideo />} />
        </Routes>
        <Footer /> {/* Agrega el Footer al final */}
      </div>
    </Router>
  );
}

export default App;