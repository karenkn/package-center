    // Wrapping in nv.addGraph allows for '0 timeout render', stores rendered new_charts in nv.graphs, and may do more in the future... it's NOT required
    var new_chart;

    nv.addGraph(function() {
      new_chart = nv.models.lineChart()
      .options({
        margin: {left: 100, bottom: 100, right: 100},
        x: function(d,i) {return i},
        showXAxis: true,
        showYAxis: true,
        transitionDuration: 250
      })
      .forceY([0,10])
      ;

      // new_chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent new_chart, so need to chain separately

      var months = ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"]


      new_chart.xAxis.tickValues([0,1,2,3,4,5,6,7,8,9])
        .tickFormat(function(d){
             return months[d]
        })
        .axisLabel("Year")
        ;   

      new_chart.yAxis
        .axisLabel('Packages Received (August and September)')
        .tickFormat(d3.format(',f'))
        ;

      d3.select('#chart3 svg')
        .datum(packageData())
        .call(new_chart);

      //TODO: Figure out a good way to do this automatically
      nv.utils.windowResize(new_chart.update);
      //nv.utils.windowResize(function() { d3.select('#new_chart1 svg').call(new_chart) });

      new_chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

      return new_chart;
    });

    function packageData() {
       var y2010 = [{y:19788},{y:21626},{y:24465},{y:28543},{y:29318},{y:28610},{y:40276},{y:43801},{y:31672},{y:32528}];

      return [
        {
          values:y2010,
          key: "Packages Received",
          color: "#8dd4ff"
        }
      ];
    }