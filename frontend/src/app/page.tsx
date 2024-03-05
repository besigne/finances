import React from 'react';
import Menu from '@/components/menu';
import HomeScreen from '@/components/homescreen';
import { Box } from '@mui/material';
import Projection from '@/components/projection';

export default function Home() {
  return (
    <>
      <Menu />
      <Box className="container">
        <HomeScreen />
        <Projection />
      </Box>
    </>
  );
}
