import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

const TableData = ({ dataSource, columns }) => {
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
            {dataSource.map((data, indexSource) => {
              return (
                <Tr key={indexSource}>
                  {columns.map((column, index) => {
                    return (
                      <Td key={index}>{column.render(data, indexSource)}</Td>
                    );
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
