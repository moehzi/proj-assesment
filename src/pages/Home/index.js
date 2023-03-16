import { ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import PopupDetails from '../../components/PopupDetails';
import TableData from '../../components/TableData';

const columns = [
  { label: 'Name', render: (data) => data.name },
  { label: 'eKTP', render: (data) => data.eKTP },
  { label: 'Address', render: (data) => data.address },
  { label: 'Job', render: (data) => data.job },
  { label: 'Date of Birth', render: (data) => data.dateOfBirth },
  {
    label: 'Phone Number',
    render: (data) => (
      <>
        {data.phoneNumbers.length > 1 ? (
          <UnorderedList>
            {data.phoneNumbers.map((value) => (
              <ListItem>{value.phoneNumber}</ListItem>
            ))}
          </UnorderedList>
        ) : (
          data.phoneNumbers[0].phoneNumber
        )}
      </>
    ),
  },
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
  const users = useSelector((state) => state.users.items);
  return (
    <>
      <Header isHaveButton text="List User" />
      <TableData dataSource={users} columns={columns} />
    </>
  );
};

export default Home;
