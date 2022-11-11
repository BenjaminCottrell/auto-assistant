const request = require('request');


function getCars(model) {
  // Add conditionals if form isnt fully filled out
    request.get({
  url: 'https://api.api-ninjas.com/v1/cars?&limit=30&model=' + model,
  headers: {
    'X-Api-Key': 'R/ueMf8x3oDZnVkrK0l+ig==29U6y1LjRgDDhUGr'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode);
  else {
    var cars = JSON.parse(body)
    cars.sort( function ( a, b ) { return b.year - a.year; } );
    console.log(cars)
    }
});
}

getCars("camry");