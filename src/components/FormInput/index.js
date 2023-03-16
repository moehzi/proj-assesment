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
  Heading,
} from '@chakra-ui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import ButtonComponent from '../Button';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/userSlice';

const FormInput = () => {
  const {
    handleSubmit,
    register,
    control,
    watch,
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
    dispatch(addUser(values));
  };

  const familyFields = watch('family');

  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <FormControl isInvalid={errors.name} className="flex gap-4">
        <div className="flex flex-col flex-1 max-w-2xl gap-2">
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
          <FormLabel htmlFor="eKTP">eKTP</FormLabel>
          <Input
            id="eKTP"
            placeholder="Enter your eKTP..."
            {...register('eKTP', {
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
          <Heading as="h4" size="sm" className="mt-4">
            {`Family Member (${familyFields.length})`}
          </Heading>
          <TableContainer>
            <Table size="sm" variant="simple" colorScheme="red">
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
                    </Td>
                    <Td>
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
                    </Td>
                    <Td>
                      <Input
                        id="relationshipStatus"
                        size="sm"
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
            text="Add Family Member"
            colorScheme="red"
            maxW="200px"
            onClick={() =>
              appendFamily({
                name: '',
                dateOfBirth: '',
                relationshipStatus: '',
              })
            }
          />
        </div>
        <div className="flex flex-col flex-1 max-w-xl gap-2">
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
            maxW="150px"
            onClick={() => appendPhoneNumber({ phoneNumber: '' })}
          />
        </div>
      </FormControl>
      <Button mt={4} colorScheme="red" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FormInput;
