
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
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const make = element.make.trim();
    const model = element.model.trim();
    const year = element.year;
    const type = element.class.trim();
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

function apendData(data) {
  console.log("page changed");

    
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      const make = element.make.trim();
      const model = element.model.trim();
      const year = element.year;
      const type = element.class.trim();
      const drive = element.drive.trim();
      const trans = element.transmission.trim();
      const cylinders = element.cylinders;
      const mpg = element.combination_mpg;
      
  
  
      var cardEl = $("<div class='result'></div>")
      $(".form-group").append(cardEl); 
  
      //Create elements and append it to card
      var makeEl = $("<h3></h3>").text(make).css("text-align","center");
      var modelEl = $("<h3></h3>").text(model).css("text-align","center");
      var yearEl = $("<h3></h3>").text(year).css("text-align","center");
      var typeEl = $("<h3></h3>").text(type).css("text-align","center");
      var driveEl = $("<h3></h3>").text(drive).css("text-align","center");
      var transEl = $("<h3></h3>").text(trans).css("text-align","center");
      var cylindersEl = $("<h3></h3>").text(cylinders).css("text-align","center");
      var mpgEl = $("<h3></h3>").text(mpg).css("text-align","center");
      //var FavoriteEl = $("<h3></h3>").text().css("text-align","center");
      $(cardEl).append(makeEl, modelEl, yearEl, typeEl, driveEl, transEl, cylindersEl, mpgEl);
      
  
    }


  
  
}


const addFavorite = async (event) => {
  event.preventDefault();

  const make = cars[i].make.trim();
  const model = cars[i].model.trim();
  const year = cars[i].year.trim();
  const type = cars[i].class.trim();
  const drive = cars[i].drive.trim();
  const trans = cars[i].transmission.trim();
  const cylinders = cars[i].cylinders.trim();
  const mpg = cars[i].combination_mpg.trim();


  const response = await fetch('/api/favorites', {
    method: 'POST',
    body: JSON.stringify({ make, model, year, type, drive, trans, cylinders, mpg }),
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
 //console.log( getCars(make, model, year));
  getCars(make, model, year);
};

document
  .querySelector('.search-form')
  .addEventListener('submit', searchFormHandler);
