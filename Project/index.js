$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 500,
    //viewBoxSize: => use @default
    innerRadius: 500 / 3.5,
    //outerRadius: => use @default
    radiusMin: 20,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "A", count: "0"},
        {text: "B", count: "0.36"},
        {text: "C", count: "0.09"},
        {text: "D", count: "0.40"},
        {text: "E", count: "0.05"},
        {text: "F", count: " 0.12"},
        {text: "G", count: "0.02"},
        {text: "H", count: " 0.01"},
        {text: "I", count: "0.33"},
        {text: "J", count: "0.02"},
        {text: "K", count: " 0.01"},
        {text: "L", count: "0.33"},
        {text: "M", count: "0.02"},
        {text: "N", count: "0"},
        {text: "O", count: "0.36"},
        {text: "P", count: "0.09"},
        {text: "Q", count: "0.40"},
        {text: "R", count: "0.36"},
        {text: "S", count: "0.09"},
        {text: "T", count: "0.40"},
        {text: "U", count: "0.36"},
        {text: "V", count: "0.09"},
        ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "(See more detail)",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "45px"},
          centralClick: function() {
            alert("Here is more details!!");
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
              classed: {count: true},
              style: {
                "font-size": "15px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "10px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "10px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "40px"}
            }
          ]
        }
      }]
  });
});
phuong