import { Container } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TableData from './components/TableData';

const dataSource = [
  {
    name: 'Faizi',
    eKTP: '12309542342',
    address: 'Jl. Permata Ringgi',
    dateOfBirth: '19 Maret 2000',
    phoneNumber: '081234567890',
    family: [
      {
        name: 'Bambang Pamungkas',
        dateOfBirth: '20 Maret 2000',
        relationshipStatus: 'parent',
      },
      {
        name: 'Angelina Jolie',
        dateOfBirth: '21 Maret 2000',
        relationshipStatus: 'parent',
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxW="1440px" padding="8">
        <Header text="List User" />
        <TableData dataSource={dataSource} />
      </Container>
    </div>
  );
}

export default App;
