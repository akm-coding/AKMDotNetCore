// total sale
var options = {
    chart: {
        type: 'area',
        height: 120,
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [
            [1351202400000,37.30],
            [1351638000000,37.60],
            [1351724400000,37.50],
            [1351810800000,37.55],
            [1352070000000,37.40],
            [1352256400000,37.55],
            [1352342800000,37.45],
            [1352429200000,37.60],
            [1352515600000,37.50],
            [1352624000000,37.30],
            [1352761200000,37.20],
            [1353134000000,37.25],
            [1353220400000,37.22],
            [1353279600000,37.30],
            [1353466000000,37.23],
            [1353632400000,37.30],
            [1353757200000,37.28],
            [1353857200000,37.30],
            [1353957200000,37.28],
            [1354021500000,37.10],
            [1354175600000,37.28],
            [1354262000000,37.22],
            [1354748400000,37.50],
            [1354834800000,37.55],
            [1354894000000,37.65],
            [1355080400000,37.50],
            [1355166800000,37.40],
            [1355353200000,37.50],
            [1355439600000,37.45],
            [1355698800000,37.51],
            [1355785200000,37.40],
        ]
    },

    ],
    markers: {
        size: 0,
        style: 'hollow',
    },
    grid: {
        borderColor: 'transparent',
        padding: {
            left: -10,
            right: 0,
            bottom: -15,
            top: -58
        }
    },
    xaxis: {
        type: 'datetime',
        tickAmount: 6,
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
        line:{
          show: false,
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
    stroke: {
        width: [ 2 ]
    },
    tooltip: {
        x: {
            format: 'dd MMM yyyy'
        }
    },
    colors: [XoloAdminConfig.primary],

}

var chart = new ApexCharts(
    document.querySelector("#timeline-chart"),
    options
);

chart.render();
// total sale 2
var options1 = {
    chart: {
        type: 'area',
        height: 120,
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [
            [1351202400000,37.40],
            [1351638000000,37.35],
            [1351724400000,37.40],
            [1352256400000,37.65],
            [1352342800000,37.60],
            [1352429200000,37.60],
            [1352515600000,37.50],
            [1352624000000,37.60],
            [1352761200000,37.50],
            [1352834000000,37.55],
            [1353220400000,37.45],
            [1353466000000,37.23],
            [1353632400000,37.41],
            [1353757200000,37.38],
            [1353857200000,37.40],
            [1353957200000,37.38],
            [1354021500000,37.40],
            [1354175600000,37.28],
            [1354262000000,37.28],
            [1354748400000,37.12],
            [1354834800000,37.28],
            [1354894000000,37.28],
            [1355080400000,37.50],
            [1355166800000,37.45],
            [1355353200000,37.50],
            [1355439600000,37.45],
            [1355698800000,37.51],
        ]
    },

    ],
    markers: {
        size: 0,
        style: 'hollow',
    },
    grid: {
        borderColor: 'transparent',
        padding: {
            left: -10,
            right: 0,
            bottom: -15,
            top: -58
        }
    },
    xaxis: {
        type: 'datetime',
        tickAmount: 6,
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
    stroke: {
        width: [ 2 ]
    },
    tooltip: {
         enabled: false,
    },
    colors: ['#ff5f24'],

}

var chart1 = new ApexCharts(
    document.querySelector("#timeline-chart1"),
    options1
);

chart1.render();
// active customer
var options2 = {
    chart: {
        type: 'area',
        height: 120,
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    series: [{
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
            [1356198800000,37.51],
            [1356298800000,37.45],
            [1356398800000,37.48],
            [1356498800000,37.45],
            [1356898800000,37.42],
        ]
    },

    ],
    markers: {
        size: 0,
        style: 'hollow',
    },
    grid: {
        borderColor: 'transparent',
        padding: {
            left: -10,
            right: 0,
            bottom: -15,
            top: -58
        }
    },
    xaxis: {
        type: 'datetime',
        tickAmount: 6,
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
    stroke: {
        width: [ 2 ]
    },
     tooltip: {
         enabled: false,
    },
    colors: ['#51bb25'],

}

var chart2 = new ApexCharts(
    document.querySelector("#timeline-chart2"),
    options2
);

chart2.render();
// new customer
var options3 = {
    chart: {
        type: 'area',
        height: 120,
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [
            [1351202400000,37.30],
            [1351638000000,37.60],
            [1351724400000,37.50],
            [1351810800000,37.55],
            [1352070000000,37.40],
            [1352256400000,37.55],
            [1352342800000,37.45],
            [1352429200000,37.60],
            [1352515600000,37.50],
            [1352624000000,37.30],
            [1352761200000,37.20],
            [1353134000000,37.25],
            [1353220400000,37.22],
            [1353279600000,37.30],
            [1353466000000,37.23],
            [1353632400000,37.30],
            [1353757200000,37.28],
            [1353857200000,37.30],
            [1353957200000,37.28],
            [1354021500000,37.10],
            [1354175600000,37.28],
            [1354262000000,37.22],
            [1354748400000,37.50],
            [1354834800000,37.55],
            [1354894000000,37.65],
            [1355080400000,37.50],
            [1355166800000,37.40],
            [1355353200000,37.50],
            [1355439600000,37.45],
            [1355698800000,37.51],
            [1355785200000,37.40],
        ]
    },

    ],
    markers: {
        size: 0,
        style: 'hollow',
    },
    grid: {
        borderColor: 'transparent',
        padding: {
            left: -10,
            right: 0,
            bottom: -15,
            top: -58
        }
    },
    xaxis: {
        type: 'datetime',
        tickAmount: 6,
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
    stroke: {
        width: [ 2 ]
    },
    tooltip: {
        x: {
            format: 'dd MMM yyyy'
        }
    },
    colors: ['#fd2e64'],

}

var chart3 = new ApexCharts(
    document.querySelector("#timeline-chart3"),
    options3
);

chart3.render();
// new customer 2
var options4 = {
    chart: {
        type: 'area',
        height: 120,
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [
            [1351202400000,37.40],
            [1351638000000,37.35],
            [1351724400000,37.40],
            [1352256400000,37.65],
            [1352342800000,37.60],
            [1352429200000,37.60],
            [1352515600000,37.50],
            [1352624000000,37.60],
            [1352761200000,37.50],
            [1352834000000,37.55],
            [1353220400000,37.45],
            [1353466000000,37.23],
            [1353632400000,37.41],
            [1353757200000,37.38],
            [1353857200000,37.40],
            [1353957200000,37.38],
            [1354021500000,37.40],
            [1354175600000,37.28],
            [1354262000000,37.28],
            [1354748400000,37.12],
            [1354834800000,37.28],
            [1354894000000,37.28],
            [1355080400000,37.50],
            [1355166800000,37.45],
            [1355353200000,37.50],
            [1355439600000,37.45],
            [1355698800000,37.51],
        ]
    },

    ],
    markers: {
        size: 0,
        style: 'hollow',
    },
    grid: {
        borderColor: 'transparent',
        padding: {
            left: -10,
            right: 0,
            bottom: -15,
            top: -58
        }
    },
    xaxis: {
        type: 'datetime',
        tickAmount: 6,
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
    stroke: {
        width: [ 2 ]
    },
    tooltip: {
        x: {
            format: 'dd MMM yyyy'
        }
    },
    colors: ['#7a15f7'],

}

var chart4 = new ApexCharts(
    document.querySelector("#timeline-chart4"),
    options4
);

chart4.render();
// rounded cap chart
new Chartist.Bar('.dashboard-rounded-chart', {
    labels: ['0', '10', '20', '30', '40', '50', '60', '70'],
    series: [
        [4, 5, 5.3, 5, 5.8, 5, 6, 5.5],
        [6.4, 7, 8, 7.5, 8.5, 7.8, 10, 9],
        [3, 3.5, 3.2, 2, 3.8, 4, 5, 3.5],
        [1.5, 2, 1.2, 0.5, 1.8, 4, 5, 0.5]
    ]
}, {
    chartPadding: {
        left: 5,
        bottom: 0,
        right:5,
        top:10,
    },
    low: 0,
    axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0,
        low: 0
    },
    axisX: {
        showGrid: false,
        offset: 0
    }
}).on('draw', function(data) {
    if(data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 12px ; stroke-linecap: round'
        });
    }
});

// circle chart
var options5 = {
    chart: {
        height: 370,
        type: 'radialBar',
        legend: {
            show: true
        },
    },
    plotOptions: {
        radialBar: {
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
                        return 249
                    }
                }
            }
        }
    },
    colors: [XoloAdminConfig.primary , '#51bb25', '#f04100', '#fd2e64'],
    series: [44, 55, 67, 83],
    labels: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
}

var chart5 = new ApexCharts(
    document.querySelector("#circlechart"),
    options5
);

chart5.render();

// btn js
$('.btn-js').click(function(){
    //make all inactive-doesn't work
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

$('.btn-js1').click(function(){
    //make all inactive-doesn't work
    $( '.btn-js1' ).each(function( ) {
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
