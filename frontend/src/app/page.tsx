import React from 'react';
import Menu from '@/components/menu';
import HomeScreen from '@/components/homescreen';
import { Box } from '@mui/material';
import Projection from '@/components/projection';
import Title from '@/components/title';
import Goals from '@/components/goals';

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
        
        <Goals />

        <Box className="m-4 p-2 d-flex justify-content-center" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
          <Title text={'Projection'} />
        </Box>
        
        <Projection />
      
      </Box>
    </>
  );
}
