
var currentBeat = 1;
var runButton = document.getElementById("run-button");
        
// adding click listener

    runButton.addEventListener("click", function doBeats(){

   // find beat interval
        var bpmValue = document.getElementById('bpm').value;
        if(parseInt(bpmValue) != 0) {
            var bpm = convertBpm(parseInt(bpmValue));
            setInterval(function() {
                                // make all beat inactive
            for(var i=1; i<=4; i++) {
                document.getElementById("beat-" + i).setAttribute('class', 'beat inactive');

            }
                      
        // set current beat active
            document.getElementById("beat-" + currentBeat).setAttribute('class', 'beat active');
            nextBeat();
            }, bpm);
        }   
    }
   );       
                                // find beat interval
function convertBpm(bpmValue) {
    return 60000/bpmValue;
    }
          
                             // set currentBeat to next
function nextBeat() {
    currentBeat++;
    if(currentBeat > 4)
        currentBeat = 1;
        }  
        