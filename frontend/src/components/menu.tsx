'use client'
import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'

const Menu: React.FC = () => {

    return(
      <Box style={{ position: 'absolute', top: '7px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1}}>

        <ButtonGroup>
            <Button variant="text" onClick={() => console.log('Home')}>Home</Button>
            <Button variant="text" onClick={() => console.log('Dashboard')}>Dashboard</Button>
            <Button variant="text" onClick={() => console.log('Investment')}>Investment</Button>
            <Button variant="text" onClick={() => console.log('Debt')}>Debt</Button>
        </ButtonGroup>
      </Box>

    )
}

export default Menu