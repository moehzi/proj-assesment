import React from 'react';
import TableData from '../TableData';

const columns = [
  { label: 'name' },
  { label: 'dateOfBirth' },
  { label: 'relationshipStatus' },
];
const dataSource = [
  {
    name: '',
  },
];

const FamilyForm = () => {
  return <TableData columns={columns} />;
};

export default FamilyForm;
