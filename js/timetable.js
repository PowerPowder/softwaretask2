function readTextFile(file){
	let rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function (){
		if(rawFile.readyState === 4){
			if(rawFile.status === 200 || rawFile.status == 0){
				let allText = rawFile.responseText;
				alert(allText);
			}
		}
	}
	rawFile.send(null);
}

let timetable = {
	"class1": {
		"period": "1",
		"year": "11",
		"subject": "SD",
		"room": "14"
	},
	"class2": {
		"period": "2",
		"year": "11",
		"subject": "BS",
		"room": "1"
	},
	"class3": {
		"period": "3",
		"year": "11",
		"subject": "MM",
		"room": "28"
	},
	"class4": {
		"period": "4",
		"year": "11",
		"subject": "IP",
		"room": "28"
	},
	"class5": {
		"period": "5",
		"year": "11",
		"subject": "EN",
		"room": "40"
	},
	"class6": {
		"period": "6",
		"year": "11",
		"subject": "MA",
		"room": "35"
	},
}

let class1Row = document.getElementsByClassName("row")[0];
let class2Row = document.getElementsByClassName("row")[1];
let class3Row = document.getElementsByClassName("row")[2];
let class4Row = document.getElementsByClassName("row")[3];
let class5Row = document.getElementsByClassName("row")[4];
let class6Row = document.getElementsByClassName("row")[5];

let row1 = "<td>"+ timetable.class1.period +"</td><td>09:00am</td><td>"+ timetable.class1.subject +"</td><td>Unknown</td><td>"+ timetable.class1.room +"</td>";
let row2 = "<td>"+ timetable.class2.period +"</td><td>09:50am</td><td>"+ timetable.class2.subject +"</td><td>Unknown</td><td>"+ timetable.class2.room +"</td>";
let row3 = "<td>"+ timetable.class3.period +"</td><td>11:00am</td><td>"+ timetable.class3.subject +"</td><td>Unknown</td><td>"+ timetable.class3.room +"</td>";
let row4 = "<td>"+ timetable.class4.period +"</td><td>11:50am</td><td>"+ timetable.class4.subject +"</td><td>Unknown</td><td>"+ timetable.class4.room +"</td>";
let row5 = "<td>"+ timetable.class5.period +"</td><td>01:20pm</td><td>"+ timetable.class5.subject +"</td><td>Unknown</td><td>"+ timetable.class5.room +"</td>";
let row6 = "<td>"+ timetable.class6.period +"</td><td>2:10pm</td><td>"+ timetable.class6.subject +"</td><td>Unknown</td><td>"+ timetable.class6.room +"</td>";

class1Row.innerHTML = row1;
class2Row.innerHTML = row2;
class3Row.innerHTML = row3;
class4Row.innerHTML = row4;
class5Row.innerHTML = row5;
class6Row.innerHTML = row6;