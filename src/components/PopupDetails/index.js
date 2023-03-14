import React from 'react';
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  PopoverTrigger,
  PopoverHeader,
  Button,
} from '@chakra-ui/react';

const PopupDetails = ({ triggerText, popupHeader, popupBody }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="red">{triggerText}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{popupHeader}</PopoverHeader>
        <PopoverBody>{popupBody}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopupDetails;
