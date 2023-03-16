import { FormLabel, Textarea } from '@chakra-ui/react';
import React from 'react';

const TextareaBox = ({ id, placeholder, label, register }) => {
  return (
    <>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Textarea id={id} placeholder={placeholder} {...register} />
    </>
  );
};

export default TextareaBox;
