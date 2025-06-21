import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Box from './components/box/Box';

import Home from './pages/Home';
import News from './pages/News';
import Service from './pages/Service';


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Box />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/services/:serviceSlug" element={<Service />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
