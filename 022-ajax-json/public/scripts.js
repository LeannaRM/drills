window.addEventListener("load", function (){
	var submitsearch = document.getElementsByClassName("submit_button")[0];
	submitsearch.addEventListener("click", searchMovie);

	movienumber = 0;
	movielist = [];
	function searchMovie(e) {
		query = e.target.previousElementSibling.value;
		var ourRequest = new XMLHttpRequest();
		ourRequest.open('GET', "results?query=" + query, true);
		ourRequest.onload = function() {
			var result = ourRequest.responseText;
			onloadfunction(result);
		}
		ourRequest.send();
		e.preventDefault();
	};

	function onloadfunction(result) {
		data = JSON.parse(result);
		movielist = data["Search"];
		document.getElementsByClassName('results')[0].innerHTML = "";
		movienumber = 0;

		htmlToInsert = "<h1>Movie List</h1><div class='movie'></div>";
		document.getElementsByClassName('results')[0].insertAdjacentHTML('beforeend', htmlToInsert);
		createHTML(data);
		createPreviousButton();
		createNextButton();	
	};
	
	function createHTML(){
		if (movienumber >= movielist.length) {
			movienumber = movienumber - movielist.length;
		} else if (movienumber < 0){
			movienumber = movienumber + movielist.length;
		}
		htmlToInsert = "<img src=" + movielist[movienumber]["Poster"] + ">"
		htmlToInsert += "<p>" + movielist[movienumber]["Title"] + "</p>";
		document.getElementsByClassName('movie')[0].innerHTML = htmlToInsert;
	};

	function createNextButton() {
		nextbuttonHTML = "<button type='button' class='next_button'>Next</button>";
		document.getElementsByClassName('results')[0].insertAdjacentHTML('beforeend', nextbuttonHTML);
		nextTrigger = document.getElementsByClassName("next_button")[0];
		nextTrigger.addEventListener("click", nextMovie);
	};

	function createPreviousButton() {
		prevbuttonHTML = "<button type='button' class='prev_button'>Previous</button>";
		document.getElementsByClassName('results')[0].insertAdjacentHTML('beforeend', prevbuttonHTML);
		prevTrigger = document.getElementsByClassName("prev_button")[0];
		prevTrigger.addEventListener("click", previousMovie);
	};

	function nextMovie() {
		movienumber++;
		createHTML();
	}

	function previousMovie() {
		movienumber--;
		createHTML();
	}


});

// formdata = new FormData(formnode)
// fromdata.tostring - returns querystring