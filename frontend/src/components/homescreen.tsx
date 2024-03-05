'use client'
import React from 'react';
import { Box, FormControlLabel, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Slide, Switch } from '@mui/material';
import { SavingsOutlined, MoneyOffOutlined, AlignVerticalTopOutlined, AlignVerticalBottomOutlined } from '@mui/icons-material';
import Caurosel from './carousel';

const HomeScreen: React.FC = () => {
    const [selected, setselected] = React.useState(1);
    const containerRef = React.useRef<HTMLElement>(null);

    const handleChange = (event: number) => {
        setselected(event);
      };
    
    return (
        <Box className="d-flex justify-content-center align-items-center">
            <Box className="p-4 flex-column">
                <List
                component={'nav'}
                subheader={
                    <ListSubheader
                        component="div"
                        style={{backgroundColor: 'transparent', color: 'white'}}
                        id="nested-list-subheader">
                        General View
                    </ListSubheader>
                }
                >
                <ListItemButton onClick={() =>handleChange(1)}>
                    <ListItemIcon>
                        <AlignVerticalBottomOutlined sx={{color: 'white'}} />
                    </ListItemIcon>
                    <ListItemText primary="Average monthly income" />    
                </ListItemButton>  

                <ListItemButton onClick={() =>handleChange(2)}>
                    <ListItemIcon>
                        <AlignVerticalTopOutlined sx={{color: 'white'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Average monthly speding" />    
                </ListItemButton>

                <ListItemButton onClick={() =>handleChange(3)}>
                    <ListItemIcon>
                        <SavingsOutlined sx={{color: 'white'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Investments" />    
                </ListItemButton>

                <ListItemButton onClick={() =>handleChange(4)}>
                    <ListItemIcon>
                        <MoneyOffOutlined sx={{color: 'white'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Debts" />    
                </ListItemButton>

                </List>
            </Box>
            <Box className="p-8 justify-content-left align-items-center">
               <Caurosel selected={selected} />
            </Box>
        </Box>
    )
}

export default HomeScreen