function myMap() {
	var mapOptions = {
		 center: new google.maps.LatLng(-33.439, 151.347),
		 zoom: 17,
		 mapTypeId: google.maps.MapTypeId.HYBRID
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	}