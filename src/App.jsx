import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import News from './pages/News';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Box from './components/box/Box';


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Box />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
