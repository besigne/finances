'use client'
import React from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { CustomTabPanel, allyProps } from './home/functions'
import { LineChart, PieChart } from '@mui/x-charts'
import { tabs, goals, months } from './enum/enums'

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
          <CustomTabPanel value={value} index={index}>
            <Box className={'row'}>
              <Box className={'row'} sx={{ backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
                <Box className={'col-lg-12 m-1 flex justify-content-center align-itens-center'}>
                  <Box className={'m-1 p-1'}>
                    <Typography variant="button">Valor pago: {goal.paid}</Typography>
                  </Box>
                  <Box className={'m-1 p-1'}>
                    <Typography variant="button">Valor total: {goal.value}</Typography>
                  </Box>
                  <Box className={'m-1 p-1'}>
                    <Typography variant="button">Progresso: {goal.progress}</Typography>
                  </Box>
                  </Box>
                  <LineChart
                    xAxis={[{ scaleType: 'band', data: months }]}
                    series={[
                      {
                        id: goal.name,
                        data: goal.data,
                      }
                    ]}
                    height={350}
                    colors={goal.colors}
                  />
              </Box>
            </Box>
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
  )
}

export default Goals