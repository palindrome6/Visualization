function LC(countrycode){
    if(countrycode == "United States of America")
        countrycode = "United States";
    else if(countrycode == "South Korea")
        countrycode = "Korea (Rep. of)";
    else if(countrycode == "Vietname")
    //console.log(typeof countrycode);
        console.log(countrycode);
    d3.select("#LC").remove();
    var margin = {top: 20, right: 80, bottom: 20, left: 50},
        width = 300 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
    console.log(width);
    console.log(height);
    var parseDate = d3.time.format("%Y").parse;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.category10();

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d) { return x(d.Year); })
        .y(function(d) { return y(d.percentage); });

    var svg = d3.select("#aaa91").append("svg")
        .attr("id","LC")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    countrynames=[];
    d3.csv("internet1.csv", function(data) {
        color.domain(d3.keys(data[0]).filter(function(key) { return key !== "Year"; }));
        countrynames=d3.keys(data[0]);
        // convert strings to numbers
        data.forEach(function(d) {
            d.Year = parseInt(d.Year);
            //console.log(d.Year);
            //console.log(typeof d.Year);
            var keys = Object.keys(d);
            keys.forEach(function (ele) {
                    d[ele] = parseFloat(d[ele]);

                }
            );
        });
        //Check if it is converted.
        //console.log(typeof data[5].India);
        //Transforming the data.

        var countries = color.domain().map(function(name) {
            //console.log(name);
            //console.log(typeof name);
            /**console.log(data.map(function(d) {
            return {Year: d.Year, percentage: +d[name]};
        }));*/

            return {
                name: name,
                values: data.map(function(d) {
                    return {Year: d.Year, percentage: +d[name]};
                })
            };
        });


        console.log(svg.width);
        console.log(svg.height);
        console.log("have a look at the countries");
        console.log("hahahah");
        console.log(countrynames);
        console.log(countries);
        countries2 = [];

        function getcountry(cc){
            console.log(countrynames.indexOf(cc));
            countries2.push(countries[countrynames.indexOf(cc)-1]);
        }

        if (countrycode==0)
            countries2 = countries;
        else
            getcountry(countrycode);

        x.domain([1990,2011]);
        y.domain([0,100]);
        //Draw x axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        //Draw y axis
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            //.attr("transform", "rotate(-90)")
            .attr("y", 5)
            .attr("dy", ".71em")
            .attr("x",75)
            .style("text-anchor", "end")
            .text("Percentage (%)");

        var country = svg.selectAll(".country")
            .data(countries2)
            .enter().append("g")
            .attr("class", "country");

        country.append("path")
            .on()
            .attr("class", "line")
            .attr("d", function(d) { return line(d.values); })
            .style("stroke", function(d) { return color(d.name); });

        if(countries2.length <= 10){
            country.append("text")
                .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
                .attr("transform", function(d) { return "translate(" + x(d.value.Year) + "," + y(d.value.percentage) + ")"; })
                .attr("x", 3)
                .attr("dy", ".35em")
                .text(function(d) { return d.name; });}
    });
}