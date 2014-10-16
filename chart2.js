
var chart;
nv.addGraph(function() {
    chart = nv.models.multiBarChart()
      .barColor(d3.scale.category20().range())
      .margin({bottom: 100})
      .transitionDuration(300)
      .delay(0)
     // .rotateLabels(45)
      .groupSpacing(0.1)
      .stacked(false)
      .showControls(false);
      ;

    chart.multibar
      .hideable(true);

    chart.reduceXTicks(false).staggerLabels(true);

    var days = ["8/24","8/25","8/26","8/27","8/28","8/29","8/30","8/31","9/1","9/2","9/3","9/4","9/5","9/6","9/7","9/8","9/9","9/10","9/11","9/12","9/13","9/14","9/15","9/16","9/17","9/18","9/19","9/20","9/21","9/22","9/23","9/24","9/25","9/26","9/27"]
    chart.xAxis
        .tickFormat(function(d){
          return days[d-1]
        })
        .axisLabel("Day of the Week")
        //.showMaxMin(true)

    chart.yAxis
        .tickFormat(d3.format(',.1f'))
        .axisLabel("Packages Received");

    var data = [
      { 
        key: "2013",
        values: [
          //8/24
          {x:1,y:0, color:"#8dd4ff"},
          {x:2,y:363 , color:"#8dd4ff"},
          {x:3,y:459 , color:"#f4d700"},
          {x:4,y:549, color:"#8dd4ff"},
          {x:5,y:463 , color:"#8dd4ff"},
          {x:6,y:497, color:"#8dd4ff"},
          {x:7,y:497, color:"#8dd4ff"},
          {x:8,y:431, color:"#e8037c"},
          //9/1
          {x:9,y:0, color:"#8dd4ff"},
          {x:10,y:0, color:"#8dd4ff"},
          //9/3
          {x:11,y:1408, color:"#00f45b"},
          {x:12,y:1175, color:"#8dd4ff"},
          {x:13,y:1345, color:"#8dd4ff"},
          {x:14,y:1572, color:"#8dd4ff"},
          //9/7
          {x:15,y:0, color:"#8dd4ff"},
          {x:16,y:0, color:"#8dd4ff"},
          //9/9
          {x:17,y:1698, color:"#8dd4ff"},
          {x:18,y:1368, color:"#8dd4ff"},
          {x:19,y:1661, color:"#8dd4ff"},
          {x:20,y:1810, color:"#8dd4ff"},
          {x:21,y:1286, color:"#8dd4ff"},
          {x:22,y:603, color:"#e8037c"},
          {x:23,y:281, color:"#e8037c"},
          //9/16
          {x:24,y:1023, color:"#8dd4ff"},
          {x:25,y:955, color:"#8dd4ff"},
          {x:26,y:1575, color:"#8dd4ff"},
          {x:27,y:1058, color:"#8dd4ff"},
          {x:28,y:1092, color:"#8dd4ff"},
          {x:29,y:0, color:"#8dd4ff"},
          {x:30,y:0, color:"#8dd4ff"},
          //9/23
          {x:31,y:924, color:"#8dd4ff"},
          {x:32,y:1323, color:"#8dd4ff"},
          {x:33,y:1132, color:"#8dd4ff"},
          {x:34,y:705, color:"#8dd4ff"},
          {x:35,y:812, color:"#8dd4ff"}

         ]
    },
     { 
        key: "2014",
        values: [
          //8/24
          {x:1,y:259, color:"#8dd4ff"},
          {x:2,y:442, color:"#f4d700"},
          {x:3,y:500, color:"#8dd4ff"},
          {x:4,y:473, color:"#8dd4ff"},
          {x:5,y:395, color:"#8dd4ff"},
          {x:6,y:344, color:"#8dd4ff"},
          {x:7,y:350, color:"#e8037c"},
          //8/31
          {x:8,y:0, color:"#8dd4ff"},
          {x:9,y:0, color:"#8dd4ff"},
          //9/2
          {x:10,y:1217, color:"#00a83e"},
          {x:11,y:807, color:"#8dd4ff"},
          {x:12,y:973, color:"#8dd4ff"},
          {x:13,y:1080, color:"#8dd4ff"},
          //9/6
          {x:14,y:0, color:"#8dd4ff"},
          {x:15,y:0, color:"#8dd4ff"},
          //9/8
          {x:16,y:1530, color:"#8dd4ff"},
          {x:17,y:1281, color:"#8dd4ff"},
          {x:18,y:1144, color:"#8dd4ff"},
          {x:19,y:1191, color:"#8dd4ff"},
          {x:20,y:1263, color:"#8dd4ff"},
          {x:21,y:652, color:"#e8037c"},
          {x:22,y:394, color:"#e8037c"},
          //9/15
          {x:23,y:1714, color:"#8dd4ff"},
          {x:24,y:1478, color:"#8dd4ff"},
          {x:25,y:1937, color:"#8dd4ff"},
          {x:26,y:1763, color:"#8dd4ff"},
          {x:27,y:1516, color:"#8dd4ff"},
          {x:28,y:0, color:"#8dd4ff"},
          {x:29,y:0, color:"#8dd4ff"},
          //9/23
          {x:30,y:1899, color:"#8dd4ff"},
          {x:31,y:1339, color:"#8dd4ff"},
          {x:32,y:1196, color:"#8dd4ff"},
          {x:33,y:782, color:"#8dd4ff"},
          {x:34,y:790, color:"#8dd4ff"},
          {x:35,y:0, color:"#8dd4ff"}
         ]
    }
    ];
    
    d3.select('#chart2 svg')
        .datum(data)
       .call(chart);

    nv.utils.windowResize(chart.update);

    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

    return chart;
});

