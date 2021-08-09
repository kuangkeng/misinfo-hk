//chart for Chinese embassy FB page
function makechart() {
  Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
  }),
  $('#container_chart').highcharts({
    chart: {
        type: 'line',
        backgroundColor: '#222',
    },
    title:{text:null},
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {year: '%b %Y'},
        showLastLabel: true, 
        labels:{
          style:{color:'#fff',fontFamily: 'Roboto,"Helvetica Neue",Arial',}
        }, 
        showLastLabel: true, 
        endOnTick: true,       
    },
    yAxis: {   
        title: {
          text: '追踪人数',
          style: {
            color: '#fff',
            fontSize: '11px',
            fontFamily: 'Roboto,"Helvetica Neue",Arial',
          },  
        },
        labels:{
          style:{color:'#fff',fontFamily: 'Roboto,"Helvetica Neue",Arial',}
        },
        gridLineColor: '#333',
        endOnTick: false,
    },
    credits: {enabled: false},
    tooltip: {xDateFormat: '%e %b %Y',},
    legend: {enabled: false},
    plotOptions: {
        series: {
            dataLabels: {
                enabled: false,
                style: {fontSize: '11px',},
                format: '{point.y:,.0f}',
            },
            lineWidth: 3,
        },
        line: {marker: {enabled: false}},
    },    
    series: [ 
      {name: "追踪人数", color:"#CC3333", 
        data :[
          [Date.UTC(2019,4,26), 22316],
          [Date.UTC(2019,5,2), 22654],
          [Date.UTC(2019,5,9), 22896],
          [Date.UTC(2019,5,16), 23002],
          [Date.UTC(2019,5,23), 23055],
          [Date.UTC(2019,5,30), 23150],
          [Date.UTC(2019,6,7), 23276],
          [Date.UTC(2019,6,14), 23340],
          [Date.UTC(2019,6,21), 23364],
          [Date.UTC(2019,6,28), 23395],
          [Date.UTC(2019,7,4), 23485],
          [Date.UTC(2019,7,11), 23878],
          [Date.UTC(2019,7,18), 23941],
          [Date.UTC(2019,7,25), 23960],
          [Date.UTC(2019,8,1), 24017],
          [Date.UTC(2019,8,8), 24042],
          [Date.UTC(2019,8,15), 24070],
          [Date.UTC(2019,8,22), 24428],
          [Date.UTC(2019,8,29), 25106],
          [Date.UTC(2019,9,6), 25347],
          [Date.UTC(2019,9,13), 25498],
          [Date.UTC(2019,9,20), 25565],
          [Date.UTC(2019,9,27), 25641],
          [Date.UTC(2019,10,3), 25725],
          [Date.UTC(2019,10,10), 25788],
          [Date.UTC(2019,10,17), 25859],
          [Date.UTC(2019,10,24), 25930],
          [Date.UTC(2019,11,1), 25999],
          [Date.UTC(2019,11,8), 26066],
          [Date.UTC(2019,11,15), 26346],
          [Date.UTC(2019,11,22), 26600],
          [Date.UTC(2019,11,29), 26681],
          [Date.UTC(2020,0,5), 26726],
          [Date.UTC(2020,0,12), 26845],
          [Date.UTC(2020,0,19), 27205],
          [Date.UTC(2020,0,26), 29399],
          [Date.UTC(2020,1,2), 30990],
          [Date.UTC(2020,1,9), 32348],
          [Date.UTC(2020,1,16), 32728],
          [Date.UTC(2020,1,23), 32934],
          [Date.UTC(2020,2,1), 33546],
          [Date.UTC(2020,2,8), 34358],
          [Date.UTC(2020,2,15), 48022],
          [Date.UTC(2020,2,22), 51050],
          [Date.UTC(2020,2,29), 51278]
        ]
      },
    ],
  })
  // chart_waypoint.disable()
};