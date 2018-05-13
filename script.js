

document.getElementById('boat1').style.left = 0;
document.getElementById('boat2').style.left = 0;

var boat1Pos = 0;
var boat2Pos = 0;

var finsihLinePos = window.innerWidth - 210;

var raceFinsihed = false;


function startRace()
{
	stopLight();
	var stop = setInterval(function()
	{
		var randNum1 = (Math.random() * 100);
	    var randNum2 = (Math.random() * 100);

	    boat1Pos += randNum1;
		boat2Pos += randNum2;

	    boat1.style.marginLeft = (parseInt(document.getElementById('boat2').style.left, 10) + boat1Pos) + 'px';
	    boat2.style.marginLeft = (parseInt(document.getElementById('boat2').style.left, 10) + boat2Pos) + 'px';

	    if (boat1Pos >= finsihLinePos) {
	    	raceFinsihed = true;
	    	stopLight("boat1");
			clearInterval(stop);
    	}

    	if (boat2Pos >= finsihLinePos) {
	    	raceFinsihed = true;
	    	stopLight("boat2");
			clearInterval(stop);
    	}

	}, 500)
	
}

function stopLight(winner = ""){
	if (raceFinsihed) {

		document.getElementById("stopLight").src = "Images/RedLight.png";

		if (winner == "boat1") {
			document.getElementById("winnerDiv").style.display = "block";
			document.getElementById("winnerImg").style.display = "block";
			document.getElementById("winner").innerHTML = "Winner";
			document.getElementById("winnerImg").src = "Images/Sailboat1.png"
			setTimeout(function(){
				document.getElementById("boat1Img").src = "";
				document.getElementById("boat2Img").src = "";
			}, 500)


		}

		if (winner == "boat2") {
			document.getElementById("winnerDiv").style.display = "block";
			document.getElementById("winnerImg").style.display = "block";
			document.getElementById("winner").innerHTML = "Winner";
			document.getElementById("winnerImg").src = "Images/Sailboat2.png"
			setTimeout(function(){
				document.getElementById("boat1Img").src = "";
				document.getElementById("boat2Img").src = "";
			}, 500)

		}
	}else{
		document.getElementById("stopLight").src = "Images/GreenLight.png";
	}

}

function reset(){
	document.getElementById('boat1').style.marginLeft = 0;
	document.getElementById('boat2').style.marginLeft = 0;
	document.getElementById("winnerDiv").style.display = "block";
	document.getElementById("winner").innerHTML = "";
	document.getElementById("winnerImg").style.display = "none";
	document.getElementById("boat1Img").src = "Images/Sailboat1.png"
	document.getElementById("boat2Img").src = "Images/Sailboat2.png"

	boat1Pos = 0;
	boat2Pos = 0;
	raceFinsihed = false;

}












