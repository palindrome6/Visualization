function mybar_2009() {
	    var svg = dimple.newSvg("#container09z", 3000, 600);
    d3.csv("bar2009.csv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(200, 200, 1800, 300);
      var x = myChart.addCategoryAxis("x", "country");
      myChart.addMeasureAxis("y", "percent");
      myChart.addSeries(null, dimple.plot.bar);
      myChart.draw();
    });

}

