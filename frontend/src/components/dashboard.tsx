'use client'
import React, { useEffect } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, OutlinedInput, Select, SelectChangeEvent, Slider, Theme, Typography, useTheme } from "@mui/material"
import { months, types, series } from './enum/enums';
import { BarChart } from '@mui/x-charts';
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import { columns, rows } from './dashboard/functions';
import { Money } from '@mui/icons-material';

interface SelectedSeries {
  id: string
  label: string
  data: number[]
}

const DashboardTable: React.FC = () => {
  const [newOpen, setNewOpen] = React.useState(false);
  const [selectedMonths, setSelectedMonths] = React.useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);
  const [selectedSeries, setSelectedSeries] = React.useState<SelectedSeries[]>([]);
  const [selectedItems, setSelectedItems] = React.useState<string[]>(['']);


  const handleChangeMonth = (event: SelectChangeEvent<typeof selectedMonths>) => {
    const {
      target: { value },
    } = event;
    setSelectedMonths(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeTypes = (event: SelectChangeEvent<typeof selectedMonths>) => {
    const {
      target: { value },
    } = event;
    setSelectedTypes(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleNewClose = () => {
    setNewOpen(!newOpen)
  }

  useEffect(() => {
  }, [])

  return (
    <>
      <Modal
        open={newOpen}
        onClose={handleNewClose}
      >
        <Box>hello</Box>
      </Modal>
      <Box className="row m-4 justify-content-center align-items-center" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
        <FormControl variant='standard' className="col-2 m-1 p-2">

          <InputLabel className="ml-4 mt-2">Type</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            multiple
            label="Type"
            value={selectedTypes}
            onChange={handleChangeTypes}
          >
            {types.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant='standard' className="col-2 m-1 p-2">
          <InputLabel className="ml-4 mt-2">Month</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={selectedMonths}
            onChange={handleChangeMonth}
          >
            {months.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
        <BarChart
          height={350}
          xAxis={[{ scaleType: 'band', data: selectedItems }]}
          series={selectedSeries}
        />
      </Box>
      <Box className="row m-4 p-2" sx={{ backgroundColor: "#1e1e1e", borderRadius: '10px' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          onCellDoubleClick={(e) => console.log(e)}
          showCellVerticalBorder={false}
          slots={{
            footer: () => (
              <>
                <Box className="d-flex align-items-center">
                  <Box className="col p-2">
                    <Button
                      onClick={handleNewClose}
                      color="success"
                      startIcon={<Money />}>
                      Criar
                    </Button>
                  </Box>
                  <GridPagination className="col" />
                </Box>
              </>
            )
          }}
        />
      </Box>
    </>
  )
}

export default DashboardTable