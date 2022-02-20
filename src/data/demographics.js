const primary_color = [
  '#7566b5',
  '#62549c',
  '#51457F',
  '#7d6cbb',
  '#A7A1BF',
  '#8877bd',
  '#9181bd',
  '#6957af',

  // "#544885",
  '#eee',
]

const secondary_color = [
  '#FFC107',
  '#E8B007',
  '#FFD454',
  '#806A2A',
  '#CC9B06',
  '#D19E06',
  '#ECC44E',
  // "#A7A1BF",
  '#B58905',
  '#eee',
]

const cyan_color = [
  '#9C27B0',
  '#CD33E8',
  '#DB7BEC',
  '#613669',
  '#A028B5',
  '#EAC5F0',
  '#AD61BA',
  // "#A7A1BF",
  '#EAC5F0',
  '#eee',
]
export const wacther_ots_chart = {
  legend: {
    borderRadius: 0,
    orient: 'horizontal',
    bottom: 10,
    data: ['OTS', 'Watchers'],
  },
  grid: {
    left: '8px',
    right: '8px',
    bottom: '40px',
    containLabel: true,
  },
  color: primary_color,
  tooltip: {
    show: true,

    backgroundColor: 'rgba(0, 0, 0, .8)',
  },

  xAxis: [
    {
      type: 'category',
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
      },

      min: 0,
      max: 70000,
      interval: 10000,
    },
  ],

  series: [
    {
      name: 'OTS',
      data: [60000, 50000, 40000, 30000, 20000, 60000, 50000, 40000],
      //  label: {show: false, color: "#cca52e"},
      type: 'bar',
      barGap: 0,
      //  color: "#cca52e",
      smooth: true,
    },
    {
      name: 'Watchers',
      data: [30000, 40000, 50000, 60000, 40000, 30000, 25000, 10000],
      //  label: {show: false, color: "#ffc107"},
      type: 'bar',
      //  color: "#ffc107",
      smooth: true,
    },
  ],
}

export const dwell_attentionChart = {
  legend: {
    borderRadius: 0,
    orient: 'horizontal',
    bottom: 10,
    data: ['Dwell Time', 'Attention Time'],
  },
  grid: {
    left: '8px',
    right: '8px',
    bottom: '40px',
    containLabel: true,
  },
  tooltip: {
    show: true,

    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  color: secondary_color,

  xAxis: [
    {
      type: 'category',
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Seconds',
      axisLabel: {
        formatter: '{value}s',
      },

      min: 0,
      max: 500000,
      interval: 50000,
    },
  ],

  series: [
    {
      name: 'Dwell Time',
      data: [400000, 500000, 400000, 300000, 200000, 300000, 500000, 400000],
      // label: {show: false, color: "#cca52e"},
      type: 'bar',
      barGap: 0,
      // color: "#cca52e",
      smooth: true,
    },
    {
      name: 'Attention Time',
      data: [300000, 400000, 500000, 350000, 400000, 300000, 250000, 100000],
      // label: {show: false, color: "#ffc107"},
      type: 'bar',
      // color: "#ffc107",
      smooth: true,
    },
  ],
}
export const gender_split_per_location = {
  tooltip: {
    trigger: 'axis',

    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  color: primary_color,
  legend: {
    bottom: 0,
    data: ['Male', 'Female', 'Unknown'],
  },
  grid: {
    left: '15%',
    right: '4%',
    bottom: '15%',
  },
  xAxis: {
    type: 'category',
    data: [
      'ATRIUM HDD',
      'ATRIUM 10.1 ',
      'ATRIUM 10.4',
      'ATRIUM 10.5',
      'ATRIUM 10.2',
    ],
  },
  yAxis: {
    type: 'value',
    name: 'Persons',
    min: 0,
    max: 14000,
    interval: 2000,
    axisLabel: {
      formatter: '{value}',
    },
  },
  series: [
    {
      name: 'Male',
      type: 'bar',
      stack: 'Total',

      data: [9200, 6020, 7010, 8340, 6900],
    },
    {
      name: 'Female',
      type: 'bar',
      stack: 'Total',

      data: [2000, 3200, 4000, 3400, 2900],
    },
    {
      name: 'Unknown',
      type: 'bar',
      stack: 'Total',

      data: [220, 182, 191, 234, 290],
    },
  ],
}

export const global_wacther_ots_chart = {
  legend: {
    borderRadius: 0,
    orient: 'horizontal',
    bottom: 10,
    data: ['OTS', 'Watchers'],
  },
  grid: {
    left: '8px',
    right: '8px',
    bottom: '40px',
    containLabel: true,
  },
  color: primary_color,
  tooltip: {
    show: true,

    backgroundColor: 'rgba(0, 0, 0, .8)',
  },

  xAxis: [
    {
      type: 'category',
    },
  ],

  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
      },

      min: 0,
      max: 70000,
      interval: 10000,
    },
  ],

  series: [
    {
      name: 'OTS',
      data: [60000, 50000, 40000, 30000, 20000, 60000, 50000, 40000],
      //  label: {show: false, color: "#cca52e"},
      type: 'bar',
      barGap: 0,
      //  color: "#cca52e",
      smooth: true,
    },
    {
      name: 'Watchers',
      data: [30000, 40000, 50000, 60000, 40000, 30000, 25000, 10000],
      //  label: {show: false, color: "#ffc107"},
      type: 'bar',
      //  color: "#ffc107",
      smooth: true,
    },
  ],
}

