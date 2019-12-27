var searchBtn = document.querySelector(".btn-search-hotel");
var	popup = document.querySelector(".ordering");

searchBtn.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("ordering-show");
});
