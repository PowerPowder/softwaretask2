// Delete Notification
var notif = document.querySelectorAll('.notif-element')
notif.forEach(btn => {
	btn.addEventListener('click', function() {
		var li = this.parentNode
		li.remove()
	})
})