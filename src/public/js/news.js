let titles = document.getElementsByClassName("news-title");
let news = document.getElementsByClassName("news-content");

for (let v = 0; v < 3; v++) {    

    titles[v].addEventListener("click", function () {
        news[v].classList.toggle("active");
    });

	news[v].addEventListener("click", function () {
    	news[v].classList.remove("active");
	});
}	
