var num=1;

function adelante(){
	num++;
	if(num>5){
		num=1;
			var Jean=document.getElementById('Jean');
		Jean.src="Jean"+num+".Jean";

function atrás(){
	num--;
	if(num>1){
		num=5;
		var Jean=document.getElementById('Jean');
		Jean.src="Jean"+num+".Jean";


const searchBtn=document.querySelector (".search-btn");
const searchOverlay=document.querySelector(".search-overlay");
const searchPopup=document.querySelector(".seasrch-popup");

searchBtn.addEventListener("click",()=>{
	searchOverlay.classlist.add("active");
	searchPopup.classlist.add("active");
})

searchOverlay.addEventListener("click",(event)=>{
	if(event.target ==searchOverlay){
	searchOverlay.classlist.remove("active");
	searchPopup.classlist.remove("active");
	}
})