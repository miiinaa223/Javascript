// from data.js
var tableData = data; // HTML make table datagrit  

// YOUR CODE HERE!
// select tbody 
tbody = d3.select("tbody") // css selector

// using Object.entries to get key, value data inside of the table
// loop function to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sight){
    tr = tbody.append("tr") // put css data into tr in html
    Object.entries(sight).forEach(function([key, value]){
        td = tr.append("td").text(value) // only store values
    }) // object.entries is return of array in object (sight) having keys and values
})}

displayData(tableData) // pull from var

//select user's input in filter
var dateInputText = d3.select("#Datetime") // from html id reference to data.js
var button = d3.select("filter-btn") // from html

// filter  function
function clickSelect(){
    //print the value that was input
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(sight => sight.datetime===dateInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// to click filter called 'click listener'
dateInputText.on("change", clickSelect) 
