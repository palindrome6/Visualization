function mybar_1992() {
	    var svg = dimple.newSvg("#container92z", 3000, 600);
    d3.csv("bar1992.csv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(200, 200, 1800, 300)
      var x = myChart.addCategoryAxis("x", "country");
      myChart.addMeasureAxis("y", "percent");
      myChart.addSeries(null, dimple.plot.bar);
      myChart.draw();
    });

}

