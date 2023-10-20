var pass = 50; //Pass mark ( vượt mốc )
var score = 90; //Score ( điểm số )

//Check if the user has passed
var hasPassed = score >= pass;

// Write the message into the page
var el = document.getElementById('answer');
el.innerHTML = 'Level passed : ' + hasPassed;