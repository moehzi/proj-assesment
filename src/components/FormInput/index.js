import React from 'react';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  InputGroup,
  InputLeftAddon,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonComponent from '../Button';

const FormInput = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      phoneNumbers: [{ phoneNumber: '' }],
      family: [{ name: '', dateOfBirth: '', relationshipStatus: '' }],
    },
  });

  const { append: appendPhoneNumber, fields: fieldsPhoneNumber } =
    useFieldArray({ name: 'phoneNumbers', control });
  const { append: appendFamily, fields: fieldsFamily } = useFieldArray({
    name: 'family',
    control,
  });

  const onSubmit = (values) => {
    console.log(values, 'ini value');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <FormControl isInvalid={errors.name} className="flex gap-4">
        <div className="flex gap-2 flex-col">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            placeholder="Enter your name..."
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormLabel htmlFor="name">Address</FormLabel>
          <Textarea
            id="address"
            placeholder="Enter your address..."
            {...register('address', {
              required: 'This is required',
              minLength: { value: 10, message: 'Minimum length should be 10' },
            })}
          />
          <FormLabel htmlFor="name">eKTP</FormLabel>
          <Input
            id="ektp"
            placeholder="Enter your eKTP..."
            {...register('ektp', {
              required: 'This is required',
              minLength: { value: 14, message: 'Minimum length should be 14' },
            })}
          />
          <FormLabel htmlFor="name">Job</FormLabel>
          <Input
            id="job"
            placeholder="enter your job"
            {...register('job', {
              required: 'This is required',
            })}
          />
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Date of Birth</Th>
                  <Th>Relationship Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {fieldsFamily.map((field, index) => (
                  <Tr key={field.id}>
                    <Td>
                      <Input
                        id="name"
                        placeholder="Enter your name..."
                        {...register(`family.${index}.name`, {
                          required: 'This is required',
                          minLength: {
                            value: 4,
                            message: 'Minimum length should be 4',
                          },
                        })}
                      />
                    </Td>
                    <Td>
                      <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        {...register(`family.${index}.dateOfBirth`, {
                          required: 'This is required',
                          minLength: {
                            value: 14,
                            message: 'Minimum length should be 14',
                          },
                        })}
                      />
                    </Td>
                    <Td>
                      <Input
                        id="relationshipStatus"
                        placeholder="Enter your relationship status..."
                        {...register(`family.${index}.relationshipStatus`, {
                          required: 'This is required',
                          minLength: {
                            value: 4,
                            message: 'Minimum length should be 4',
                          },
                        })}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <ButtonComponent
            text="Add Phone"
            colorScheme="red"
            onClick={() => appendFamily({ name: '', relationshipStatus: '' })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <FormLabel htmlFor="dateOfBirth">Date of Birth</FormLabel>
          {/* <InputGroup> */}
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            {...register('dateOfBirth', {
              required: 'This is required',
              minLength: { value: 14, message: 'Minimum length should be 14' },
            })}
          />
          {/* </InputGroup> */}
          <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
          {fieldsPhoneNumber.map((field, index) => (
            <InputGroup key={field.id}>
              <InputLeftAddon children="+62" />
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="enter your phone number..."
                {...register(`phoneNumbers.${index}.phoneNumber`, {
                  required: 'This is required',
                })}
              />
            </InputGroup>
          ))}
          <ButtonComponent
            text="Add Phone"
            colorScheme="red"
            onClick={() => appendPhoneNumber({ phoneNumber: '' })}
          />
        </div>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FormInput;
