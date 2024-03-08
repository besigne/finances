'use client'
import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { months } from './enum/enums';
import { CustomTabPanel, allyProps } from './home/functions';
import { AlignVerticalBottomOutlined, MoneyOffOutlined, SavingsOutlined } from '@mui/icons-material';

const Projection: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
      <Box className={'col-lg-12'}>

        <Tabs value={value} onChange={handleChange}>
          <Tab label="Balance" icon={<AlignVerticalBottomOutlined />} iconPosition='start' {...allyProps(0)} />
          <Tab label="Investments" icon={<SavingsOutlined />} iconPosition='start' {...allyProps(1)} />
          <Tab label="Debts" icon={<MoneyOffOutlined />} iconPosition='start' {...allyProps(2)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <LineChart
            xAxis={[{ scaleType: 'band', data: months }]}
            sx={{ backgroundColor: "#242424", borderRadius: '10px' }}
            series={[
              {
                id: "Income",
                label: "Income",
                data: [4440, 4450, 4320, 4550, 4400],
              },
              {
                id: "Spent",
                label: "Spent",
                data: [3420, 3840, 4120, 3120, 3570],
              },
            ]}
            height={350}
            colors={['#6aa84f', '#95352e']}
          />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <LineChart
            xAxis={[{ scaleType: 'band', data: months }]}
            sx={{ backgroundColor: "#242424", borderRadius: '10px' }}
            series={[
              {
                id: "Invested",
                data: [4440, 4450, 4320, 4550, 4400],
              }
            ]}
            height={350}
            colors={['#6aa84f']}
          />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <LineChart
            xAxis={[{ scaleType: 'band', data: months }]}
            sx={{ backgroundColor: "#242424", borderRadius: '10px' }}
            series={[
              {
                id: "Spent",
                data: [3420, 3840, 4120, 3120, 3570],
              },
            ]}
            height={350}
            colors={['#95352e']}
          />
        </CustomTabPanel>
      </Box>
    </Box>
  )
}

export default Projection