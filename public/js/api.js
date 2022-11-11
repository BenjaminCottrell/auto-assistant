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

const addFavorite = async (event) => {
  event.preventDefault();

  const make = cars[i].make.trim();
  const model = cars[i].model.trim();
  const year = cars[i].year.trim();
  const type = cars[i].class.trim();
  const drive = cars[i].drive.trim();
  const trans = cars[i].trans.trim();
  const cylinders = cars[i].cylinders.trim();
  const mpg = cars[i].mpg.trim();


  const response = await fetch('/api/favorites', {
    method: 'POST',
    body: JSON.stringify({ make, model, year, type, drive, trans, cylinders, mpg }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    alert(response.statusText);
  }
};


getCars("camry");