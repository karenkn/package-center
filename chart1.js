    // Wrapping in nv.addGraph allows for '0 timeout render', stores rendered charts in nv.graphs, and may do more in the future... it's NOT required
    var chart;

    nv.addGraph(function() {
      chart = nv.models.lineChart()
      .options({
        margin: {left: 100, bottom: 100, right: 100},
        x: function(d,i) {return i},
        showXAxis: true,
        showYAxis: true,
        transitionDuration: 250
      })
      .forceY([0,35000])
      ;

      // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately

      var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]


      chart.xAxis.tickValues([0,1,2,3,4,5,6,7,8,9,10,11])
        .tickFormat(function(d){
             return months[d]
        })
        .axisLabel("Month")
        ;   

      chart.yAxis
        .axisLabel('Accountable Pieces Received')
        .tickFormat(d3.format(',f'))
        ;

      d3.select('#chart1 svg')
        .datum(packageData2())
        .call(chart);

      //TODO: Figure out a good way to do this automatically
      nv.utils.windowResize(chart.update);
      //nv.utils.windowResize(function() { d3.select('#chart1 svg').call(chart) });

      chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

      return chart;
    });

    function packageData2() {
       var y2010 = [{y:11644},{y:15935},{y:9020},{y:8785},{y:4768},{y:3341},{y:2548},{y:4762},{y:23848},{y:12970},{y:9357},{y:8999}],
           y2011 = [{y:11311}, {y:15718}, {y:8759}, {y:8288}, {y:4035}, {y:3210}, {y:2336}, {y:9464}, {y:30812}, {y:12099}, {y:9820}, {y:9057}]
           y2012 = [{y:13301},{y:13557},{y:8676},{y:8546},{y:4253},{y:2757}, {y:2171},{y:9984},{y:33817},{y:13062},{y:11387},{y:9338}]
           y2013 = [{y:12217},{y:15616},{y:9214},{y:10167},{y:6292},{y:2923},{y:2571},{y:6700},{y:24927},{y:15588},{y:10187},{y:11282}]
       ;

      return [
        {
          values:y2010,
          key: "2010",
          color: "#8dd4ff"
        },

        {
          values:y2011,
          key: "2011",
          color: "#00f45b"
        },
     
        {    
          values:y2012,
          key: "2012",
          color: "#f4d700"
        },

        {    
          values:y2013,
          key: "2013",
          color: "#e8037c"
        }
      ];
    }