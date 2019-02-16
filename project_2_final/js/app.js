// Handle the student form submission
var students = [];//student array to be maintained between form submissions

var form = document.getElementById("addStudent");

form.addEventListener("submit", function(event){
    // Get form items
  
var jerseyNumber = document.getElementById("jerseyNumber").value;
    
var completions = document.getElementById("completions").value;
    
var attempts = document.getElementById("attempts").value;
  
var double = 0;//variable to determine same jersey#
  
CalculateThrowPercentage();

function CalculateThrowPercentage(){//reads form inputs into student object 
	const student = new Object();
	student.jerseyNumber =  jerseyNumber;
	student.completions =  completions;
	student.attempts =  attempts;   
	student.calculatePercentage = function(){
		return Math.round((this.completions / this.attempts) * 100);
		};
	showResults(student);
}

function showResults(student){
	var results = " ";
	for(var i = 0; i< students.length; i++){
		if(students[i].jerseyNumber == student.jerseyNumber){//determines if input has reapeated jersey#
			double = 1;
		}
	}
	
	if(student.calculatePercentage() > 100 ){//will not accept input for repeated jersey#'s or for more comp than attempts
		results = "Illegal input, please enter correct values";
		document.getElementById('results').innerHTML = "<h4>" +results +"</h4>";//displays error message
	}
	else if(double == 1){
		results = "Illegal input, cannot enter duplicate jersey number";
		document.getElementById('results').innerHTML = "<h4>" +results +"</h4>";//displays error message
	}
	else{
		students.push(student);//adds student to array of students
		var printThis = "";
		var totalAvg = 0;
		for(var i = 0; i < students.length; i++){
			printThis += "<li>#"+students[i].jerseyNumber + ": " + students[i].calculatePercentage() +"%</li>";//concats full student array to string
			totalAvg += students[i].calculatePercentage();//determines total average for total percent
		}
		var totalPerc = (totalAvg/(100 * students.length)*100);//determines total percent
		document.getElementById('results').innerHTML = "<h3>Team Stats<br></h3><h5><ul>" //outputs headers and array values
														+ printThis +"</ul></h5><h4>Total Percentage: " +totalPerc+ "%</h4>";
		}
}
	

resetForm(jerseyNumber, completions, attempts);

event.preventDefault(); // Stop the form from submitting
}, false);

// Resets the form after it's submitted

function resetForm(jerseyNumber, freethrowCompleted, freethrowAttempts) {
	jerseyNumber.value = "";
	freethrowCompleted.value = "";
	freethrowAttempts.value = "";
}
 
