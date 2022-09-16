<script src="https://cdn.plot.ly/plotly-2.14.0.min.js"></script>
d3.csv("../js/forecast_crop.csv", function(err, rows){

  function unpack(rows, key) {

  return rows.map(function(row) { return row[key]; });

}


  var x = unpack(rows, 'Ds')

  var y = unpack(rows, 'yhat')


  var trace = {

    type: "scatter",

    mode: "lines",

    name: 'AAPL Volume',

    x: x,

    y: y,

    line: {color: 'grey'}

  }


  var data = [trace];


var layout = {

  title: 'Volume of Apple Shares Traded',

  xaxis: {

    title: 'AXIS TITLE',

    titlefont: {

      family: 'Arial, sans-serif',

      size: 18,

      color: 'lightgrey'

    },

    showticklabels: true,

    tickangle: 'auto',

    tickfont: {

      family: 'Old Standard TT, serif',

      size: 14,

      color: 'black'

    },

    exponentformat: 'e',

    showexponent: 'all'

  },

  yaxis: {

    title: 'AXIS TITLE',

    titlefont: {

      family: 'Arial, sans-serif',

      size: 18,

      color: 'lightgrey'

    },

    showticklabels: true,

    tickangle: 45,

    tickfont: {

      family: 'Old Standard TT, serif',

      size: 14,

      color: 'black'

    },

    exponentformat: 'e',

    showexponent: 'all'

  }

};


Plotly.newPlot('myDiv', data, layout);

})
