const favoriteButtonHandeler = async (event) =>{
    event.preventDefault();
    console.log("It works?");
    let id = event.target.id;
    const response = await fetch(`/api/favorites/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/favorites');
      } else {
        alert('Failed to delete car');
      }
  }

var garbage = document.querySelectorAll(".garbage");

garbage.forEach(function(e){
  e.addEventListener('click', favoriteButtonHandeler)
});

var floppy = document.querySelectorAll(".floppy");

floppy.forEach(function(e){
  e.addEventListener('click', () =>
  e.classList.add('animate__animated', 'animate__flipInY'));
});