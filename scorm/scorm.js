// JavaScript Document

var bookmark = pipwerks.SCORM.get("cmi.location");
//SCORM Functions

var scorm = pipwerks.SCORM;
var suspendData;
var sc_count = 0;

var ansCount = 0;
var isCompleted = false;
var scoreVal = [0, 0, 0, 0, 0, 0, 0, 0];

var bContinueStatus = false;
var lastBookMarked;
//SCORM Functions


$(document).ready(function () {

	scormBroker.Init("1.2"); // initialize SCORM 1.2 

	//Remove LMS top bar
	top.document.body.rows = "0,*";

	var check = getBookmark();

	if ((check != 'null') && (check != '')) {

	}
	//console.log("check = " + check);
	window.scorm.sLocation = scormBroker.Resume();
	var sExistingSuspendData = scormBroker.GetSuspendData();
	if (sExistingSuspendData != "" && sExistingSuspendData != "null") {
		datas_index = JSON.parse(sExistingSuspendData);
	}

	//console.log("window.scorm.sLocation = " + window.scorm.sLocation);
	if ((window.scorm.sLocation != 'null') && (window.scorm.sLocation != '')) {
		$('#bookmark, #overlay').show();
		lastBookMarked = parseInt(window.scorm.sLocation);
		maxVisited = parseInt(sExistingSuspendData);
		if (typeof window.addEventListener != "undefined") {
			window.addEventListener("unload", on_unload, false);
		} else if (typeof window.attachEvent != "undefined") {
			window.attachEvent("onunload", on_unload);
		} else {
			if (window.onunload != null) {
				var oldOnunload = window.onunload;
				window.onunload = function (e) {
					oldOnunload(e);
					on_unload();
				};
			} else {

				window.onunload = on_unload();
			}
		}
	}
});

function on_unload() {
	var true_cnt = 0;
	var pg_leng;
	if (isCompleted) {
		//scormBroker.Complete('completed','1');
		scormBroker.Complete('passed');
	} else {
		scormBroker.SuccessStatus(1, 2);
		scormBroker.Complete('failed');
	}

	scormBroker.SessionTime();
	scormBroker.Save(); // commit 
	scormBroker.End();
}


function CourseStatus(sStatus) {
	// scormBroker.SessionTime();
}

function setBookmark(sLocation, maxVisited) {
	scormBroker.Location(sLocation);
	scormBroker.SuspendData(maxVisited);
	//console.log("maxVisited = " + maxVisited);

	if (typeof (Storage) !== "undefined") {
		localStorage.setItem("lastVisit", sLocation);
		localStorage.setItem("maxVisit", maxVisited);
	}
}

function getBookmark() {
	//alert(scormBroker.Resume());
	return scormBroker.Resume();
}

function setSuspendData(sSuspendData) {
	console.log("sSuspendData = " + sSuspendData);
	scormBroker.SuspendData(sSuspendData);
}

function getSuspendData() {
	//return "0_1_2_5_";
	return scormBroker.GetSuspendData();
}

function checkcompletion() {
	var bCompletion = true;
	return bCompletion;

}