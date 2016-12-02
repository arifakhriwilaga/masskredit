var perShapeGradient = {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 0
    };

    // $('#sales-chart').highcharts({
    //     chart: {
    //         type: 'area'
    //     },
    //     colors: [{
    //         linearGradient: perShapeGradient,
    //         stops: [
    //             [0, 'rgb(181, 220, 240)'],
    //             [1, 'rgb(218, 235, 253)']                
    //             ]
    //         }, {
    //         linearGradient: perShapeGradient,
    //         stops: [
    //             [0, 'rgb(116, 180, 106)'],
    //             [1, 'rgb(204, 242, 137)']
    //             ]
    //         }],
    //     title: {
    //         text: ''
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     subtitle: {
    //         text: ''
    //     },
    //     xAxis: {
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    //     },
    //     yAxis: {
    //         title: {
    //             text: ''
    //         }
    //     },
    //     legend: {
    //         verticalAlign: 'top',
    //         align:'left',
    //         y:0,
    //         x:25
    //     },
    //     tooltip: {
    //         pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    //     },
    //     plotOptions: {
    //         area: {
    //             // pointStart: 1940,
    //             marker: {
    //                 enabled: false,
    //                 symbol: 'circle',
    //                 radius: 2,
    //                 states: {
    //                     hover: {
    //                         enabled: true
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     series: [{
    //         name: 'Average Loan<br/><span class="nominal av-loan">Rp. 4.000.000</span>',
    //         data: [6, 11, 32, 110, 50]
    //     }, {
    //         name: 'Average Investment<br/><span class="nominal av-invest">Rp. 4.000.000</span>',
    //         data: [5, 9, 20, 50, 20]
    //     }]
    // });

    // Highcharts.chart('speedo-01', {

    //     chart: {
    //         type: 'gauge',
    //         plotBackgroundColor: null,
    //         plotBackgroundImage: null,
    //         plotBorderWidth: 0,
    //         plotShadow: false
    //     },

    //     title: {
    //         text: ''
    //     },

    //     pane: {
    //         startAngle: -150,
    //         endAngle: 150,
    //         background: [{
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#FFF'],
    //                     [1, '#333']
    //                 ]
    //             },
    //             borderWidth: 0,
    //             outerRadius: '109%'
    //         }, {
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#333'],
    //                     [1, '#FFF']
    //                 ]
    //             },
    //             borderWidth: 1,
    //             outerRadius: '107%'
    //         }, {
    //             // default background
    //         }, {
    //             backgroundColor: '#DDD',
    //             borderWidth: 0,
    //             outerRadius: '105%',
    //             innerRadius: '103%'
    //         }]
    //     },

    //     // the value axis
    //     yAxis: {
    //         min: 0,
    //         max: 200,

    //         minorTickInterval: 'auto',
    //         minorTickWidth: 1,
    //         minorTickLength: 10,
    //         minorTickPosition: 'inside',
    //         minorTickColor: '#666',

    //         tickPixelInterval: 30,
    //         tickWidth: 2,
    //         tickPosition: 'inside',
    //         tickLength: 10,
    //         tickColor: '#666',
    //         labels: {
    //             step: 2,
    //             rotation: 'auto'
    //         },
    //         title: {
    //             text: ''
    //         },
    //         plotBands: [{
    //             from: 0,
    //             to: 120,
    //             color: '#55BF3B' // green
    //         }, {
    //             from: 120,
    //             to: 160,
    //             color: '#DDDF0D' // yellow
    //         }, {
    //             from: 160,
    //             to: 200,
    //             color: '#DF5353' // red
    //         }]
    //     },

    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         name: '',
    //         data: [80],
    //         tooltip: {
    //             valueSuffix: ''
    //         }
    //     }]

    // });

    // Highcharts.chart('speedo-02', {

    //     chart: {
    //         type: 'gauge',
    //         plotBackgroundColor: null,
    //         plotBackgroundImage: null,
    //         plotBorderWidth: 0,
    //         plotShadow: false
    //     },

    //     title: {
    //         text: ''
    //     },

    //     pane: {
    //         startAngle: -150,
    //         endAngle: 150,
    //         background: [{
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#FFF'],
    //                     [1, '#333']
    //                 ]
    //             },
    //             borderWidth: 0,
    //             outerRadius: '109%'
    //         }, {
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#333'],
    //                     [1, '#FFF']
    //                 ]
    //             },
    //             borderWidth: 1,
    //             outerRadius: '107%'
    //         }, {
    //             // default background
    //         }, {
    //             backgroundColor: '#DDD',
    //             borderWidth: 0,
    //             outerRadius: '105%',
    //             innerRadius: '103%'
    //         }]
    //     },

    //     // the value axis
    //     yAxis: {
    //         min: 0,
    //         max: 200,

    //         minorTickInterval: 'auto',
    //         minorTickWidth: 1,
    //         minorTickLength: 10,
    //         minorTickPosition: 'inside',
    //         minorTickColor: '#666',

    //         tickPixelInterval: 30,
    //         tickWidth: 2,
    //         tickPosition: 'inside',
    //         tickLength: 10,
    //         tickColor: '#666',
    //         labels: {
    //             step: 2,
    //             rotation: 'auto'
    //         },
    //         title: {
    //             text: ''
    //         },
    //         plotBands: [{
    //             from: 0,
    //             to: 120,
    //             color: '#55BF3B' // green
    //         }, {
    //             from: 120,
    //             to: 160,
    //             color: '#DDDF0D' // yellow
    //         }, {
    //             from: 160,
    //             to: 200,
    //             color: '#DF5353' // red
    //         }]
    //     },

    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         name: '',
    //         data: [80],
    //         tooltip: {
    //             valueSuffix: ''
    //         }
    //     }]

    // });

    // Highcharts.chart('speedo-03', {

    //     chart: {
    //         type: 'gauge',
    //         plotBackgroundColor: null,
    //         plotBackgroundImage: null,
    //         plotBorderWidth: 0,
    //         plotShadow: false
    //     },

    //     title: {
    //         text: ''
    //     },

    //     pane: {
    //         startAngle: -150,
    //         endAngle: 150,
    //         background: [{
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#FFF'],
    //                     [1, '#333']
    //                 ]
    //             },
    //             borderWidth: 0,
    //             outerRadius: '109%'
    //         }, {
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#333'],
    //                     [1, '#FFF']
    //                 ]
    //             },
    //             borderWidth: 1,
    //             outerRadius: '107%'
    //         }, {
    //             // default background
    //         }, {
    //             backgroundColor: '#DDD',
    //             borderWidth: 0,
    //             outerRadius: '105%',
    //             innerRadius: '103%'
    //         }]
    //     },

    //     // the value axis
    //     yAxis: {
    //         min: 0,
    //         max: 200,

    //         minorTickInterval: 'auto',
    //         minorTickWidth: 1,
    //         minorTickLength: 10,
    //         minorTickPosition: 'inside',
    //         minorTickColor: '#666',

    //         tickPixelInterval: 30,
    //         tickWidth: 2,
    //         tickPosition: 'inside',
    //         tickLength: 10,
    //         tickColor: '#666',
    //         labels: {
    //             step: 2,
    //             rotation: 'auto'
    //         },
    //         title: {
    //             text: ''
    //         },
    //         plotBands: [{
    //             from: 0,
    //             to: 120,
    //             color: '#55BF3B' // green
    //         }, {
    //             from: 120,
    //             to: 160,
    //             color: '#DDDF0D' // yellow
    //         }, {
    //             from: 160,
    //             to: 200,
    //             color: '#DF5353' // red
    //         }]
    //     },

    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         name: '',
    //         data: [80],
    //         tooltip: {
    //             valueSuffix: ''
    //         }
    //     }]

    // });

    // Highcharts.chart('speedo-04', {

    //     chart: {
    //         type: 'gauge',
    //         plotBackgroundColor: null,
    //         plotBackgroundImage: null,
    //         plotBorderWidth: 0,
    //         plotShadow: false
    //     },

    //     title: {
    //         text: ''
    //     },

    //     pane: {
    //         startAngle: -150,
    //         endAngle: 150,
    //         background: [{
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#FFF'],
    //                     [1, '#333']
    //                 ]
    //             },
    //             borderWidth: 0,
    //             outerRadius: '109%'
    //         }, {
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#333'],
    //                     [1, '#FFF']
    //                 ]
    //             },
    //             borderWidth: 1,
    //             outerRadius: '107%'
    //         }, {
    //             // default background
    //         }, {
    //             backgroundColor: '#DDD',
    //             borderWidth: 0,
    //             outerRadius: '105%',
    //             innerRadius: '103%'
    //         }]
    //     },

    //     // the value axis
    //     yAxis: {
    //         min: 0,
    //         max: 200,

    //         minorTickInterval: 'auto',
    //         minorTickWidth: 1,
    //         minorTickLength: 10,
    //         minorTickPosition: 'inside',
    //         minorTickColor: '#666',

    //         tickPixelInterval: 30,
    //         tickWidth: 2,
    //         tickPosition: 'inside',
    //         tickLength: 10,
    //         tickColor: '#666',
    //         labels: {
    //             step: 2,
    //             rotation: 'auto'
    //         },
    //         title: {
    //             text: ''
    //         },
    //         plotBands: [{
    //             from: 0,
    //             to: 120,
    //             color: '#55BF3B' // green
    //         }, {
    //             from: 120,
    //             to: 160,
    //             color: '#DDDF0D' // yellow
    //         }, {
    //             from: 160,
    //             to: 200,
    //             color: '#DF5353' // red
    //         }]
    //     },

    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         name: '',
    //         data: [80],
    //         tooltip: {
    //             valueSuffix: ''
    //         }
    //     }]

    // });

    // Highcharts.chart('speedo-05', {

    //     chart: {
    //         type: 'gauge',
    //         plotBackgroundColor: null,
    //         plotBackgroundImage: null,
    //         plotBorderWidth: 0,
    //         plotShadow: false
    //     },

    //     title: {
    //         text: ''
    //     },

    //     pane: {
    //         startAngle: -150,
    //         endAngle: 150,
    //         background: [{
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#FFF'],
    //                     [1, '#333']
    //                 ]
    //             },
    //             borderWidth: 0,
    //             outerRadius: '109%'
    //         }, {
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#333'],
    //                     [1, '#FFF']
    //                 ]
    //             },
    //             borderWidth: 1,
    //             outerRadius: '107%'
    //         }, {
    //             // default background
    //         }, {
    //             backgroundColor: '#DDD',
    //             borderWidth: 0,
    //             outerRadius: '105%',
    //             innerRadius: '103%'
    //         }]
    //     },

    //     // the value axis
    //     yAxis: {
    //         min: 0,
    //         max: 200,

    //         minorTickInterval: 'auto',
    //         minorTickWidth: 1,
    //         minorTickLength: 10,
    //         minorTickPosition: 'inside',
    //         minorTickColor: '#666',

    //         tickPixelInterval: 30,
    //         tickWidth: 2,
    //         tickPosition: 'inside',
    //         tickLength: 10,
    //         tickColor: '#666',
    //         labels: {
    //             step: 2,
    //             rotation: 'auto'
    //         },
    //         title: {
    //             text: ''
    //         },
    //         plotBands: [{
    //             from: 0,
    //             to: 120,
    //             color: '#55BF3B' // green
    //         }, {
    //             from: 120,
    //             to: 160,
    //             color: '#DDDF0D' // yellow
    //         }, {
    //             from: 160,
    //             to: 200,
    //             color: '#DF5353' // red
    //         }]
    //     },

    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         name: '',
    //         data: [80],
    //         tooltip: {
    //             valueSuffix: ''
    //         }
    //     }]

    // });

    // Highcharts.chart('speedo-06', {

    //     chart: {
    //         type: 'gauge',
    //         plotBackgroundColor: null,
    //         plotBackgroundImage: null,
    //         plotBorderWidth: 0,
    //         plotShadow: false
    //     },

    //     title: {
    //         text: ''
    //     },

    //     pane: {
    //         startAngle: -150,
    //         endAngle: 150,
    //         background: [{
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#FFF'],
    //                     [1, '#333']
    //                 ]
    //             },
    //             borderWidth: 0,
    //             outerRadius: '109%'
    //         }, {
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#333'],
    //                     [1, '#FFF']
    //                 ]
    //             },
    //             borderWidth: 1,
    //             outerRadius: '107%'
    //         }, {
    //             // default background
    //         }, {
    //             backgroundColor: '#DDD',
    //             borderWidth: 0,
    //             outerRadius: '105%',
    //             innerRadius: '103%'
    //         }]
    //     },

    //     // the value axis
    //     yAxis: {
    //         min: 0,
    //         max: 200,

    //         minorTickInterval: 'auto',
    //         minorTickWidth: 1,
    //         minorTickLength: 10,
    //         minorTickPosition: 'inside',
    //         minorTickColor: '#666',

    //         tickPixelInterval: 30,
    //         tickWidth: 2,
    //         tickPosition: 'inside',
    //         tickLength: 10,
    //         tickColor: '#666',
    //         labels: {
    //             step: 2,
    //             rotation: 'auto'
    //         },
    //         title: {
    //             text: ''
    //         },
    //         plotBands: [{
    //             from: 0,
    //             to: 120,
    //             color: '#55BF3B' // green
    //         }, {
    //             from: 120,
    //             to: 160,
    //             color: '#DDDF0D' // yellow
    //         }, {
    //             from: 160,
    //             to: 200,
    //             color: '#DF5353' // red
    //         }]
    //     },

    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         name: '',
    //         data: [80],
    //         tooltip: {
    //             valueSuffix: ''
    //         }
    //     }]

    // });

    // Highcharts.chart('speedo-07', {

    //     chart: {
    //         type: 'gauge',
    //         plotBackgroundColor: null,
    //         plotBackgroundImage: null,
    //         plotBorderWidth: 0,
    //         plotShadow: false
    //     },

    //     title: {
    //         text: ''
    //     },

    //     pane: {
    //         startAngle: -150,
    //         endAngle: 150,
    //         background: [{
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#FFF'],
    //                     [1, '#333']
    //                 ]
    //             },
    //             borderWidth: 0,
    //             outerRadius: '109%'
    //         }, {
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#333'],
    //                     [1, '#FFF']
    //                 ]
    //             },
    //             borderWidth: 1,
    //             outerRadius: '107%'
    //         }, {
    //             // default background
    //         }, {
    //             backgroundColor: '#DDD',
    //             borderWidth: 0,
    //             outerRadius: '105%',
    //             innerRadius: '103%'
    //         }]
    //     },

    //     // the value axis
    //     yAxis: {
    //         min: 0,
    //         max: 200,

    //         minorTickInterval: 'auto',
    //         minorTickWidth: 1,
    //         minorTickLength: 10,
    //         minorTickPosition: 'inside',
    //         minorTickColor: '#666',

    //         tickPixelInterval: 30,
    //         tickWidth: 2,
    //         tickPosition: 'inside',
    //         tickLength: 10,
    //         tickColor: '#666',
    //         labels: {
    //             step: 2,
    //             rotation: 'auto'
    //         },
    //         title: {
    //             text: ''
    //         },
    //         plotBands: [{
    //             from: 0,
    //             to: 120,
    //             color: '#55BF3B' // green
    //         }, {
    //             from: 120,
    //             to: 160,
    //             color: '#DDDF0D' // yellow
    //         }, {
    //             from: 160,
    //             to: 200,
    //             color: '#DF5353' // red
    //         }]
    //     },

    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         name: '',
    //         data: [80],
    //         tooltip: {
    //             valueSuffix: ''
    //         }
    //     }]

    // });

    // Highcharts.chart('speedo-08', {

    //     chart: {
    //         type: 'gauge',
    //         plotBackgroundColor: null,
    //         plotBackgroundImage: null,
    //         plotBorderWidth: 0,
    //         plotShadow: false
    //     },

    //     title: {
    //         text: ''
    //     },

    //     pane: {
    //         startAngle: -150,
    //         endAngle: 150,
    //         background: [{
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#FFF'],
    //                     [1, '#333']
    //                 ]
    //             },
    //             borderWidth: 0,
    //             outerRadius: '109%'
    //         }, {
    //             backgroundColor: {
    //                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //                 stops: [
    //                     [0, '#333'],
    //                     [1, '#FFF']
    //                 ]
    //             },
    //             borderWidth: 1,
    //             outerRadius: '107%'
    //         }, {
    //             // default background
    //         }, {
    //             backgroundColor: '#DDD',
    //             borderWidth: 0,
    //             outerRadius: '105%',
    //             innerRadius: '103%'
    //         }]
    //     },

    //     // the value axis
    //     yAxis: {
    //         min: 0,
    //         max: 200,

    //         minorTickInterval: 'auto',
    //         minorTickWidth: 1,
    //         minorTickLength: 10,
    //         minorTickPosition: 'inside',
    //         minorTickColor: '#666',

    //         tickPixelInterval: 30,
    //         tickWidth: 2,
    //         tickPosition: 'inside',
    //         tickLength: 10,
    //         tickColor: '#666',
    //         labels: {
    //             step: 2,
    //             rotation: 'auto'
    //         },
    //         title: {
    //             text: ''
    //         },
    //         plotBands: [{
    //             from: 0,
    //             to: 120,
    //             color: '#55BF3B' // green
    //         }, {
    //             from: 120,
    //             to: 160,
    //             color: '#DDDF0D' // yellow
    //         }, {
    //             from: 160,
    //             to: 200,
    //             color: '#DF5353' // red
    //         }]
    //     },

    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         name: '',
    //         data: [80],
    //         tooltip: {
    //             valueSuffix: ''
    //         }
    //     }]

    // });