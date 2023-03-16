import { FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const InputBox = ({ id, placeholder, label, register, ...rest }) => {
  return (
    <>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input id={id} placeholder={placeholder} {...register} {...rest} />
    </>
  );
};

export default InputBox;
