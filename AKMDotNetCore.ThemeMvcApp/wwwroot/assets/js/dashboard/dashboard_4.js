// circle chart
var options = {
    chart: {
        height: 310,
        type: 'radialBar',
        fullWidth: true,
    },
    plotOptions: {
        padding: {
            left: 0,
            top: -50,
            bottom: -50,
            right: 0
        },
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            offsetY: 0,
            low: 0,
            hollow: {
                size: '50%',
            },
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                        return 75
                    }
                }
            }
        }
    },
    fill: {
        colors:[XoloAdminConfig.primary , '#148df6', '#51bb25'],
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.2,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]            
        }
    },
    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left', 
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 0,
    },
    colors: [XoloAdminConfig.primary , '#148df6', '#51bb25'],
    series: [60, 67, 100],
    labels: ['Completed', 'Assigned', 'Due'],
    stroke: {
        lineCap: "round",
    }
}

var chart = new ApexCharts(
    document.querySelector("#circlechart"),
    options
);

chart.render();

// task Completion
var options1 = {
  chart: {
    height: 300,
    type: 'area',
    toolbar: {
      show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: 'transparent',
    padding: {
        left: -10,
        right: 0,
        bottom: -15,
        top: -70
    }
  },
  stroke: {
    curve: 'smooth'
  },
  series: [{
    name: 'Task',
    data: [50, 45, 55, 50, 60, 56, 58, 50, 65, 60, 50, 60, 52, 55, 52]
  }],

  xaxis: {
    low: 0,
    offsetX: 0,
    offsetY: 0,
    show: false,
    type: 'datetime',
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
    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00", "2018-09-19T11:30:00" , "2018-09-19T12:30:00", "2018-09-19T13:30:00", "2018-09-19T14:30:00"],
  },
  yaxis: {
    low: 0,
    offsetX: 0,
    offsetY: 0,
    show: false,
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
  },
  colors: [XoloAdminConfig.primary],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.4,
      stops: [0, 95, 100]
    }
  }
}

var chart1 = new ApexCharts(
    document.querySelector("#area-spaline"),
    options1
);

chart1.render();

// sparkline
 window.Apex = {
      stroke: {
        width: 2
      },
      markers: {
        size: 0
      },
      tooltip: {
        fixed: {
          enabled: true,
        }
      }
    };
    
    var randomizeArray = function (arg) {
      var array = arg.slice();
      var currentIndex = array.length,
        temporaryValue, randomIndex;

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

var spark = {
      chart: {
        type: 'area',
        height: 80,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      colors: ['#fd2e64'],
      fill: {
        opacity: 0.3
      },
      series: [{
        data: randomizeArray(sparklineData)
      }],
      xaxis: {
        crosshairs: {
          width: 1
        },
      },
      yaxis: {
        min: 0
      }
    }

    var spark = new ApexCharts(document.querySelector("#spark3"), spark);
    spark.render();

// monthly revenue
var options5 = {
chart: {
type: 'bar',
height: 192,
sparkline: {
  enabled: true
}
},
plotOptions: {
bar: {
  columnWidth: '50%'
}
},
series: [{
data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 89, 66]
}],
labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
colors: ['#fd2e64'],
xaxis: {
crosshairs: {
  width: 1
},
},
tooltip: {
fixed: {
  enabled: false
},
x: {
  show: false
},
y: {
  title: {
    formatter: function (seriesName) {
      return ''
    }
  }
},
marker: {
  show: false
}
}
}

new ApexCharts(document.querySelector("#monthly"), options5).render();


// btn js
$('.btn-js').click(function(){
    
    $( '.btn-js' ).each(function( ) {
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }
    });

    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
});