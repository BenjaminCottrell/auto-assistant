const favoriteButtonHandeler = async (event) =>{
    event.preventDefault();
    console.log("It works?");
    let make = event.target.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerText;
    let model = event.target.parentElement.parentElement.parentElement.children[1].children[0].children[1].innerText;
    let year = event.target.parentElement.parentElement.parentElement.children[1].children[0].children[2].innerText;
    let drive = event.target.parentElement.parentElement.parentElement.children[1].children[1].children[0].innerText;
    let trans = event.target.parentElement.parentElement.parentElement.children[1].children[1].children[1].innerText;
    let cylinders = event.target.parentElement.parentElement.parentElement.children[1].children[2].children[0].innerText;
    let mpg = event.target.parentElement.parentElement.parentElement.children[1].children[2].children[1].innerText;
    console.log(make, model, year, drive, trans, cylinders, mpg);
    const response = await fetch('/api/favorites', {
      method: 'POST',
      body: JSON.stringify({ make, model, year, drive, trans, cylinders, mpg }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (!response.ok) {
      alert(response.statusText);
    }
  }

var heart = document.querySelectorAll(".results-heart");

heart.forEach(function(e){
  e.addEventListener('click', favoriteButtonHandeler)
  e.addEventListener('click', () =>
  e.classList.add('animate__animated', 'animate__heartBeat'));
});