
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
      ;

    chart.multibar
      .hideable(true);

    chart.reduceXTicks(false).staggerLabels(false);

    var days = ["Sat, 8/24","Sun, 8/25","Mon, 8/26","Tues, 8/27","Wed, 8/28","Thurs, 8/29","Fri, 8/30","Sat, 8/31","Sun, 9/1","Mon, 9/2","Tues, 9/3","Wed, 9/4","Thurs, 9/5","Fri, 9/6","Sat, 9/7","Sun, 9/8","Mon, 9/9","Tues, 9/10","Wed, 9/11","Thurs, 9/12","Fri, 9/13","Sat, 9/14","Sun, 9/15","Mon, 9/16","Tues, 9/17","Wed, 9/18","Thurs, 9/19","Fri, 9/20","Sat, 9/21","Sun, 9/22","Mon, 9/23","Tues, 9/24","Wed, 9/25","Thurs, 9/26","Fri, 9/27"]
    chart.xAxis
        .tickValues([3,11,17,24,31])
        .tickFormat(function(d){
          return days[d-1]
        })
        .axisLabel("Date");

    chart.yAxis
        .tickFormat(d3.format(',.0f'))
        .axisLabel("Number of packages picked up");

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
    }
    ];
    
    d3.select('#chart2013 svg')
        .datum(data)
       .call(chart);

    nv.utils.windowResize(chart.update);

    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

    return chart;
});

