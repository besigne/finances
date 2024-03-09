export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export const types = ['Income', 'Spent', 'Investment', 'Debt']


export const tabs = [
  {
    label: "Car",
    panel: 0
  },
  {
    label: "Bank",
    panel: 1
  },
]

export const goals = [
  {
    data: [4440, 4450, 4320, 4550, 4400],
    value: 3500.34,
    paid: 650,
    name: "car",
    progress: 89,
    color: 'primary'
  },
  {
    data: [4440, 4450, 4320, 4550, 4400],
    value: 3500,
    paid: 650,
    name: "investment",
    progress: 57,
    color: 'secondary'
  },
]

const highlightScope = {
  // highlighted: 'series',
  faded: 'global',
} as const;


export const series = [
  {
    id: 'Income',
    label: 'Income',
    data: [
      2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707,
    ],
  },
  {
    id: 'Spent',
    label: 'Spent',
    data: [
      2362, 2254, 1962, 1336, 586, 1069, 2194, 1629, 2173, 2031, 1757, 862,
    ],
  },
  {
    id: 'Investment',
    label: 'Investment',
    data: [
      1145, 1214, 975, 2266, 1768, 2341, 747, 1282, 1780, 1766, 2115, 1720,
    ],
  },
  {
    id: 'Debt',
    label: 'Debt',
    data: [
      2361, 979, 2430, 1768, 1913, 2342, 1868, 1319, 1038, 2139, 1691, 935,
    ],
  }
].map((s) => ({ ...s, highlightScope }));