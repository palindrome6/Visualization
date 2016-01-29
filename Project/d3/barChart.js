/**
 * Created by s149830 on 1/29/2016.
 */
function barChart(Year) {
    var svg = dimple.newSvg("#container90z", 3000, 600);
    d3.csv("bar"+ Year +".csv", function (data) {
        var myChart = new dimple.chart(svg, data);
        myChart.setBounds(200, 200, 1800, 300)
        var x = myChart.addCategoryAxis("x", "country");
        myChart.addMeasureAxis("y", "percent");
        myChart.addSeries(null, dimple.plot.bar);
        myChart.draw();
    });

}