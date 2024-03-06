interface Column {
  id: 'description' | 'account' | 'type' | 'value' | 'date';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

export const columns: Column[] = [
  { id: 'description', label: 'Description', minWidth: 0 },
  { id: 'account', label: 'Account', minWidth: 100 },
  {
    id: 'type',
    label: 'Type',
    minWidth: 0,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'value',
    label: 'Value',
    minWidth: 0,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 0,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  description: string;
  account: string;
  type: string;
  value: number;
  date: string;
}

export function createData(
  description: string,
  account: string,
  type: string,
  value: number,
  date: string
): Data {
  return { description, account, type, value, date };
}

export const rows = [
  createData('India', 'IN', '1324171354', 3287263, '12312'),
  createData('China', 'CN', '1403500365', 9596961, '12312'),
  createData('Italy', 'IT', '60483973', 301340, '12312'),
  createData('United States', 'US', '327167434', 9833520, '12312'),
  createData('Canada', 'CA', '37602103', 9984670, '12312'),
  createData('Australia', 'AU', '25475400', 7692024, '12312'),
  createData('Germany', 'DE', '83019200', 357578, '12312'),
  createData('Ireland', 'IE', '4857000', 70273, '12312'),
  createData('Mexico', 'MX', '126577691', 1972550, '12312'),
  createData('Japan', 'JP', '126317000', 377973, '12312'),
  createData('France', 'FR', '67022000', 640679, '12312'),
  createData('United Kingdom', 'GB', '67545757', 242495, '12312'),
  createData('Russia', 'RU', '146793744', 17098246, '12312'),
  createData('Nigeria', 'NG', '200962417', 923768, '12312'),
  createData('Brazil', 'BR', '210147125', 8515767, '12312'),
];