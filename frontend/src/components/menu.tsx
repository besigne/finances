'use client'
import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import Link from 'next/link'

const Menu: React.FC = () => {

    return(
      <Box style={{ position: 'relative', top: '7px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ButtonGroup>
          <Link href="/">
            <Button variant="outlined">Home</Button>
          </Link>
          <Link href="/v1/dashboard">
            <Button variant="outlined">Dashboard</Button>
          </Link>
          <Link href="/v1/goals">
            <Button variant="outlined">Goals</Button>
          </Link>
          <Link href="/v1/investment">
            <Button variant="outlined">Investment</Button>
          </Link>
          <Link href="/v1/debt">
            <Button variant="outlined">Debt</Button>
          </Link>
          <Link href="/v1/settings">
            <Button variant="outlined">Settings</Button>
          </Link>
        </ButtonGroup>
      </Box>

    )
}

export default Menu