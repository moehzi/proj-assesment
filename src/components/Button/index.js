import React from 'react';
import { Button } from '@chakra-ui/react';

const ButtonComponent = ({ text, ...rest }) => {
  return <Button {...rest}>{text}</Button>;
};

export default ButtonComponent;
