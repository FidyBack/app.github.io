// Código baseado em um tutorial do site w3schools:
// https://www.w3schools.com/howto/howto_js_search_menu.asp

function myFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("pesquisa");
	filter = input.value.toUpperCase();
	ul = document.getElementById("menu_pesquisa");
	li = ul.getElementsByTagName("li");


	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}