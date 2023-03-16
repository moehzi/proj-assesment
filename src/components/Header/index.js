import { Heading } from '@chakra-ui/react';
import React from 'react';
import ButtonComponent from '../Button';
import { Link } from 'react-router-dom';

const Header = ({ text, isHaveButton, to }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading size="md" as="h3">
        {text}
      </Heading>
      {isHaveButton && (
        <Link to="/create-user">
          <ButtonComponent text="Create New User" colorScheme="red" />
        </Link>
      )}
    </div>
  );
};

export default Header;
