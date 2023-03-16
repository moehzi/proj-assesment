import { FormErrorMessage, Heading, Input, Select } from '@chakra-ui/react';
import React from 'react';
import { optionsRelationship } from '../../../config/options/RelationshipOptions';
import TableData from '../../TableData';

const FormInputFamily = ({ familyFields, register, dataSource, errors }) => {
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
          <FormErrorMessage>
            {errors.family && errors.family[index].name?.message}
          </FormErrorMessage>
        </>
      ),
    },
    {
      label: 'Date of Birth',
      render: (data, index) => (
        <>
          <Input
            placeholder="Select Date and Time"
            size="sm"
            type="date"
            id="dateOfBirth"
            {...register(`family.${index}.dateOfBirth`, {
              required: 'This is required',
            })}
          />
          <FormErrorMessage>
            {errors.family && errors.family[index].dateOfBirth?.message}
          </FormErrorMessage>
        </>
      ),
    },
    {
      label: 'Relationship Status',
      render: (data, index) => (
        <>
          <Select
            colorScheme="red"
            size="sm"
            id="relationshipStatus"
            {...register(`family.${index}.relationshipStatus`, {
              required: 'This is required',
            })}
            placeholder="Enter your relationship"
          >
            {optionsRelationship.map((option, index) => (
              <option key={index}>{option.label}</option>
            ))}
          </Select>
          <FormErrorMessage>
            {errors.family && errors.family[index].relationshipStatus?.message}
          </FormErrorMessage>
        </>
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
