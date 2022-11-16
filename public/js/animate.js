const heartbutton = document.querySelectorAll('.results-heart');

heartbutton.forEach(function(element) {
    addEventListener('click', () => 
    element.classList.add('animate__animated', 'animate__heartBeat'))});
