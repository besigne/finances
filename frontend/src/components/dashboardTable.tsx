'use client'
import React from 'react';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { columns, rows } from "./dashboard/functions"


const DashboardTable: React.FC = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <>
            <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
            </Box>
            <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">Account</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Value</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.account}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </Box>
        </>
    )
}

export default DashboardTable