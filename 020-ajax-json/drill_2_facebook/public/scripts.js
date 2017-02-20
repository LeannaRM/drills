window.addEventListener("load", function (){
	makeRequest('GET','/data',function(result){
		data = JSON.parse(result);
		createPostOutline(data);
		createPostCommentsHTML(data);
		createEventslisteners();
	});
});


function createEventslisteners(){
	addClickListenerToClassEach("action--like",likeUnlike);
	addClickListenerToClassEach("action--unlike",likeUnlike);
	addClickListenerToClassEach("action--reply",openReplies);
	addClickListenerToClassEach("action--share",shareModal);
	addClickListenerToClassEach("name",nameModal);
	addClickListenerToClassEach("action--submitcomment",makeComment);
	addClickListenerToClassEach("action--comment",makeFocus);
	addClickListenerToClassEach("modal__close",closeModal);
	addClickListenerToClassEach("modal",closeModal);
};

function createPostOutline(data) {
	createPostInfoHTML(data);
	commentsDiv = "<div class='post__comments'></div>"
	document.getElementsByClassName('post__details')[0].insertAdjacentHTML('beforeend', commentsDiv);
	createCommentBoxHTML();
};

function createPostInfoHTML(data) {
	var postInfoHTML = "<div class='post__info'>";
	var numLikes = data["post"]["postInfo"]["numberLikes"];
	var numComments = data["post"]["postInfo"]["numberComments"];
	postInfoHTML += "<span>" + numLikes + " likes</span>";
	postInfoHTML += "<span>&nbsp" + numComments + " comments</span></div>";
	document.getElementsByClassName('post__details')[0].insertAdjacentHTML('beforeend', postInfoHTML);
};

function createCommentBoxHTML() {
	var mainCommentBoxHTML = "<div class='commentForm media'>";
	mainCommentBoxHTML += "<img src='images/user.png' class='profilePhoto'>";
    mainCommentBoxHTML += "<div class='media__info'>";
    mainCommentBoxHTML += "<form action='#' method='post'>";
    mainCommentBoxHTML += "<textarea name='comment'></textarea>";
    mainCommentBoxHTML += "<input type='submit' class='action--submitcomment maincomment'>";
    mainCommentBoxHTML += "</form></div></div>";
    document.getElementsByClassName('post__details')[0].insertAdjacentHTML('beforeend', mainCommentBoxHTML);
};


function createPostCommentsHTML(data) {
	commentsArray = data["post"]["postComments"];
	for (var i=0; i < commentsArray.length; i++) {
		var name = commentsArray[i]["commenterName"];
		var numFriends = commentsArray[i]["numberFriends"].toString();
		var numReplies = commentsArray[i]["numberReplies"].toString();

		var htmltoInsert = "<div class='comment media'>";
		htmltoInsert += "<img src=" + commentsArray[i]["profilePhoto"] + " class='profilePhoto'>";
		htmltoInsert += "<div class='media__info'>";
		htmltoInsert += "<a href='#' class = 'name' data-friends =" + numFriends + ">" + name + "</a>";
		htmltoInsert += "&nbsp" + commentsArray[i]["commentText"];
		htmltoInsert += "<div class='comment__info'>";
		htmltoInsert += "<a href='#' class='action action--like' >Like</a>";
		htmltoInsert += "<a href='#' class='action action--unlike' style='display:none'>Unlike</a>";
		htmltoInsert += "&nbsp <a href='#' class='action action--reply'>" + numReplies + " replies</a>";
		htmltoInsert += "&nbsp <span>" + commentsArray[i]["numberLikes"].toString() + " likes</span>";
		htmltoInsert += "&nbsp" + commentsArray[i]["commentTime"] + "</div>";
		htmltoInsert += "<div class='replies' style='display: none'></div></div></div>" 

        document.getElementsByClassName('post__comments')[0].insertAdjacentHTML('beforeend', htmltoInsert);
        repliesArray = commentsArray[0]["replies"];
        if (repliesArray != []) {
        	createReplyCommentsHTML(repliesArray, [i]);
        };
    };
};


function createReplyCommentsHTML(repliesArray, i_array) {
	commentnumber = i_array[0];
	mainRepliesDiv = document.getElementsByClassName("post__comments")[0].children[commentnumber].getElementsByClassName("replies")[0];
	for (var j=0; j < repliesArray.length; j++) {
		var name = repliesArray[j]["replyName"];
		var numFriends = repliesArray[j]["numberFriends"].toString();
		var numReplies = repliesArray[j]["numberReplies"];

		htmltoInsert = "<div class='comment media'>";
	    htmltoInsert += "<img src=" + repliesArray[j]["profilePhoto"] +" class='profilePhoto'>";
	    htmltoInsert += "<div class='media__info'>";
	    htmltoInsert += "<a href='#' class = 'name' data-friends =" + numFriends + ">" + name + "</a>";
	    htmltoInsert += "&nbsp " + repliesArray[j]["replyText"];
	    htmltoInsert += "<div class='comment__info'>";
	    htmltoInsert += "<a href='#' class='action action--like'>Like</a>";
	    htmltoInsert += "<a href='#' class='action action--unlike' style='display:none'>Unlike</a>";
	    if (numReplies == 0) {
			htmltoInsert += "&nbsp <a href='#' class='action action--reply'>Reply</a>";
	    } else {
	    	htmltoInsert += "&nbsp <a href='#' class='action action--reply'>" + numReplies.toString() + " replies</a>";
	    }
	    htmltoInsert += "&nbsp <span>" + repliesArray[j]["numberLikes"].toString() + " likes</span>";
	    htmltoInsert += "&nbsp " + repliesArray[j]["replyTime"] + "</div>";
	    htmltoInsert += "<div class='replies' style='display: none'></div></div></div>";

		if (i_array.length == 1) {
			mainRepliesDiv.insertAdjacentHTML('beforeend', htmltoInsert);
		} else if (i_array.length == 2) {
			replynumber = i_array[1];
			replyToReplyDiv = mainRepliesDiv.getElementsByClassName("replies")[replynumber];
			replyToReplyDiv.insertAdjacentHTML('beforeend', htmltoInsert);
		}

		var replyToReplyArray = repliesArray[j]["replies"];
	    if (replyToReplyArray != []) {
    		createReplyCommentsHTML(replyToReplyArray, [commentnumber,j]);
    	};
	};
	if (i_array.length == 1) {
		makeCommentForm();
	}
};

function makeCommentForm() {
	var formhtml = "<div class='commentForm media'>";
	formhtml += "<img src='images/user.png' class='profilePhoto'>";
	formhtml += "<div class='media__info'>";
    formhtml += "<form action='#'' method='post'>";
    formhtml += "<textarea name='comment'></textarea>";
    formhtml += "<input type='submit' class='action--submitcomment'></form></div></div></div>";
    mainRepliesDiv.insertAdjacentHTML('beforeend', formhtml);
};





