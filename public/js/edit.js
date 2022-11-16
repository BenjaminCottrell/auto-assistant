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

var heart = document.querySelectorAll(".garbage");

heart.forEach(function(e){
  e.addEventListener('click', favoriteButtonHandeler)});