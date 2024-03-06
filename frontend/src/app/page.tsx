import React from 'react';
import Menu from '@/components/menu';
import HomeScreen from '@/components/homescreen';
import { Box } from '@mui/material';
import Projection from '@/components/projection';
import Title from '@/components/title';

export default function Home() {
  return (
    <>
      <Box className="container">
        <Menu />
      </Box>
      <Box className="container">
        <Box className="m-4 p-2 d-flex justify-content-center" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
          <Title text={'Overview'} />
        </Box>
        <HomeScreen />
        <Box className="m-4 p-2 d-flex justify-content-center" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
          <Title text={'Goals'} />
        </Box>
        insert goals here
        <Box className="m-4 p-2 d-flex justify-content-center" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
          <Title text={'Projection'} />
        </Box>
        <Projection />
      </Box>
    </>
  );
}
