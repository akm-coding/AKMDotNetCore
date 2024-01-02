// resolve small chart

new Chartist.Bar('.small-chart', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
    series: [
        [13.6, 11, 4, 8, 4, 15, 18, 10, 8, 10, 8, 4, 6, 11],
        [4, 12, 14, 8, 13.6, 6, 8, 13.8, 11, 13.8, 11, 12, 14, 14]
    ]
}, {
    plugins: [
        Chartist.plugins.tooltip({
            appendToBody: false,
            className: "ct-tooltip"
        })
    ],
    stackBars: true,
    low: 0,
    offset: 0,
    chartPadding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    axisX: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function(value) {
            return (value / 1000) + 'k';
        }
    }
}).on('draw', function(data) {
    if(data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 3px'
        });
    }
});

// complain chart
var options = {
            chart: {
                height: 282,
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
            series: [{
                name: 'series1',
                data: [50, 109, 42, 51, 28, 40, 31]
            }, {
                name: 'series2',
                data: [41, 52, 34, 32, 45, 32, 11]
            }],
            legend: {
                show: false,
            },
            grid: {
                borderColor: 'transparent',
                padding: {
                    left: -10,
                    right: 0,
                    bottom: -20,
                    top: -35
                }
            },
            colors: [XoloAdminConfig.primary, '#fd2e64'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 0.9,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.40,
                    stops: [20, 100, 100, 100]
                  },
            },
            xaxis: {
                low: 0,
                offsetX: 0,
                offsetY: 0,
                type: 'datetime',
                categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
                axisBorder: {
                    low: 0,
                    offsetX: 0,
                    show: false,
                },
                labels: {
                    low: 0,
                    offsetX: 0,
                    offsetY: 0,
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            grid: {
                borderColor: 'transparent',
                padding: {
                    left: -10,
                    right: 0,
                    bottom: -15,
                    top: -40
                }
            },
            yaxis: {
                low: 0,
                offsetX: 0,
                offsetY: 0,
                labels: {
                    low: 0,
                    offsetX: 0,
                    show: false,
                },
                axisBorder: {
                    low: 0,
                    offsetX: 0,
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#complain"),
            options
        );
        chart.render();
// mixed chart
var options1 = {
      chart: {
        height: 395,
        type: 'area',
        stacked: true,
        toolbar: {
            show: false
        },
        events: {
          selection: function(chart, e) {
            console.log(new Date(e.xaxis.min) )
          }
        },

      },
      colors: ['#f23c96', XoloAdminConfig.primary],
      dataLabels: {
          enabled: false
      },
      grid: {
          borderColor: 'transparent',
          padding: {
              left: -10,
              right: 0,
              bottom: -15,
              top: -40
          }
      },
      stroke: {
        curve: 'straight',
        width: [ 2 ]
      },
      series: [{
          name: 'South',
          data: [
            [1351202400000,37.30],
            [1351338000000,36.60],
            [1351424400000,39.50],
            [1351710800000,32.55],
            [1351870000000,32.55],
            [1352056400000,35.60],
            [1352342800000,30.45],
            [1352629200000,39.60],
            [1352815600000,37.50],
            [1352924000000,38.30],
            [1353061200000,36.20],
            [1353134000000,37.25],
            [1353220400000,37.22],
            [1353479600000,33.30],
            [1353566000000,34.23],
            [1353632400000,32.30],
            [1353757200000,34.23],
            [1353857200000,36.30],
            [1353957200000,38.28],
            [1354021500000,37.10],
            [1354175600000,39.28],
            [1354362000000,36.22],
            [1354548400000,36.22],
            [1354634800000,38.55],
            [1354794000000,36.22],
            [1354980400000,40.50],
            [1355166800000,40.80],
            [1355253200000,39.50],
            [1355439600000,37.45],
            [1355698800000,37.51],
            [1355885200000,33.40],
            [1355985200000,36.40],
            [1356085200000,39.40],
        ]
        },
        {
          name: 'North',
          data: [
              [1351202400000,37.45],
              [1351438000000,37.35],
              [1351724400000,37.38],
              [1351856400000,37.35],
              [1352042800000,37.40],
              [1352129200000,37.35],
              [1352315600000,37.37],
              [1352424000000,37.32],
              [1352561200000,37.35],
              [1352734000000,37.32],
              [1352920400000,37.36],
              [1353066000000,37.10],
              [1353232400000,37.36],
              [1353457200000,37.30],
              [1353857200000,37.58],
              [1353925000000,37.58],
              [1354021500000,37.65],
              [1354175600000,37.58],
              [1354262000000,37.61],
              [1354348400000,37.50],
              [1354834800000,37.60],
              [1354894000000,37.50],
              [1355080400000,37.61],
              [1355666800000,37.45],
              [1355953200000,37.42],
              [1356039600000,37.45],
        ]
        }
      ],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.2,
        }
      },
      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'right'
      },
      yaxis: {
        low: 0,
        offsetX: 0,
        offsetY: 0,
        labels: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisBorder: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisTicks: {
            show: false,
        },
      },
      xaxis: {
        type: 'datetime',
        low: 0,
        offsetX: 0,
        offsetY: 0,
        labels: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisBorder: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisTicks: {
            show: false,
        },
      },
    }

    var chart1 = new ApexCharts(
      document.querySelector("#mix1"),
      options1
    );

    chart1.render();
// mix-bar
new Chartist.Bar('.small-mix', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22', 'Q23'],
    series: [
        [13.6, 11, 4, 8, 4, 15, 18, 10, 8, 10, 8, 4, 6, 11, 13.6, 11, 4, 8, 4, 15, 18, 10, 8, 10, 8, 4, 6, 11, 13.6, 11, 4, 8, 4, 15, 18, 10, 18]
    ]
}, {
    low: 0,
    offset: 0,
    chartPadding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    axisX: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0
    },
    axisY: {
        low: 0,
        showGrid: false,
        showLabel: false,
        offset: 0,
        labelInterpolationFnc: function(value) {
            return (value / 1000) + 'k';
        }
    }
}).on('draw', function(data) {
    if(data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 5px'
        });
    }
});

// bar chart
var data = {
  labels: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '120', '130'],
  series: [
    [1, 5, 7, 6, -5, -6, -9, -6, 4, 5, 6, 5, 2],
    [3, 2.6, 9, 3, -3, -4, -7, -4, 6, 8.5, 10, 3, 1],
  ]
};

var options = {
  high: 10,
  low: -10,
  seriesBarDistance: 25,
  axisY: {
        showGrid: true,
        showLabel: false,
        offset: 0
  },
  axisX: {
    showGrid: false,
  }
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 15,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }],
  ['screen and (max-width: 420px)', {
    seriesBarDistance: 13,
  }],
  ['screen and (max-width: 360px)', {
    seriesBarDistance: 10,
  }]
];

var chartbar = new Chartist.Bar('.ct-chartbar', data, options, responsiveOptions);
