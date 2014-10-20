
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
      .showControls(false)
      .margin({left: 100});

    chart.multibar
      .hideable(true);

    chart.reduceXTicks(false).staggerLabels(false);

    var days = ["Sun, 8/24","Mon, 8/25","Tues, 8/26","Wed, 8/27","Thurs, 8/28","Fri, 8/29","Sat, 8/30","Sun, 8/31","Mon, 9/1","Tues, 9/2","Wed, 9/3","Thurs, 9/4","Fri, 9/5","Sat, 9/6","Sun, 9/7","Mon, 9/8","Tues, 9/9","Wed, 9/10","Thurs, 9/11","Fri, 9/12","Sat, 9/13","Sun, 9/14","Mon, 9/15","Tues, 9/16","Wed, 9/17","Thurs, 9/18","Fri, 9/19","Sat, 9/20","Sun, 9/21","Mon, 9/22","Tues, 9/23","Wed, 9/24","Thurs, 9/25","Fri, 9/26","Sat, 9/27"]
    chart.xAxis
        .tickValues([2,10,16,23,30])
        .tickFormat(function(d){
          return days[d-1]
        })
        .axisLabel("Date")

    chart.yAxis
        .tickFormat(d3.format(',.0f'))
        .axisLabel("Number of packages picked up");

    var data = [
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
          {x:10,y:1217, color:"#00f45b"},
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
    
    d3.select('#chart2014 svg')
        .datum(data)
       .call(chart);

    nv.utils.windowResize(chart.update);

    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

    return chart;
});

