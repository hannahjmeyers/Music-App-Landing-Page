//Thanks to: "developedbyed"
    //https://www.youtube.com/watch?v=gXkqy0b4M5g&list=PLjPzanZ3I8cZ6eEjBMnMETnQklkP-BaJh&index=2

//Mobile nav bar animation
function navSlide () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.linkcontainer');
  var linkContainer = document.querySelectorAll('.linkcontainer li');

  //Activating "burger" nav bar using arrow function
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    linkContainer.forEach((link, index) => {
      if (link.style.animation){
        link.style.animation = '';
        } else {
          link.style.animation = `linkContainerFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
      });
      burger.classList.toggle('toggle');
  });
}
navSlide();




