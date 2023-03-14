import { ListItem, OrderedList, Text } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import Header from '../../components/Header';
import PopupDetails from '../../components/PopupDetails';
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

const columns = [
  { label: 'Name', render: (data) => data.name },
  { label: 'eKTP', render: (data) => data.eKTP },
  { label: 'Address', render: (data) => data.address },
  { label: 'Job', render: (data) => data.job },
  { label: 'Date of Birth', render: (data) => data.dateOfBirth },
  { label: 'Phone Number', render: (data) => data.phoneNumber },
  {
    label: 'Family',
    render: (data) => (
      <PopupDetails
        triggerText={`Show (${data.family.length})`}
        popupHeader="Family Details"
        popupBody={
          <OrderedList>
            {data.family.map((value, index) => (
              <Fragment key={index}>
                <ListItem>Name: {value.name}</ListItem>
                <Text>Date of Birth: {value.dateOfBirth}</Text>
                <Text>Relationship Status: {value.relationshipStatus}</Text>
              </Fragment>
            ))}
          </OrderedList>
        }
      />
    ),
  },
];

const Home = () => {
  return (
    <>
      <Header isHaveButton text="List User" />
      <TableData dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Home;
