import {
 
  generateDayWiseTimeSeries,
  

 } from '@/data/apexDataSeries'

export const widgetChart = {
   
  series: [{
    name: 'Inflation',
    data: [25, 66, 41, 89, 63, 25]
  }],
  chartOptions: {
    colors: ['#7367F0'],
    chart: {
      
      toolbar: {
        show: false,
      },
      height: 150,
      type: 'bar',
    },
    
    plotOptions: {
      bar: {
        columnWidth: '20%',
        endingShape: 'rounded'
      }
    },
    
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    grid:{
      show: false,
    },
    xaxis: {
      
      labels: {
        show: false
      },
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: false,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }
    
    },
    
  },
} 
export const widgetChart2 = {
   
          series: [44, 55, 41],
  
          chartOptions: {
            chart: {
              type: 'donut',
              
            },
            dataLabels: {
              enabled: false
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      show: false,
                    },
                    value: {
                      show: true,
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                        return w.globals.seriesTotals.reduce((a, b) => {
                          return a + b
                        }, 0)
                      }
                    }
                  }
                }
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          
} 

export const widgetChart3 = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, ],
  chartOptions: {
  
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      colors:  "#7367F0",
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.1,
          opacityTo: 0.6,
          stops: [0, 90, 100]
        }
      
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    grid:{
      show: false,
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    xaxis: {
      
      labels: {
        show: false
      },
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  },
}
export const widgetChart4 = {
  series: [{
    name: 'series1',
    data: [20, 25, 20, 10, 20, 10, 20, 25, 10]
  }, ],
  chartOptions: {
  
    chart: {
      
      type: 'area',
      sparkline: {
        enabled: true
      },
    },
    
    fill: {
      opacity: 0.3,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
  },
    grid:{
      show: false,
    },
    xaxis: {
      crosshairs: {
          width: 1
        },
    },
    yaxis: {
        min: 0
    },
    colors: ['#7367F0'],
  },
}
export const widgetChart5 = {
  series: [{
    name: 'series1',
    data: [10, 25, 20, 10, 20, 10, 20, 25, 20]
  }, ],
  chartOptions: {
  
    chart: {
      
      type: 'area',
      sparkline: {
        enabled: true
      },
    },
    
    fill: {
      opacity: 0.3,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    grid:{
      show: false,
    },
    xaxis: {
      crosshairs: {
          width: 1
        },
    },
    yaxis: {
        min: 0
    },
    colors: ['#CB3066'],
  },
}
export const widgetChart6 = {
  series: [{
    name: 'series1',
    data: [20, 25, 20, 10, 20, 10, 20, 25, 10]
  }, ],
  chartOptions: {
  
    chart: {
      
      type: 'area',
      sparkline: {
        enabled: true
      },
    },
    
    fill: {
      opacity: 0.3,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    grid:{
      show: false,
    },
    xaxis: {
      crosshairs: {
          width: 1
        },
    },
    yaxis: {
        min: 0
    },
    colors: ['#28C76E'],
  },
}


export const widgetChart7 = {
  series: [{
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27]
  }, {
    name: 'PRODUCT C',
    data: [11, 17, 15, 15, 21, 14]
  }, {
    name: 'PRODUCT D',
    data: [21, 7, 25, 13, 22, 8]
  }],
  chartOptions: {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
        '01/05/2011 GMT', '01/06/2011 GMT'
      ],
    },
    legend: {
      show: false
    },
    fill: {
      opacity: 1
    }
  },
}

export const widgetChart8 = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chartOptions: {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    legend: {
      show: false
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  },
  
  
}

export const widgetChart9 = {
  series: [{
    name: 'series1',
    data: [10, 30, 20, 50, 20, 30, 10]
  }],
  chartOptions: {
  
    chart: {
      type: 'line',
      sparkline: {
        enabled: true
      },
      
    },
    

    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    
    // colors: ['#CB3066'],
  },
}
export const widgetChart10 = {
  series: [{
    name: 'series1',
    data: [10, 20, 40, 20, 20, 30, 10]
  }],
  chartOptions: {
  
    chart: {
      type: 'line',
      sparkline: {
        enabled: true
      },
      
    },
    

    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    
    colors: ['#CB3066'],
  },
}
export const widgetChart11 = {
  series: [{
    name: 'series1',
    data: [10, 20, 40, 20, 20, 30, 10]
  }],
  chartOptions: {
  
    chart: {
      type: 'line',
      sparkline: {
        enabled: true
      },
      
    },
    

    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    
    colors: ['#e97d23'],
  },
}
export const widgetChart12 = {
  series: [{
    name: 'series1',
    data: [10, 20, 40, 20, 20, 30, 10]
  }],
  chartOptions: {
  
    chart: {
      type: 'line',
      sparkline: {
        enabled: true
      },
      
    },
    

    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    
    colors: ['#28C76E'],
  },
}
export const widgetChart13 = {
  series: [{
    name: 'series1',
    data: [10, 20, 40, 20, 20, 30, 10]
  }],
  chartOptions: {
  
    chart: {
      type: 'line',
      sparkline: {
        enabled: true
      },
      
    },
    

    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 1
    },
    
    colors: ['#5578eb'],
  },
}

export const widgetChart14 = {
  series: [{
    name: 'South',
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'North',
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 20
    })
  },
  
  {
    name: 'Central',
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 15
    })
  },
  {
    name: 'West',
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 15
    })
  }
],
  chartOptions: {
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      },

      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min))
        }
      },
    },
    colors: ['#9e95f5', '#48da88', '#fc612c', '#a2c6f0'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    xaxis: {
      type: 'datetime'
    },
  },
}
