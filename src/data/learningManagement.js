export const welcomeProgressChart = {
    series: [76],
          chartOptions: {
            chart: {
              type: 'radialBar',
              offsetY: -20,
              sparkline: {
                enabled: true,
              },
            },
            grid: {
              padding: {
               left: 0,
               right: 0,
               bottom:10
              },
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    offsetY: 0,
                    hollow: {
                        margin: 0,
                        size: '60%',
                    },
                    dataLabels: {
                        showOn: 'always',
                        name: {
                            show: true,
                            fontSize: '13px',
                            fontWeight: '600',
                            offsetY: -5,
                            color: '#828D99',
                        },
                        value: {
                            color: '#304156',
                            fontSize: '24px',
                            fontWeight: '600',
                            offsetY: -40,
                            show: true,
                        },
                    },
                    track: {
                        background: '#eee',
                        strokeWidth: '100%',
                    },
                },
            },
            colors: ['#0081FF', '#eee'],
            stroke: {
              lineCap: 'round',
            },
            labels: ['Progress'],
            responsive: [{
              breakpoint: 767,
              options: {
                chart: {
                  offsetX: 0,
                  offsetY: 0,
                },
              },
          }],
          },
}

export const studyChart = {
  series: [
    {
      name: 'Angular',
      data: [50, 50, 80, 80, 80, 60, 70],
      type: 'bar',
      itemStyle: {
        barBorderRadius: [0, 0, 10, 10],
      },
      stack: 'one',
    },
    {
      name: 'React',
      data: [70, 80, 90, 100, 70, 80, 65],
      type: 'bar',
      stack: 'one',
    },
    {
      name: 'Javascript',
      data: [65, 80, 70, 100, 90, 70, 55],
      type: 'bar',
      itemStyle: {
        barBorderRadius: [10, 10, 0, 0],
      },
      stack: 'one',
    },
  ],
  chartOptions: {
    chart: {
      type: 'bar',
      
      stacked: true,
      toolbar: {
        show: false,
      },
      
    },
    // tooltip: {
    //   theme: 'dark'
    // },
    legend: {
      position: 'bottom',
      itemMargin: {
        horizontal: 10,
        vertical: 15
    },
  
  },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20px',
      },
    },
  

 

      dataLabels: {
        enabled: false,
      },
     
      colors: ['#0081ff', '#e95455', '#e97d23'],
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
        show: false,
      },
  },
}
