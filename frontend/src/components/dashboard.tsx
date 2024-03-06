'use client'
import React, { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, useTheme } from "@mui/material"
import { months } from './enum/enums';

const DashboardTable: React.FC = () => {
  const [selectedMonths, setSelectedMonths] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedMonths>) => {
    const {
      target: { value },
    } = event;
    setSelectedMonths(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(() => {
  }, [])

  return (
    <>
      <Box className="m-4 p-2 d-flex justify-content-start" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
        <FormControl className="col-2 m-2">
        <InputLabel id="demo-multiple-name-label">Month</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={selectedMonths}
          onChange={handleChange}
          input={<OutlinedInput label="Month" />}
        >
          <MenuItem
            key={'All'}
            value={'All'}
          >
            All months
          </MenuItem>
          {months.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Box>
      <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
      </Box>
    </>
  )
}

export default DashboardTable