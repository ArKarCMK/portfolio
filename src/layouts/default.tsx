import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/layout.css';

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Box background='background' className='container'>
        <Box className='border'>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;
