import { Flex, ListItem, Text } from '@chakra-ui/react';
import React from 'react';

const ListItemDetails = ({ value }) => {
  return (
    <>
      <ListItem>
        <Flex justifyContent={'space-between'}>
          <Text>Name </Text>
          <Text>{value.name}</Text>
        </Flex>
      </ListItem>
      <Flex justifyContent="space-between">
        <Text>Date of Birth</Text>
        <Text>{value.dateOfBirth}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Relationship Status</Text>
        <Text>{value.relationshipStatus}</Text>
      </Flex>
    </>
  );
};

export default ListItemDetails;
