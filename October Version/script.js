function fadeNav(){
  var navBar = document.getElementById("header_bar");

  if (window.scrollY > 0 ) {
    navBar.style.background = "rgba(0, 0, 0, 1)";
    navBar.classList.add('scrolledNav');
  } else {
    navBar.style.background = "rgba(0, 0, 0, 0.6)";
    navBar.classList.remove('scrolledNav');
  }
}
window.addEventListener('scroll', fadeNav);


//skill bar slide in animation/
// console.log(window.scrollY);
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(sliderImage => {

    if (window.scrollY > 650 && window.scrollY < 1300) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', checkSlide);
//end skill bar slide in animation/
