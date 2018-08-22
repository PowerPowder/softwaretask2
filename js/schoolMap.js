// Function which gets inputs from the form in map.html
function getMapInputs(){
	// Initialise variables to ids from map.html
	let schoolMap = document.getElementById("test");
	let map = document.getElementById("map-img");
	let level = document.getElementById("level").value;
	let room = document.getElementById("room").value;

	// Convert level and room to integers so they can be read by file
	level = parseInt(level);	
	room = parseInt(room);

	// Change source of image to display appropiate level
	map = map.src = '/images/map/levels/level-' + level + '.png';

	console.log(level);
	console.log(room);
}