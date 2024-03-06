import React from 'react';
import Menu from '@/components/menu';
import { Box } from '@mui/material';
import DashboardTable from '@/components/dashboardTable';


export default function Dashboard() {
    return (
        <>
            <Menu />
            <Box className="container">
                <DashboardTable />
            </Box>
        </>
    )
}