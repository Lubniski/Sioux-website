var num=1;

function adelante(){
	num++;
	if(num>5){
		num=1;}
		
			var Jean=document.getElementById('Jean');
		Jean.src="Jean"+num+".Jean";

function atrás(){
	num--;
	if(num>1){
		num=5;}
		var Jean=document.getElementById('Jean');
		Jean.src="Jean"+num+".Jean";

		var slideIndex = 0;
showSlides();


const searchBtn=document.querySelector(".search-btn");
const searchOverlay=document.querySelector(".search-overlay");
const searchPopup=document.querySelector(".seasrch-popup");

searchBtn.addEventListener("click",()=>{
	searchOverlay.classlist.add("active");
	searchPopup.classlist.add("active");
})

searchOverlay.addEventListener("click",(event))=>{
	if(event.target ==searchOverlay){
	searchOverlay.classlist.remove("active");
	searchPopup.classlist.remove("active");
	}
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}