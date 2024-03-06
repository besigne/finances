'use client'
import { Typography } from '@mui/material';
import React from 'react';

interface TitleProps {
  text: string
}

const Title: React.FC<TitleProps> = ({ text }) =>{
  return (
    <Typography variant="button">
      {text.toUpperCase()}
    </Typography>
  )
}

export default Title