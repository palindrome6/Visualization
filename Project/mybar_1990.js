function mybar_1990() {
	    var svg = dimple.newSvg("#container90z", 1200, 1200);
    d3.csv("bar.csv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(1000, 1200, 2000, 300)
      var x = myChart.addCategoryAxis("x", "country");
      myChart.addMeasureAxis("y", "percent");
      myChart.addSeries(null, dimple.plot.bar);
      myChart.draw();
    });

}