'use client'
import React from 'react'
import { Box, LinearProgress, Tab, Tabs, Typography } from '@mui/material'
import { CustomTabPanel, allyProps } from './home/functions'
import { tabs, goals } from './enum/enums'

const Goals: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  return (
    <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
      <Box className={'col-lg-12'}>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
          {tabs.map((tab, index) => (
            <Tab label={tab.label} key={index} {...allyProps(tab.panel)} />
          ))}
        </Tabs>

        {goals.map((goal, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <Box className={'row'} sx={{ backgroundColor: '#242424', borderRadius: '10px' }}>
              <Box className={'col-lg-12 row justify-content-center align-items-center'}>
                <Box className={'col-sm-6'}>
                  <LinearProgress variant="determinate" value={goal.progress} color="success" />
                </Box>
                <Box className={'col-sm-1'}>
                  <Typography variant='button'>{goal.progress}%</Typography>
                </Box>
                <Box className={'col-2'}>
                  <Typography variant='button'>Pago: R$ {goal.paid}</Typography>
                </Box>
                <Box className={'col-3'}>
                  <Typography variant='button'>valor total: R$ {goal.value}</Typography>
                </Box>
              </Box>
            </Box>
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
  )
}

export default Goals