export const global_dwell_attentionChart = {
  legend: {
    borderRadius: 0,
    orient: 'horizontal',
    bottom: 10,
    data: ['Dwell Time', 'Attention Time'],
  },
  grid: {
    left: '8px',
    right: '8px',
    bottom: '40px',
    containLabel: true,
  },
  tooltip: {
    show: true,

    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  color: secondary_color,

  xAxis: [
    {
      type: 'category',
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Seconds',
      axisLabel: {
        formatter: '{value}s',
      },

      min: 0,
      max: 500000,
      interval: 50000,
    },
  ],

  series: [
    {
      name: 'Dwell Time',
      data: [400000, 500000, 400000, 300000, 200000, 300000, 500000, 400000],
      // label: {show: false, color: "#cca52e"},
      type: 'bar',
      barGap: 0,
      // color: "#cca52e",
      smooth: true,
    },
    {
      name: 'Attention Time',
      data: [300000, 400000, 500000, 350000, 400000, 300000, 250000, 100000],
      // label: {show: false, color: "#ffc107"},
      type: 'bar',
      // color: "#ffc107",
      smooth: true,
    },
  ],
}
export const global_gender_split_per_location = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  color: primary_color,
  legend: {
    bottom: 0,
    data: ['Male', 'Female', 'Unknown'],
  },
  grid: {
    left: '15%',
    right: '4%',
    bottom: '15%',
  },
  xAxis: {
    type: 'category',
    data: [
      'ATRIUM HDD',
      'ATRIUM 10.1 ',
      'ATRIUM 10.4',
      'ATRIUM 10.5',
      'ATRIUM 10.2',
    ],
  },
  yAxis: {
    type: 'value',
    name: 'Persons',
    min: 0,
    max: 14000,
    interval: 2000,
    axisLabel: {
      formatter: '{value}',
    },
  },
  series: [
    {
      name: 'Male',
      type: 'bar',
      stack: 'Total',

      data: [9200, 6020, 7010, 8340, 6900],
    },
    {
      name: 'Female',
      type: 'bar',
      stack: 'Total',

      data: [2000, 3200, 4000, 3400, 2900],
    },
    {
      name: 'Unknown',
      type: 'bar',
      stack: 'Total',

      data: [220, 182, 191, 234, 290],
    },
  ],
}
