import * as React from 'react';
import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
    { field: 'description', headerName: 'Description', sortable: false, flex: 5, disableColumnMenu: true },
    { field: 'account', headerName: 'Account', flex: 1, align:'center', headerAlign: 'center', disableColumnMenu: true },
    { field: 'type', headerName: 'Type', flex: 1, align:'center', headerAlign: 'center', disableColumnMenu: true },
    { field: 'value', headerName: 'Value', flex: 1, align:'center', headerAlign: 'center', disableColumnMenu: true },
    { field: 'date', headerName: 'Date', flex: 1, align:'center', headerAlign: 'center', disableColumnMenu: true },
];

export const rows = [
    {id: 1, description: 'adfgasdfas', account: 'inter', type: 'income', value: 103, date: '01/03/2024'},
    {id: 2, description: 'teste', account: 'inter', type: 'income', value: 1203, date: '01/03/2024'},
    {id: 3, description: 'teste', account: 'inter', type: 'income', value: 1203, date: '01/03/2024'},
    {id: 4, description: 'teste', account: 'inter', type: 'income', value: 1203, date: '01/03/2024'},
    {id: 5, description: 'asdfasdga', account: 'inter', type: 'income', value: 1203, date: '01/03/2024'},
    {id: 6, description: 'teste', account: 'inter', type: 'income', value: 1203, date: '01/03/2024'},
    {id: 7, description: 'teste', account: 'inter', type: 'income', value: 1203, date: '01/03/2024'},
    {id: 8, description: 'ljhklj', account: 'inter', type: 'income', value: 1203, date: '01/03/2024'},
    {id: 9, description: 'teste', account: 'inter', type: 'income', value: 1203, date: '01/03/2024'},
    {id: 10, description: 'teste', account: 'inter', type: 'income', value: 1203, date: '01/03/2024'},
    {id: 11, description: 'teste', account: 'inter', type: 'income', value: 1203, date: '01/03/2024'},
]