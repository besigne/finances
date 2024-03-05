'use client'
import { Box, Paper } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import React, { useEffect } from 'react';
import { months } from './enum/enums';

interface Component {
    selected: number
}


const Caurosel: React.FC<Component> = ({ selected }) => {
    const [key, setKey] = React.useState<number>(selected);

    useEffect(() => {
        setKey(selected)
    }, [selected])

    return (
        <Box className={'col-md-8 ms-auto p-3'} sx={{ backgroundColor: '#242424', borderRadius: '10px' }}>
                {key == 1 ?
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: months }]}
                        series={[{ data: [4000, 3000, 5000, 600], label: "Income" }]}
                        colors={['#6aa84f']}
                        height={250}
                    />
                    : null}
                {key == 2 ?
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: months }]}
                        series={[{ data: [4000, 3000, 5000, 600], label: "Spent" }]}
                        colors={['#95352e']}
                        height={250}
                    />
                    : null}
                {key == 3 ?
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: months }]}
                        series={[{ data: [4000, 3000, 5000, 600], label: "Invested" }]}
                        colors={['#6aa84f']}
                        height={250}
                        />
                    : null}
                {key == 4 ?
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: months }]}
                        series={[{ data: [4000, 3000, 5000, 600], label: "Debt" }]}
                        colors={['#95352e']}
                        height={250}
                    />
                    : null}
        </Box>
    )
}

export default Caurosel