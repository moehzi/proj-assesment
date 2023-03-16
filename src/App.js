import { Container } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container maxW="1440px" padding="8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-user" element={<CreateUser />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
