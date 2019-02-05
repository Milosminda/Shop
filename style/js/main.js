$(".back-to-top").click(function () {
	$("html, body").animate({scrollTop: 0}, 1000)
});

$(".back-to-bottom").click(function () {
	$("html, body").animate({scrollTop: $(document).height()}, 1000)
});

// Detailed
var box = document.getElementById("curBox");
var pictures = document.getElementsByClassName("thumb");

for (var i = 0; i < pictures.length; i++) {
	pictures[i].addEventListener("click", changePic);
}
function changePic() {
	var pic = this.getAttribute("src");
	box.setAttribute("src", pic);
}
// Detailed END

function wrongAns() {

	var errorInput = document.getElementsByClassName("errorInput");
	var errorBtn = document.getElementsByClassName("errorBtn");

	if (errorInput === "text") {
		return;
	} else if (errorInput != "text") {
		for (var i = 0; i < errorInput.length; i++) {
			errorInput[i].style.border = "1px solid red";
		}
	}
}