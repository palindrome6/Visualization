function mybar_2011() {

	    var svg = dimple.newSvg("#container11z", 3000, 600);
    d3.csv("bar2011.csv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(200, 200, 1800, 200);
      var x = myChart.addCategoryAxis("x", "country");
      myChart.addMeasureAxis("y", "percent");
      myChart.addSeries(null, dimple.plot.bar);
      myChart.draw();
    });

}

