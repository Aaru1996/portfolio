import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { Route, Routes } from 'react-router-dom';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/Contacts';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App" bg="#e7f9ff">
       <Navbar/>
       <Home />
       <About />
       <Skills/>
       <Projects/>
       <Contacts/>
    </Box>
  );
}

export default App;
