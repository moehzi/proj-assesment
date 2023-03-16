import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import TableData from '../../components/TableData';
import { homeColumns } from '../../config/columns/HomeColumns';

const Home = () => {
  const users = useSelector((state) => state.users.items);
  return (
    <>
      <Header isHaveButton text="List Users" />
      <TableData dataSource={users} columns={homeColumns} />
    </>
  );
};

export default Home;
