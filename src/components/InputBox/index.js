import { FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const InputBox = ({ id, placeholder, label, register, errors, ...rest }) => {
  return (
    <>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input id={id} placeholder={placeholder} {...register} {...rest} />
      <FormErrorMessage>{errors && errors.message}</FormErrorMessage>
    </>
  );
};

export default InputBox;
