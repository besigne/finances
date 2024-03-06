'use client'
import { Box, Tab, Tabs } from '@mui/material';
import { BarChart, LineChart } from '@mui/x-charts';
import React from 'react';
import { months } from './enum/enums';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

function allyProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Projection: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
            <Box className={'col-lg-12'} sx={{ backgroundColor: '#1e1e1e', borderRadius: '10px' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="line" {...allyProps(0)} />
                    <Tab label="bars" {...allyProps(1)} />
                </Tabs>

                <CustomTabPanel value={value} index={0}>
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
                </CustomTabPanel>
                
                <CustomTabPanel value={value} index={1}>
                    <BarChart
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
                </CustomTabPanel>
            </Box>
        </Box>
    )
}

export default Projection