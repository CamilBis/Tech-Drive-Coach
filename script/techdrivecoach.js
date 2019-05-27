/* INIT VARIABLES */
let orangeGoalAllie = 0;
let mauveGoalAllie = 0;
let vertGoalAllie = 0;
let orangeGoalOpp = 0;
let mauveGoalOpp = 0;
let vertGoalOpp = 0;
let orangeTower = 0;
let mauveTower = 0;
let vertTower = 0;
let totalTower = 0;

let myScore;
let oppScore;

function getMyScore() {
	return myScore;
}

function getOppScore() {
	return oppScore;
}

function setScores(autoWinner) {
	myScore = 0;
	oppScore = 0;

	if(autoWinner == "al") {
		myScore+=6;
	}
	else if(autoWinner == "opp") {
		oppScore+=6
	}

	if(orangeGoalAllie != 0) {
		myScore += orangeGoalAllie * (orangeTower + 1);
	}
	if(vertGoalAllie != 0) {
		myScore += vertGoalAllie * (vertTower + 1);
	}
	if(mauveGoalAllie != 0) {
		myScore += mauveGoalAllie * (mauveTower + 1);
	}

	document.getElementById("my-score").innerHTML = myScore;

	if(orangeGoalOpp != 0) {
		oppScore += orangeGoalOpp * (orangeTower + 1);
	}
	if(vertGoalOpp != 0) {
		oppScore += vertGoalOpp * (vertTower + 1);
	}
	if(mauveGoalOpp != 0) {
		oppScore += mauveGoalOpp * (mauveTower + 1);
	}

	document.getElementById("opp-score").innerHTML = oppScore;

}

function verify(whatToDo) {
	let actualMyScore = getMyScore();
	let actualOppScore = getOppScore();
	let afterMyScore = getMyScore(); 
	let afterOppScore = getMyScore();

	if(whatToDo == "1ot") {
		afterMyScore -= orangeGoalAllie * (orangeTower + 1);
		afterMyScore += orangeGoalAllie * (orangeTower + 1 + 1);
		afterOppScore -= orangeGoalOpp * (orangeTower + 1);
		afterOppScore += orangeGoalOpp * (orangeTower + 1 + 1);
		if(afterOppScore > afterMyScore || afterOppScore == afterMyScore || totalTower >= 7) {
			return 0;
		}
		else {
			return afterMyScore - actualMyScore;
		}
		
	}
	if(whatToDo == "1oc") {
		afterMyScore -= orangeGoalAllie * (orangeTower + 1);
		afterMyScore += (orangeGoalAllie + 1) * (orangeTower + 1 );;
		return afterMyScore - actualMyScore;
	}
	if(whatToDo == "1mt") {
		afterMyScore -= mauveGoalAllie * (mauveTower + 1);
		afterMyScore += mauveGoalAllie * (mauveTower + 1 + 1);
		afterOppScore -= mauveGoalOpp * (mauveTower + 1);
		afterOppScore += mauveGoalOpp * (mauveTower + 1 + 1);
		if(afterOppScore > afterMyScore || afterOppScore == afterMyScore || totalTower >= 7) {
			return 0;
		}
		else {
			return afterMyScore - actualMyScore;
		}
	}
	if(whatToDo == "1mc") {
		afterMyScore -= mauveGoalAllie * (mauveTower + 1);
		afterMyScore += (mauveGoalAllie + 1) * (mauveTower + 1);
		return afterMyScore - actualMyScore;
	}
	if(whatToDo == "1vt") {
		afterMyScore -= vertGoalAllie * (vertTower + 1);
		afterMyScore += vertGoalAllie * (vertTower + 1 + 1);
		afterOppScore -= vertGoalOpp * (vertTower + 1);
		afterOppScore += vertGoalOpp * (vertTower + 1 + 1);
		if(afterOppScore > afterMyScore || afterOppScore == afterMyScore || totalTower >= 7) {
			return 0;
		}
		else {
			return afterMyScore - actualMyScore;
		}
	}
	if(whatToDo == "1vc") {
		afterMyScore -= vertGoalAllie * (vertTower + 1);
		afterMyScore += (vertGoalAllie + 1) * (vertTower + 1);
		return afterMyScore - actualMyScore;
	}
}

function getAdvice() {
	let possibilities = [
		verify("1ot"),
		verify("1oc"), 
		verify("1mt"), 
		verify("1mc"), 
		verify("1vt"),
		verify("1vc")
	];
	let maxValue = Math.max.apply(null, possibilities);
	let adviceList = [];

	if(possibilities[0] == maxValue) {
		adviceList.push("Ajouter ORANGE sur TOWER");
	}
	if(possibilities[1] == maxValue) {
		adviceList.push("Ajouter ORANGE dans GOAL");
	}
	if(possibilities[2] == maxValue) {
		adviceList.push("Ajouter MAUVE dans TOWER");
	}
	if(possibilities[3] == maxValue) {
		adviceList.push("Ajouter MAUVE dans GOAL");
	}
	if(possibilities[4] == maxValue) {
		adviceList.push("Ajouter VERT dans TOWER");
	}
	if(possibilities[5] == maxValue) {
		adviceList.push("Ajouter VERT dans GOAL");
	}

	console.log(adviceList);
	let messageAdvice = "";

	let lengthAdiveList = adviceList.length;

	for(var i = 0; i < lengthAdiveList; i++) {
		messageAdvice += adviceList[i] + "<br>";
	}

	console.log(messageAdvice);

	document.getElementById("conseil").innerHTML = messageAdvice;
}

