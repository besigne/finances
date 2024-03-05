'use client'
import React from 'react';
import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { SavingsOutlined, MoneyOffOutlined, AlignVerticalTopOutlined, AlignVerticalBottomOutlined } from '@mui/icons-material';
import Caurosel from './carousel';

const HomeScreen: React.FC = () => {
    const [selected, setselected] = React.useState(1);

    const handleChange = (event: number) => {
        setselected(event);
      };
    
    return (
        <Box className="row m-2 p-2" sx={{backgroundColor:"#1e1e1e", borderRadius: '10px'}}>
            <Box className={"col-md-3 ms-auto p-3"} sx={{backgroundColor:"#242424", borderRadius: '10px'}}>
                <Typography>
                    General View
                </Typography>

                <List component={'nav'}>

                    <ListItemButton onClick={() =>handleChange(1)}>
                        <ListItemIcon>
                            <AlignVerticalBottomOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Average monthly income" />
                    </ListItemButton>  

                    <ListItemButton onClick={() =>handleChange(2)}>
                        <ListItemIcon>
                            <AlignVerticalTopOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Average monthly speding" />    
                    </ListItemButton>

                    <ListItemButton onClick={() =>handleChange(3)}>
                        <ListItemIcon>
                            <SavingsOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Investments" />    
                    </ListItemButton>

                    <ListItemButton onClick={() =>handleChange(4)}>
                        <ListItemIcon>
                            <MoneyOffOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Debts" />    
                    </ListItemButton>

                </List>
            </Box>
            <Divider className={"col-md-1"} />
                <Caurosel selected={selected} />
        </Box>
    )
}

export default HomeScreen