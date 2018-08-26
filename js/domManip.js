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