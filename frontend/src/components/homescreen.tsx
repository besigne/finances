'use client'
import React from 'react';
import { Box, Divider } from '@mui/material';

const HomeScreen: React.FC = () => {

    return (
        <Box style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box>
                <Box style={{display: 'flex'}}>
                    <Box>
                        Teste
                    </Box>
                    <Divider orientation="vertical" flexItem/>
                    <Box>
                        ajdfask
                    </Box>
                </Box>
                <Divider />
                <Box>
                    Outro
                </Box>
            </Box>
        </Box>
    )
}

export default HomeScreen