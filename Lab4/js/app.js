/*global$*/

$(document).ready(function(){
	$("#next-button").click(function() {					//function called when next is pressed
		var currentPhoto = getCurrentPhoto();				//calls function to determine which photo is being displayed

		currentPhoto.fadeOut("fast", function() {			//increments to next photo
			if(currentPhoto.is(":last-child")) {			//if last photo, display first photo
				$("#slides :first-child").fadeIn("fast");
			} else {
				currentPhoto.next().fadeIn("fast");			
			}
		});
	});

	$("#prev-button").click(function() {					//function called when previous is pressed
		var currentPhoto = getCurrentPhoto();

		currentPhoto.fadeOut("fast", function() {			//decrements to previous photo
			if(currentPhoto.is(":first-child")) {			
				$("#slides :last-child").fadeIn("fast");	//if first photo, move to last photo
			} else {
				currentPhoto.prev().fadeIn("fast");
			}
		});
	});
});

function getCurrentPhoto() {
															// Get the current photo that is visible
	var numVisibles = $("#slides :visible").size();

	if(numVisibles == 0) {
		return $("#slides :first-child");
	}

	return $("#slides :visible");
}