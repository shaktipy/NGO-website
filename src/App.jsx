import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* 3D Canvas interactive background */}
      <ParticleBackground />

      {/* Floating navigation header */}
      <Navbar />

      {/* Structured core contents */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        {/* Home/Hero intro */}
        <Hero />

        {/* Philosophy/About panel */}
        <About />

        {/* Dynamic Initiatives/Programs */}
        <Programs />

        {/* Rejection-free application Form */}
        <VolunteerForm />
      </main>

      {/* Pixel-perfect footer */}
      <Footer />
    </>
  );
}

export default App;
