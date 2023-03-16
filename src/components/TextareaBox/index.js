import { FormErrorMessage, FormLabel, Textarea } from '@chakra-ui/react';
import React from 'react';

const TextareaBox = ({ id, placeholder, label, register, errors, ...rest }) => {
  return (
    <>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Textarea id={id} placeholder={placeholder} {...register} {...rest} />
      <FormErrorMessage>{errors && errors.message}</FormErrorMessage>
    </>
  );
};

export default TextareaBox;