$(function() {

	/* INIT COMPTEURS */
	document.getElementById("indicateur-1").innerHTML = orangeGoalAllie;
	document.getElementById("indicateur-2").innerHTML = mauveGoalAllie;
	document.getElementById("indicateur-3").innerHTML = vertGoalAllie;
	document.getElementById("indicateur-4").innerHTML = orangeGoalOpp;
	document.getElementById("indicateur-5").innerHTML = mauveGoalOpp;
	document.getElementById("indicateur-6").innerHTML = vertGoalOpp;
	document.getElementById("indicateur-7").innerHTML = orangeTower;
	document.getElementById("indicateur-8").innerHTML = mauveTower;
	document.getElementById("indicateur-9").innerHTML = vertTower;
	document.getElementById("my-score").innerHTML = 0;
	document.getElementById("opp-score").innerHTML = 0;

	/* BOUTONS */
	$("#up-button-1").click(function() {
		orangeGoalAllie++;
		document.getElementById("indicateur-1").innerHTML = orangeGoalAllie;
		setScores("");
	});
	$("#down-button-1").click(function() {
		if(orangeGoalAllie > 0) {
			orangeGoalAllie--;
			document.getElementById("indicateur-1").innerHTML = orangeGoalAllie;
			setScores("");
		}
	});
	// -------------------------------
	$("#up-button-2").click(function() {
		mauveGoalAllie++;
		document.getElementById("indicateur-2").innerHTML = mauveGoalAllie;
		setScores("");
	});
	$("#down-button-2").click(function() {
		if(mauveGoalAllie > 0) {
			mauveGoalAllie--;
			document.getElementById("indicateur-2").innerHTML = mauveGoalAllie;
			setScores("");
		}
	});
	// -------------------------------
	$("#up-button-3").click(function() {
		vertGoalAllie++;
		document.getElementById("indicateur-3").innerHTML = vertGoalAllie;
		setScores("");
	});
	$("#down-button-3").click(function() {
		if(vertGoalAllie > 0) {
			vertGoalAllie--;
			document.getElementById("indicateur-3").innerHTML = vertGoalAllie;
			setScores("");
		}
	});
	// -------------------------------
	$("#up-button-4").click(function() {
		orangeGoalOpp++;
		document.getElementById("indicateur-4").innerHTML = orangeGoalOpp;
		setScores("");
	});
	$("#down-button-4").click(function() {
		if(orangeGoalOpp > 0) {
			orangeGoalOpp--;
			document.getElementById("indicateur-4").innerHTML = orangeGoalOpp;
			setScores("");
		}
	});
	// -------------------------------
	$("#up-button-5").click(function() {
		mauveGoalOpp++;
		document.getElementById("indicateur-5").innerHTML = mauveGoalOpp;
		setScores("");
	});
	$("#down-button-5").click(function() {
		if(mauveGoalOpp > 0) {
			mauveGoalOpp--;
			document.getElementById("indicateur-5").innerHTML = mauveGoalOpp;
			setScores("");
		}
	});
	// -------------------------------
	$("#up-button-6").click(function() {
		vertGoalOpp++;
		document.getElementById("indicateur-6").innerHTML = vertGoalOpp;
		setScores("");
	});
	$("#down-button-6").click(function() {
		if(vertGoalOpp > 0) {
			vertGoalOpp--;
			document.getElementById("indicateur-6").innerHTML = vertGoalOpp;
			setScores("");
		}
	});
	// -------------------------------
	$("#up-button-7").click(function() {
		if(totalTower < 7) {
			totalTower++;
			orangeTower++;
			document.getElementById("indicateur-7").innerHTML = orangeTower;
			setScores("");
		}
	});
	$("#down-button-7").click(function() {
		if(orangeTower > 0) {
			totalTower--;
			orangeTower--;
			document.getElementById("indicateur-7").innerHTML = orangeTower;
			setScores("");
		}
	});
	// -------------------------------
	$("#up-button-8").click(function() {
		if(totalTower < 7) {
			totalTower++;
			mauveTower++;
			document.getElementById("indicateur-8").innerHTML = mauveTower;
			setScores("");
		}
	});
	$("#down-button-8").click(function() {
		if(mauveTower > 0) {
			totalTower--;
			mauveTower--;
			document.getElementById("indicateur-8").innerHTML = mauveTower;
			setScores("");
		}
	});
	// -------------------------------
	$("#up-button-9").click(function() {
		if(totalTower < 7) {
			totalTower++;
			vertTower++;
			document.getElementById("indicateur-9").innerHTML = vertTower;
			setScores("");
		}
	});
	$("#down-button-9").click(function() {
		if(vertTower > 0) {
			totalTower--;
			vertTower--;
			document.getElementById("indicateur-9").innerHTML = vertTower;
			setScores("");
		}
	});
	// -------------------------------

	$("#auto-winner-button-ally").click(function(){
    	$("#autoWinnerCase").empty();
    	$("#autoWinnerCase").css("background", "darkgray");
    	setScores("al");
  	});
  	$("#auto-winner-button-opp").click(function(){
    	$("#autoWinnerCase").empty();
    	$("#autoWinnerCase").css("background", "darkgray");
    	setScores("opp");
   	});
  	$(".all-buttons").click(function() {
  		getAdvice();
  	});
});