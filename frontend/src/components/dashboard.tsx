'use client'
import React, { useEffect } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Slider, Theme, Typography, useTheme } from "@mui/material"
import { months, types, series } from './enum/enums';
import { BarChart } from '@mui/x-charts';

interface SelectedSeries {
    id: string
    label: string
    data: number[]
}

const DashboardTable: React.FC = () => {
  const [selectedMonths, setSelectedMonths] = React.useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);
  const [selectedSeries, setSelectedSeries] = React.useState<SelectedSeries[]>([]);
  const [selectedItems, setSelectedItems] = React.useState<string[]>(['']);


  const handleChangeMonth = (event: SelectChangeEvent<typeof selectedMonths>) => {
    const {
      target: { value },
    } = event;
    setSelectedMonths(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeTypes = (event: SelectChangeEvent<typeof selectedMonths>) => {
    const {
      target: { value },
    } = event;
    setSelectedTypes(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(() => {
  }, [])

  return (
    <>
      <Box className="row m-4 p-2 justify-content-center align-items-center" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
        <FormControl className="col-2 m-1 p-2">

          <InputLabel id="demo-multiple-name-label">Type</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={selectedTypes}
            onChange={handleChangeTypes}
            input={<OutlinedInput label="Month" />}
            size='small'
          >
            {types.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className="col-2 m-1 p-2">
          <InputLabel>Month</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={selectedMonths}
            onChange={handleChangeMonth}
            input={<OutlinedInput label="Month" />}
            size='small'
          >
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

        <Box className="col-2 m-1">
          <Button className='col-12' variant="outlined" color='error'>Delete</Button>
        </Box>
      </Box>
      <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
        <BarChart
          height={350}
          xAxis={[{ scaleType: 'band', data: selectedItems}]}
          series={selectedSeries}
        />
      </Box>
      <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>

      </Box>
    </>
  )
}

export default DashboardTable