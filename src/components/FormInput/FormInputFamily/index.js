import {
  Heading,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { optionsRelationship } from '../../../config/options/RelationshipOptions';
import TableData from '../../TableData';

const FormInputFamily = ({ familyFields, register, dataSource }) => {
  const columns = [
    {
      label: 'Name',
      render: (data, index) => (
        <>
          <Input
            size="sm"
            id="name"
            placeholder="Enter your name"
            {...register(`family.${index}.name`, {
              required: 'This is required',
              minLength: {
                value: 4,
                message: 'Minimum length should be 4',
              },
            })}
          />
        </>
      ),
    },
    {
      label: 'Date of Birth',
      render: (data, index) => (
        <Input
          placeholder="Select Date and Time"
          size="sm"
          type="datetime-local"
          {...register(`family.${index}.dateOfBirth`, {
            required: 'This is required',
            minLength: {
              value: 14,
              message: 'Minimum length should be 14',
            },
          })}
        />
      ),
    },
    {
      label: 'Relationship Status',
      render: (data, index) => (
        <Select
          colorScheme="red"
          size="sm"
          onClick={() => console.log(index, 'mawar')}
          {...register(`family.${index}.relationshipStatus`, {
            required: 'This is required',
            minLength: {
              value: 4,
              message: 'Minimum length should be 4',
            },
          })}
        >
          {optionsRelationship.map((option, index) => (
            <option key={index}>{option.label}</option>
          ))}
        </Select>
      ),
    },
  ];

  return (
    <div>
      <Heading as="h4" size="sm" className="mt-4">
        {`Family Member (${familyFields.length})`}
      </Heading>
      <TableData columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default FormInputFamily;
