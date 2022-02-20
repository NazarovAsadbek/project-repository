// chart 1
export const gradientLineChart = {
  series: [
    {
      name: 'Income',
      data: [14, 29, 18, 20, 20, 40, 20],
    },
    {
      name: 'Outcome',
      data: [12, 20, 14, 25, 17, 35, 30],
    },
  ],
  chartOptions: {
    chart: {
      type: 'line',
      height: 350,
   
      toolbar: {
        show: false,
      },
    },
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 1,
    },
    colors: ['#5d78ff', '#fbaf0f'],
    stroke: {
      width: 7,
      curve: 'smooth',
    },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: '',
      },
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
    markers: {
      size: 5,
      hover: {
        size: 7,
      },
    },
    grid: {
      
      borderColor: 'transparent',
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0,
      },
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

// start::salesByCountries
export const salesByCountries = {
  chart: {
    width: '100%',
  },
  series: [44, 55, 41, 17, 15],
        chartOptions: {
          legend: {
            position: 'bottom',
        },
        labels: ['USA', 'Brazil', 'India', 'Australia', 'Bangladesh'],
        colors: ['#5e5ce6', '#ff5252', '#ff8a48',"#304156", '#09b66d'],
        grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 20,
          left: 0
        }
      }, 
        },
}

// start::visitorsAnalytic
export const visitorsAnalytic = {
  series: [
    {
      name: 'Organic',
      data: [11, 100, 80, 20, 51, 42, 109],
    },
    {
      name: 'Direct',
      data: [31, 90, 32, 40, 90, 34, 52],
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        startingShape: 'flat',
        endingShape: 'rounded',
        columnWidth: '40%',
      },
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,

      offsetY: -10,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    grid: {
      borderColor: 'transparent',
      row: {
        opacity: 0,
      },
    },
    colors: ['#5d78ff', '#fbaf0f', '#1dc9b7', '#fd397a'],
    xaxis: {
      categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

  },

}
