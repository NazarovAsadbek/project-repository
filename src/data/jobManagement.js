export const jmPieChartOne = {
  series: [70],
  chartOptions: {
    chart: {
      height: 150,
      type: "radialBar"
    },
    
   
    colors:["#5e5ce6"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%"
        },
       
        dataLabels: {
          show: true,
          name: {
            offsetY: 0,
            show: false,
            color: "#888",
            fontSize: "13px"
          },
          value: {
            offsetY: 10,
            color: "#828d99",
            fontSize: "20px",
            show: true,
            fontWeight: 700,
          }
        }
      }
    },
  
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"]
  }
}
export const jmPieChartTwo = {
  series: [45],
  chartOptions: {
    chart: {
      height: 150,
      type: "radialBar"
    },
    
   
    colors:["#FF8A48"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%"
        },
       
        dataLabels: {
          show: true,
          name: {
            offsetY: 0,
            show: false,
            color: "#888",
            fontSize: "13px"
          },
          value: {
            offsetY: 10,
            color: "#828d99",
            fontSize: "20px",
            show: true,
            fontWeight: 700,
          }
        }
      }
    },
  
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"]
  }
}

export const jmBarChart = {
  series: [{
    name: 'Manager',
    data: [44, 55, 41, 67, 22, 43],
  }, {
    name: 'Marketer',
    data: [13, 23, 20, 8, 13, 27],
  }, {
    name: 'Developer',
    data: [11, 17, 15, 15, 21, 14],
  }],
  chartOptions: {
    colors: ['#5e5ce6', '#ff5252', '#FF8A48'],
    chart: {
      type: 'bar',
      
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: 0,
          offsetY: 0,
        },
      },
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '10px',
      },
    },
    xaxis: {
      
      axisBorder: {
        show: false,
      },
      categories: ['Sat', 'Sun', 'Mon', 'Tue',
        'Wed', 'Thur'
      ],
    },
    yaxis: {
      show: false,
    },
    grid: {
      borderColor: '#fff',
      show: false,
    },
    legend: {
      horizontalAlign: 'start',
      position: 'top',
      offsetY: 0,
      markers: {
        radius: 50,
      },
    },
    fill: {
      opacity: 1,
    },
  },
}

export const jmLineChart = {
  series: [
    {
      name: 'Applications',
      data: [14, 29, 18, 20, 20, 40, 20, 30, 24, 18, 30, 15],
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#5d78ff', '#fbaf0f'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
  
    grid: {
      borderColor: 'transparent',
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0,
      },
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: [
        '12am',
        '1am',
        '2am',
        '3am',
        '4am',
        '5am',
        '6am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
      ],
    
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: '',
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  },
}

export const jmDonutChart = {
  series: [74, 26],
  chartOptions: {
    labels: ['Male', 'Female'],
    legend: {
      show: false,
    },
    colors: ['#FF8A48', '#5d78ff'],
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
              fontSize: '15px',
              fontWeight: 700,
              offsetY: 5,
            },
          },
          size: '70%',
        },
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  },
}
