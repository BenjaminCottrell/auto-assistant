const saveButtonHandeler = async (event) =>{
    event.preventDefault();
    console.log("It works?");
    let id = event.target.parentElement.parentElement.parentElement.children[0].children[0].children[1].children[0].id;
    let make = event.target.parentElement.parentElement.parentElement.children[0].children[1].children[0].children[0].innerText;
    let model = event.target.parentElement.parentElement.parentElement.children[0].children[1].children[0].children[1].innerText;
    let year = event.target.parentElement.parentElement.parentElement.children[0].children[1].children[0].children[2].innerText;
    let drive = event.target.parentElement.parentElement.parentElement.children[0].children[1].children[1].children[0].innerText;
    let trans = event.target.parentElement.parentElement.parentElement.children[0].children[1].children[1].children[1].innerText;
    let cylinders = event.target.parentElement.parentElement.parentElement.children[0].children[1].children[2].children[0].innerText;
    let mpg = event.target.parentElement.parentElement.parentElement.children[0].children[1].children[2].children[1].innerText;
    let notes = event.target.parentElement.parentElement.children[0].value;
    console.log(id, make, model, year, drive, trans, cylinders, mpg, notes);
    const response = await fetch(`/api/favorites/${id}`, {
      method: 'PUT',
      body: JSON.stringify({id, make, model, year, drive, trans, cylinders, mpg, notes }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (!response.ok) {
      alert(response.statusText);
    }
}

var save = document.querySelectorAll(".floppy");

save.forEach(function(e){
  e.addEventListener('click', saveButtonHandeler)});