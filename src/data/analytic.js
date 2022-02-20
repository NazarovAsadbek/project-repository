import {
  randomizeArray,
  sparklineData,

 } from '@/data/apexDataSeries'
export const spark3 = {
  series: [{
    name: 'series2',
    data: [25, 18, 20, 30, 40, 43],
  }],

  chartOptions: {
    chart: {
      type: 'line',
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
        opacity: 0.9,
    },
    yaxis: {
        min: 0,
    },
    colors: ['#7467ef'],
    },

}
export const spark4 = {
  series: [{
    name: 'series2',
    data: [25, 18, 20, 30, 40, 43],
  }],

  chartOptions: {
    chart: {
      type: 'line',
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: 'smooth',
      width: 1,
    },
    fill: {
        opacity: 0.9,
    },
    yaxis: {
        min: 0,
    },
    colors: ['#FF8A48'],
  },

}

export const analyticFour = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100],
  }],
  chartOptions: {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },

    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
}
