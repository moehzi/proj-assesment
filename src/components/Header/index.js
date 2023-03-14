import { Heading } from '@chakra-ui/react';
import React from 'react';
import ButtonComponent from '../Button';

const Header = ({ text, isHaveButton }) => {
  return (
    <div className="flex justify-between items-center">
      <Heading size="md" as="h3">
        {text}
      </Heading>
      {isHaveButton && (
        <ButtonComponent text="Create New User" colorScheme="red" />
      )}
    </div>
  );
};

export default Header;
