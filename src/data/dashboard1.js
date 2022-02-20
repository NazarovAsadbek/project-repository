var dark_heading = '#c2c6dc'
// start::wacther_ots_chart

const wacther_ots_chart_data = []
export const wacther_ots_chart = {
  legend: {
    borderRadius: 0,
    orient: 'horizontal',
    x: 'right',
    data: ['Watcher', 'OTS'],
  },

  grid: {
    left: '8px',
    right: '8px',
    bottom: '0',
    containLabel: true,
  },
  tooltip: {
    show: true,

    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  color: ['#bcbbdd', '#7569b3'],

  xAxis: [
    {
      type: 'category',

      axisTick: {
        alignWithLabel: true,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: dark_heading,
      },
      axisLine: {
        show: true,
        color: dark_heading,

        lineStyle: {
          color: dark_heading,
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',

      axisLabel: {
        color: dark_heading,
        formatter: '${value}',
      },
      axisLine: {
        show: false,
        color: dark_heading,

        lineStyle: {
          color: dark_heading,
        },
      },
      min: 0,
      max: 500,
      interval: 100,

      splitLine: {
        show: true,
        interval: 'auto',
      },
    },
  ],

  series: [
    // {
    //   data: [
    //     {value: 260, name: "Watcher"},
    //     {value: 30, name: "OTS"}
    //   ],
    //   type: "bar"
    // }
    {
      name: 'Watcher',
      data: [260],
      // label: {show: true, color: "#0168c1"},
      type: 'bar',
      barGap: 0,

      smooth: true,
    },
    {
      name: 'OTS',
      data: [370],
      // label: {show: false, color: "#639"},
      type: 'bar',

      smooth: true,
    },
  ],
}
// start::Dwell & attention chart
export const dwell_attentionChart = {
  legend: {
    borderRadius: 0,
    orient: 'horizontal',
    x: 'right',
    data: ['Attention', 'Dwell'],
  },
  grid: {
    left: '8px',
    right: '8px',
    bottom: '20px',
    containLabel: true,
  },
  tooltip: {
    show: true,

    backgroundColor: 'rgba(0, 0, 0, .8)',
  },

  xAxis: [
    {
      type: 'category',

      axisTick: {
        alignWithLabel: true,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: dark_heading,
      },
      axisLine: {
        show: true,
        color: dark_heading,

        lineStyle: {
          color: dark_heading,
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: dark_heading,
        formatter: '{value}',
      },
      axisLine: {
        show: false,
        color: dark_heading,

        lineStyle: {
          color: dark_heading,
        },
      },
      min: 0,
      max: 5000,
      interval: 1000,

      splitLine: {
        show: true,
        interval: 'auto',
      },
    },
  ],

  series: [
    {
      name: 'Attention',
      data: [2600, 1000, 2000, 500, 2600, 1000, 2000, 500],
      label: { show: false, color: '#cca52e' },
      type: 'bar',
      barGap: 0,
      color: '#cca52e',
      smooth: true,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: -2,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },
    {
      name: 'Dwell',
      data: [3700, 3000, 2500, 1000, 3700, 3000, 2500, 1000],
      label: { show: false, color: '#ffc107' },
      type: 'bar',
      color: '#ffc107',
      smooth: true,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: -2,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },
  ],
}

// start::dwell_attention_line_chart
export const dwell_attention_line_chart = {
  tooltip: {
    trigger: 'axis',

    axisPointer: {
      animation: true,
    },
  },
  grid: {
    left: '8%',
    top: '4%',
    right: '5%',
    bottom: '8%',
  },
  xAxis: {
    show: true,
    type: 'category',
    boundaryGap: false,
    data: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisLabel: {
      formatter: '{value}',
      color: dark_heading,
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
    },
    axisLine: {
      lineStyle: {
        color: dark_heading,
        width: 1,
      },
    },
    axisTick: {
      lineStyle: {
        color: dark_heading,
        width: 1,
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: dark_heading,
        width: 1,
      },
    },
  },
  yAxis: {
    show: true,
    type: 'value',
    min: 0,
    max: 200,
    interval: 50,
    axisLabel: {
      formatter: '{value}',
      color: dark_heading,
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
    },
    axisLine: {
      lineStyle: {
        color: dark_heading,
        width: 1,
      },
    },
    axisTick: {
      lineStyle: {
        color: dark_heading,
        width: 1,
      },
    },
    splitLine: {
      lineStyle: {
        color: '#ddd',
        width: 1,
        opacity: 0.5,
      },
    },
  },
  series: [
    {
      name: 'Dwell',
      type: 'line',
      smooth: true,
      data: [120, 135, 95, 115, 95, 126, 93, 145, 115, 105, 115, 125],
      symbolSize: 8,
      showSymbol: false,
      lineStyle: {
        // width: 1,
        color: 'rgba(102, 51, 153, 0.68)',
      },
      itemStyle: {
        color: '#663399',
      },
      areaStyle: {
        color: 'rgba(102, 51, 153, .15)',
        origin: 'start',
      },
    },
    {
      name: 'Attention',

      type: 'line',
      smooth: true,
      data: [160, 115, 130, 105, 135, 126, 100, 125, 105, 130, 135, 145],
      symbolSize: 8,
      showSymbol: false,
      areaStyle: {
        color: 'rgba(255, 152, 0, 0.15)',
        origin: 'start',
      },
      lineStyle: {
        // width: 1,
        color: 'rgba(255, 152, 0, .6)',
      },
      itemStyle: {
        color: 'rgba(255, 152, 0, 1)',
      },
    },
  ],
}

export const echart1 = {
  tooltip: {
    trigger: 'axis',

    axisPointer: {
      animation: true,
    },
  },
  grid: {
    left: '0%',
    top: '0%',
    right: '0%',
    bottom: '0%',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [],
    axisLabel: {
      formatter: '{value}',
      color: dark_heading,
      fontSize: 0,
      fontStyle: 'normal',
      fontWeight: 400,
    },
    axisLine: {
      lineStyle: {
        color: '',
        width: 0,
      },
    },
    axisTick: {
      lineStyle: {
        color: '',
        width: 0,
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: '',
        width: 0,
      },
    },
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 100,
    interval: 50,
    axisLabel: {
      formatter: '',
      color: dark_heading,
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
    },
    axisLine: {
      lineStyle: {
        color: '',
        width: 0,
      },
    },
    axisTick: {
      lineStyle: {
        color: '',
        width: 0,
      },
    },
    splitLine: {
      lineStyle: {
        color: '',
        width: 0,
        opacity: 0.5,
      },
    },
  },
  series: [
    {
      name: 'Visit',
      type: 'line',
      smooth: true,
      data: [30, 40, 20, 50, 40, 80, 90],
      symbolSize: 8,
      showSymbol: false,
      lineStyle: {
        color: dark_heading,
        opacity: 1,
        width: 1.5,
      },
      itemStyle: {
        show: false,
        color: '#ff5721',
        borderColor: '#ff5721',
        borderWidth: 1.5,
      },
      areaStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(102, 51, 153, .2)',
              },
              {
                offset: 0.3,
                color: 'rgba(102, 51, 153, .2)',
              },
              {
                offset: 1,
                color: 'rgba(102, 51, 153, .2)',
              },
            ],
          },
        },
      },
    },
  ],
}
export const echart2 = {
  tooltip: {
    trigger: 'axis',

    axisPointer: {
      animation: true,
    },
  },
  grid: {
    left: '0%',
    top: '0%',
    right: '0%',
    bottom: '0%',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [],
    axisLabel: {
      formatter: '{value}',
      color: '#666',
      fontSize: 0,
      fontStyle: 'normal',
      fontWeight: 400,
    },
    axisLine: {
      lineStyle: {
        color: '',
        width: 0,
      },
    },
    axisTick: {
      lineStyle: {
        color: '',
        width: 0,
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: '',
        width: 0,
      },
    },
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 100,
    interval: 50,
    axisLabel: {
      formatter: '',
      color: '#666',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 400,
    },
    axisLine: {
      lineStyle: {
        color: '',
        width: 0,
      },
    },
    axisTick: {
      lineStyle: {
        color: '',
        width: 0,
      },
    },
    splitLine: {
      lineStyle: {
        color: '',
        width: 0,
        opacity: 0.5,
      },
    },
  },
  series: [
    {
      name: 'Visit',
      type: 'line',
      smooth: true,
      data: [30, 10, 40, 10, 40, 20, 90],
      symbolSize: 8,
      showSymbol: false,
      lineStyle: {
        color: '#FFC107',
        opacity: 1,
        width: 1.5,
      },
      itemStyle: {
        show: false,
        color: '#ff5721',
        borderColor: '#ff5721',
        borderWidth: 1.5,
      },
      areaStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(255, 193, 7, 0.2)',
              },
              {
                offset: 0.3,
                color: 'rgba(255, 193, 7, 0.2)',
              },
              {
                offset: 1,
                color: 'rgba(255, 193, 7, 0.2)',
              },
            ],
          },
        },
      },
    },
  ],
}
export const echart3 = {
  tooltip: {
    show: true,
    // trigger: "axis",
    axisPointer: {
      type: 'line',
      animation: true,
    },
  },
  grid: {
    top: '10%',
    left: '0',
    right: '0',
    bottom: '0',
  },
  xAxis: {
    type: 'category',
    data: [],
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: true,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
    },
  },
  label: { show: false, color: '#212121' },
  series: [
    {
      data: [
        40,
        80,
        20,
        90,
        30,
        80,
        40,
        90,
        20,
        80,
        30,
        45,
        50,
        110,
        90,
        145,
        120,
        135,
        120,
        140,
      ],
      type: 'line',
      showSymbol: true,
      smooth: true,
      color: '#639',
      lineStyle: {
        color: 'rgba(102, 51, 153, 0.8)',
        opacity: 1,
        width: 3,
      },
    },
  ],
}
