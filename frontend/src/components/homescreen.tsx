'use client'
import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { SavingsOutlined, MoneyOffOutlined, AlignVerticalBottomOutlined } from '@mui/icons-material';
import { CustomTabPanel, allyProps } from './home/functions';
import { BarChart } from '@mui/x-charts';
import { months } from './enum/enums';

const HomeScreen: React.FC = () => {
  const [selected, setselected] = React.useState(1);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Balance" icon={<AlignVerticalBottomOutlined />} iconPosition='start' {...allyProps(0)} />
        <Tab label="Investments" icon={<SavingsOutlined />} iconPosition='start' {...allyProps(1)} />
        <Tab label="Debts" icon={<MoneyOffOutlined />} iconPosition='start' {...allyProps(2)} />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <BarChart
          sx={{ backgroundColor: "#242424", borderRadius: '10px' }}
          xAxis={[{ scaleType: 'band', data: months }]}
          series={[{
            id: "Income",
            label: "Income",
            data: [4440, 4450, 4320, 4550, 4400],
          },
          {
            id: "Spent",
            label: "Spent",
            data: [3420, 3840, 4120, 3120, 3570],
          },]}
          colors={['#6aa84f', '#95352e']}
          height={250}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <BarChart
          sx={{ backgroundColor: "#242424", borderRadius: '10px' }}
          xAxis={[{ scaleType: 'band', data: months }]}
          series={[{ data: [4000, 3000, 5000, 600] }]}
          colors={['#6aa84f']}
          height={250}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <BarChart
          sx={{ backgroundColor: "#242424", borderRadius: '10px' }}
          xAxis={[{ scaleType: 'band', data: months }]}
          series={[{ data: [4000, 3000, 5000, 600] }]}
          colors={['#95352e']}
          height={250}
        />
      </CustomTabPanel>
    </Box>
  )
}

export default HomeScreen