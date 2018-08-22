// Function which initiailises google maps
function gosfordMap() {
	// Object variable giving information to google maps
	var mapOptions = {
		 center: new google.maps.LatLng(-33.439, 151.347),
		 zoom: 17,
		 mapTypeId: google.maps.MapTypeId.HYBRID
	}
	// Instantiating map object
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	}