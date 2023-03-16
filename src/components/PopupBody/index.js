import { Flex, ListItem, OrderedList, Text } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import ListItemDetails from '../ListItemDetails';

const PopupBody = ({ data }) => {
  return (
    <OrderedList display="flex" flexDirection="column" gap="1rem">
      {data.family.map((value, index) => (
        <Fragment key={index}>
          <Flex direction="column" gap=".25rem">
            <ListItemDetails value={value} />
          </Flex>
        </Fragment>
      ))}
    </OrderedList>
  );
};

export default PopupBody;
