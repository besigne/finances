'use client'
import React from 'react';
import { Box } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const DashboardTable: React.FC = () => {



  return (
    <>
      <Box className="m-4 p-2 d-flex justify-content-end" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
        <Box className="col-2 m-2">

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="DD/MM/YYYY"
              label="From"
              views={['month', 'day']}
            />
          </LocalizationProvider>
        </Box>
        <Box className="col-2 m-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="DD/MM/YYYY"
              label="To"
              views={['month', 'day']}
            />
          </LocalizationProvider>
        </Box>
      </Box>
      <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
      </Box>
    </>
  )
}

export default DashboardTable