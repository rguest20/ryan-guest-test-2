var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var choice = document.getElementsByClassName("menuchoice");
  var choicearrow = document.getElementsByClassName("menuchoicearrow");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < choice.length; i++) {
    choice[i].className = choice[i].className.replace(" active", "");
  }
  for (i = 0; i < choicearrow.length; i++) {
    choicearrow[i].className = choicearrow[i].className.replace(" flipped", "");
  }

  slides[slideIndex-1].style.display = "block";
  choice[slideIndex-1].className += " active";
  choicearrow[slideIndex-1].className+= " flipped";
  var allarrow = $('.menuchoicearrow')
  allarrow.html('<img src="css/assets/arrow-retina.png" alt="arrow">')
  var flippedarrow = $(".flipped")
  flippedarrow.html("<img src='css/assets/arrow-white-retina.png' alt='inverse arrow'>")
}
