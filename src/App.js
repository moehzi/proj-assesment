import { Container } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import CreateUser from './pages/CreateUser';
import Home from './pages/Home/';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxW="1440px" padding="8">
        {/* <Home /> */}
        <CreateUser />
      </Container>
    </div>
  );
}

export default App;
