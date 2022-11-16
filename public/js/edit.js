const favoriteButtonHandeler = async (event) =>{
    event.preventDefault();
    console.log("It works?");
    let make = event.target.id;
    console.log(make);
    // const response = await fetch('/api/favorites', {
    //   method: 'POST',
    //   body: JSON.stringify({ make, model, year, drive, trans, cylinders, mpg }),
    //   headers: { 'Content-Type': 'application/json' },
    // });
  
    // if (!response.ok) {
    //   alert(response.statusText);
    // }
  }

var heart = document.querySelectorAll(".garbage");

heart.forEach(function(e){
  e.addEventListener('click', favoriteButtonHandeler)});