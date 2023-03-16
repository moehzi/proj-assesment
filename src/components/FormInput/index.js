import React from 'react';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { useForm, useFieldArray } from 'react-hook-form';
import ButtonComponent from '../Button';
import { useDispatch } from 'react-redux';
import { addUser } from '../../reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import InputBox from '../InputBox';
import TextareaBox from '../TextareaBox';
import FormInputFamily from './FormInputFamily';

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
    dispatch(addUser(values));
    navigate('/');
  };

  const familyFields = watch('family');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <FormControl isInvalid={errors.name} className="flex gap-4">
        <div className="flex flex-col flex-1 max-w-2xl gap-2">
          <InputBox
            id="name"
            placeholder="Enter your name"
            label="Name"
            register={register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <TextareaBox
            id="address"
            placeholder="Enter your address"
            label="Address"
            register={register('address', {
              required: 'This is required',
              minLength: { value: 10, message: 'Minimum length should be 10' },
            })}
          />
          <InputBox
            id="eKTP"
            label="eKTP"
            placeholder="Enter your eKTP..."
            register={register('eKTP', {
              required: 'This is required',
              minLength: { value: 14, message: 'Minimum length should be 14' },
            })}
          />
          <FormInputFamily
            familyFields={familyFields}
            dataSource={fieldsFamily}
            register={register}
          />
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
          <InputBox
            id="job"
            label="Job"
            placeholder="Enter your job"
            register={register('job', {
              required: 'This is required',
            })}
          />
          <InputBox
            placeholder="Select Date and Time"
            id="dateOfBirth"
            label="Date Of Birth"
            register={register('dateOfBirth', {
              required: 'This is required',
              minLength: { value: 14, message: 'Minimum length should be 14' },
            })}
            size="md"
            type="date"
          />
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
