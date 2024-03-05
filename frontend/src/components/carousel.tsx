'use client'
import { Box, Collapse, Paper } from '@mui/material';
import { BarChart, LineChart, SparkLineChart } from '@mui/x-charts';
import React, { useEffect } from 'react';

interface Component {
    selected: number
}

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
        <svg>
            <Box
                component="polygon"
                points="0,100 50,00, 100,100"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
            />
        </svg>
    </Paper>
);

const Caurosel: React.FC<Component> = ({ selected }) => {
    const [key, setKey] = React.useState<number>(selected);
    const containerRef = React.useRef<HTMLElement>(null);

    useEffect(() => {
        setKey(selected)
    }, [selected])

    return (
        <Box sx={{ overflow: 'hidden' }} ref={containerRef}>
            {key == 1 ?
                <Box style={{ width: '350px'}}>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C', 'grupo D', 'grupo E'] }]}
                        series={[{ data: [4, 3, 5, 1, 3, 5, 7, 8] }]}
                        width={200}
                        height={200}
                    />
                </Box> : null}
            {key == 2 ?
                <Box style={{ width: '350px' }}>
                    now this is better
                </Box> : null}
            {key == 3 ?
                <Box style={{ width: '350px' }}>
                    third
                </Box> : null}
            {key == 4 ?
                <Box style={{ width: '350px' }}>
                    and forth slide
                </Box> : null}
        </Box>
    )
}

export default Caurosel