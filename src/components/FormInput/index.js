import React, { Fragment } from 'react';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  FormErrorMessage,
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
            })}
            errors={errors.name}
          />
          <TextareaBox
            id="address"
            placeholder="Enter your address"
            label="Address"
            register={register('address', {
              required: 'This is required',
              minLength: { value: 10, message: 'Minimum length should be 10' },
            })}
            errors={errors.address}
          />
          <InputBox
            id="eKTP"
            label="eKTP"
            placeholder="Enter your eKTP..."
            register={register('eKTP', {
              required: 'This is required',
              minLength: { value: 14, message: 'Minimum length should be 14' },
            })}
            type="number"
            errors={errors.eKTP}
          />
          <FormInputFamily
            familyFields={familyFields}
            dataSource={fieldsFamily}
            register={register}
            errors={errors}
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
            errors={errors.job}
          />
          <InputBox
            placeholder="Select Date and Time"
            id="dateOfBirth"
            label="Date Of Birth"
            register={register('dateOfBirth', {
              required: 'This is required',
            })}
            size="md"
            type="date"
            errors={errors.dateOfBirth}
          />
          {console.log(errors)}
          <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
          {fieldsPhoneNumber.map((field, index) => (
            <Fragment key={field.id}>
              <InputGroup>
                <InputLeftAddon children="+62" />
                <Input
                  id="phoneNumber"
                  type="number"
                  placeholder="Enter your phone number"
                  {...register(`phoneNumbers.${index}.phoneNumber`, {
                    required: 'This is required',
                    setValueAs: (v) => `0${v}`,
                    minLength: { value: 9, message: 'Minimal length is 9' },
                  })}
                />
              </InputGroup>
              {errors.phoneNumbers && errors.phoneNumbers.length > 1 && (
                <FormErrorMessage>
                  {errors.phoneNumbers[index] &&
                    errors.phoneNumbers[index].phoneNumber.message}
                </FormErrorMessage>
              )}
            </Fragment>
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
