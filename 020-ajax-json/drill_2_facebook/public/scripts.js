window.addEventListener("load", function (){

	createContentFromJson();

	createEventslisteners();


	

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

function createContentFromJson() {
	makeRequest('GET','/data',function(result){
		data = JSON.parse(result);
		createPostInfoHTML(data);

	});
};

function createPostInfoHTML(data) {
	debugger;

}