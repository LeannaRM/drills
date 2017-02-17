window.addEventListener("load", function (){

	function createEventslisteners(){
		addClickListenerToClassEach("action--like",likeUnlike)
		addClickListenerToClassEach("action--unlike",likeUnlike)
		addClickListenerToClassEach("action--reply",openReplies)
		addClickListenerToClassEach("action--share",shareModal)
		addClickListenerToClassEach("name",nameModal)
		addClickListenerToClassEach("action--submitcomment",makeComment)
		addClickListenerToClassEach("action--comment",makeFocus)
		addClickListenerToClassEach("modal__close",closeModal)
		addClickListenerToClassEach("modal",closeModal)
	}
	createEventslisteners();

	function likeUnlike (){
		if (this.textContent == "Like"){ var x=1; var other = this.nextElementSibling;} 
		else {var x=-1; var other = this.previousElementSibling;}

		// show and hide "like" and "unlike" text
		this.style.display = "none";
		other.style.display = "inline-block";

		// change number of likes
		if (this.classList.contains("firstlike")){
			var numLikesString = document.getElementsByClassName("post__info")[0].children[0];
		} else {
			var numLikesString = this.parentElement.getElementsByTagName("span")[0];
		}
		var likesArray = numLikesString.textContent.split(" ");
		likesArray[0] = parseInt(likesArray[0]) + x;
		var newText = likesArray.join(" ");
		numLikesString.textContent = newText;
	}

	function openReplies(){
		replycomments = this.parentElement.parentElement.getElementsByClassName("replies")[0]
		if (replycomments.style.display == "none"){
			replycomments.style.display = "block";
		} else {
			replycomments.style.display = "none"
		}
	}

	function nameModal(){
		document.getElementsByClassName("modal")[0].style.display = "block";
		document.getElementsByClassName("modal__content")[0].style.display = "block";
		nametext = this.innerText;
		document.getElementsByClassName("modal__title")[0].innerText = nametext;
		friends = this.dataset.friends;
		body = nametext + " has " + friends + " friends";
		document.getElementsByClassName("modal__body")[0].innerText = body;
	}

	function shareModal(){
		document.getElementsByClassName("modal")[0].style.display = "block";
		document.getElementsByClassName("modal__content")[0].style.display = "block";
		nametext = this.parentElement.parentElement.children[0].children[1].children[0].innerText;
		title = "Share " + nametext +"'s post";
		document.getElementsByClassName("modal__title")[0].innerText = title;
		body = this.parentElement.parentElement.children[1].children[0].innerText;
		document.getElementsByClassName("modal__body")[0].innerText = body;
	}

	function closeModal(){
		document.getElementsByClassName("modal__content")[0].style.display = "none";
		document.getElementsByClassName("modal")[0].style.display = "none";
	}

	function makeComment(){
		var newtext = this.previousElementSibling.value
		if (newtext == ""){
			alert("You need to enter some text!")
		}
		else{
			var itm = document.getElementsByClassName("post__comments")[0].children[1];
			var cln = itm.cloneNode(true);

			if (this.classList.contains("maincomment")){
				var numComments = this.parentElement.parentElement.parentElement.parentElement.children[0].children[1];
				parentnode = document.getElementsByClassName("post__comments")[0]
				parentnode.appendChild(cln);
				var length = parentnode.children.length;
			}
			else{
				var numComments = this.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[2];
				var parentnode = this.parentElement.parentElement.parentElement.parentElement
				var length = parentnode.children.length
				parentnode.insertBefore(cln,parentnode.children[length-1])				
			}

			// change number of replies
			var numArray = numComments.textContent.split(" ");
			numArray[0] = parseInt(numArray[0]) + 1;
			var newTextnum = numArray.join(" ");
			numComments.textContent = newTextnum;

			// change comment info
			var newcommentinfo = parentnode.children[length-1].children[1];
			newcommentinfo.children[0].textContent = "Leanna";
			newcommentinfo.children[0].dataset.friends = "90";
			newcommentinfo.children[2].children[2].textContent = "Reply";
			newcommentinfo.children[2].children[3].textContent = "0 likes";
			newcommentinfo.children[1].textContent = newtext;

			createEventslisteners();
			event.preventDefault();
			this.previousElementSibling.value = "";
		}
	}
	
	function makeFocus(){
		this.parentElement.parentElement.parentElement.children[1].children[2].children[1].children[0].children[0].focus();
	}

});