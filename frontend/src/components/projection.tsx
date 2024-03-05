'use client'
import { Box } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import React from 'react';
import { months } from './enum/enums';

const Projection: React.FC = () => {
    return (
        <Box className="row m-2 p-2" sx={{backgroundColor:"#1e1e1e", borderRadius: '10px'}}>
            <Box className={'col-lg-12'} sx={{ backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
                    <LineChart
                        xAxis={[{ scaleType: 'band', data: months }]}
                        series={[
                            {
                                id: "Income",
                                label: "Income",
                                data: [4440, 4450, 4320, 4550, 4400],
                            },
                            {
                                id: "Spent",
                                label: "Spent",
                                data: [3420, 3840, 4120, 3120, 2570],
                            },
                        ]}
                        height={350}
                        colors={['#6aa84f', '#95352e']}
                    />
            </Box>
        </Box>
    )
}

export default Projection