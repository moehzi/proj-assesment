import React from 'react';
import Header from '../../components/Header';
import TableData from '../../components/TableData';

const dataSource = [
  {
    name: 'Faizi',
    eKTP: '12309542342',
    address: 'Jl. Permata Ringgi',
    dateOfBirth: '19 Maret 2000',
    phoneNumber: '081234567890',
    job: 'Student',
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

const Home = () => {
  return (
    <>
      <Header text="List User" />
      <TableData dataSource={dataSource} />
    </>
  );
};

export default Home;
