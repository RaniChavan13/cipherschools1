let likesCount = 0;
let viewsCount = 0;
let notificationsCount = 0;

function likeVideo() {
	likesCount++;
	document.getElementById("likes-count").textContent = likesCount;
}

function shareVideo() {
	notificationsCount++;
	alert("Video shared! You have " + notificationsCount + " new notifications.");
}

function replyToComment(button) {
	let repliesList = button.parentElement.parentElement.querySelector(".replies");
	let replyForm = document.createElement("form");
	replyForm.innerHTML = `
		<textarea name="comment" placeholder="Add a reply"></textarea>
		<button type="submit">Reply</button>
	`;
	repliesList.appendChild(replyForm);
	replyForm.addEventListener("submit", function(event) {
		event.preventDefault();
		let replyText = event.target.elements.comment.value;
		let replyItem = document.createElement("li");
		replyItem.innerHTML = `
			<div class="comment">
				<p>${replyText}</p>
				<button onclick="replyToComment(this)">Reply</button>
			</div>
		`;
		repliesList.insertBefore(replyItem, replyForm);
		event.target.reset();
	});
}

document.addEventListener("DOMContentLoaded", function() {
	viewsCount++;
	document.getElementById("views-count").textContent = viewsCount;
	
	let commentForm = document.getElementById("comment-form");
	commentForm.addEventListener("submit", function(event) {
		event.preventDefault();
		let commentText = event.target.elements.comment.value;
		let commentItem = document.createElement("li");
		commentItem.innerHTML = `
			<li>
				<div class="comment">
					<p>${commentText}</p>
					<button onclick="replyToComment(this)">Reply</button>
				</div>
				<ul class="replies"></ul>
			</li>
		`;
		document.getElementById("comments-list").appendChild(commentItem);
		event.target.reset();
	});
});