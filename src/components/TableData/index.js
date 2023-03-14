import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  ListItem,
  Text,
  OrderedList,
} from '@chakra-ui/react';
import PopupDetails from '../PopupDetails';

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
              <>
                <ListItem>Name: {value.name}</ListItem>
                <Text>Date of Birth: {value.dateOfBirth}</Text>
                <Text>Relationship Status: {value.relationshipStatus}</Text>
              </>
            ))}
          </OrderedList>
        }
      />
    ),
  },
];

const TableData = ({ dataSource }) => {
  return (
    <div className="mt-8">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {columns.map((column, index) => (
                <Th bgColor="red.500" color="white" key={index}>
                  {column.label}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {dataSource.map((data, index) => {
              return (
                <Tr key={index}>
                  {columns.map((column, index) => {
                    return <Td key={index}>{column.render(data)}</Td>;
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
