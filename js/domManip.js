// Number of notifications that haven't been removed
// Finds the number of elements from the 'ul' tag in notifications
let notifNum = document.getElementById('notif-num');
let numOfElements = document.getElementById("notifications").getElementsByTagName("li").length
notifNum.innerHTML = numOfElements;

// Delete Notification
// If there is an event triggered by .notif-element then its display is hidden
// *TODO* Could expand with additional information
let notifElement = document.querySelectorAll('.notif-element');
notifElement.forEach(btn => {
	btn.addEventListener('click', function() {
		let close = this.parentNode;
		close.style.display = 'none';
		// After a notification is deleted the count decrements by 1
		// The innerHTML of the initial value is overwritten
		numOfElements--;
		notifNum.innerHTML = numOfElements;
		// A check is given whether there are no notifications, if so then 'new' is removed
		if (numOfElements === 0){
			document.getElementById('new').style.display = 'none';
		}
	})
});

// let notifExpand = document.querySelectorAll('.notif-element');
// let addInfo = document.querySelectorAll('.additional-info');
// notifExpand.forEach(btn => {
// 	btn.addEventListener('click', function(){
// 		let li = this.parentNode;
// 		console.log(li)
// 		li.forEach(test => {
// 			test.addEventListener('click', function(){
// 				addInfo.style.display = 'block';
// 			});
// 		});
// 	});
// });

// function myFunction() {
// 	var test = this.parentNode;
// 	console.log(test);
// 	var x = document.querySelector(".additional-info");
// 	if (x.style.display === "none") {
// 		 x.style.display = "block";
// 	} else {
// 		 x.style.display = "none";
// 	}
// }

// let notifElement = document.querySelector(".notif-element");
// let addInfo = document.querySelectorAll(".additional-info");
// notifElement.addEventListener("click", function(){
// 	addInfo.style.display = "block";
// });