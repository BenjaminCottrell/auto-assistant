function getCars(make, model, year) {
$.ajax({
  method: 'GET',
  url:  `https://api.api-ninjas.com/v1/cars?&limit=30&make=${make}&model=${model}&year=${year}`,
  headers: { 'X-Api-Key': 'R/ueMf8x3oDZnVkrK0l+ig==29U6y1LjRgDDhUGr'},
  contentType: 'application/json',
  success: function(result) {
    var cars = result;
    cars.sort( function ( a, b ) { return b.year - a.year; } );
    console.log(cars);
    createResultsTable(cars);
  },
  error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
  }
});
}

const createResultsTable = async (data) => {
  const response = await fetch('/api/result', {
    method: 'DELETE',
  });
  if (response.ok) {
    console.log("DELETE works");
  } else {
    alert(response.statusText);
  }
  
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const make = element.make.trim();
    const model = element.model.trim();
    const year = element.year;
    const drive = element.drive.trim();
    const trans = element.transmission.trim();
    const cylinders = element.cylinders;
    const mpg = element.combination_mpg;

    console.log(make, model, year, drive, trans, cylinders, mpg);

    const response = await fetch('/api/result', {
      method: 'POST',
      body: JSON.stringify({ make, model, year, drive, trans, cylinders, mpg }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log("Post works");
    } else {
      alert(response.statusText);
    }
  }
  document.location.replace('/results');
};

const addFavorite = async (event) => {
  event.preventDefault();

  const make = cars[i].make.trim();
  const model = cars[i].model.trim();
  const year = cars[i].year;
  const drive = cars[i].drive.trim();
  const trans = cars[i].transmission.trim();
  const cylinders = cars[i].cylinders;
  const mpg = cars[i].combination_mpg;


  const response = await fetch('/api/favorites', {
    method: 'POST',
    body: JSON.stringify({ make, model, year, drive, trans, cylinders, mpg }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    alert(response.statusText);
  }
};

const searchFormHandler = async (event) => {
  console.log("Search working");
  event.preventDefault();

  const make = document.querySelector('#make-search').value.trim();
  const model = document.querySelector('#model-search').value.trim();
  const year = document.querySelector('#year-search').value.trim();
  getCars(make, model, year);
};

const favoriteButtonHandeler = async (event) =>{
  var search = $(this).parent().parent().children(".")
}

document
  .querySelector('.search-form')
  .addEventListener('submit', searchFormHandler);
document
  .querySelector('.results-heart')
  .addEventListener('click', favoriteButtonHandeler);
