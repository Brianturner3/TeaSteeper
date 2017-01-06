/*
Creates tea objects for green, black and herbal tea
Each object has 3 attributes; min and max steep time 
and temperature. 
*/
var black_tea = {min_time:"2",max_time: "3", temp: 97};
var green_tea = {min_time:"1",max_time:"", temp: 79};
var herbal_tea = {min_time:"4",max_time: "6", temp: 98};


document.getElementById("black_tea_min_steep").innerHTML = black_tea.min_time;
document.getElementById("black_tea_max_steep").innerHTML = black_tea.max_time;
document.getElementById("black_tea_temp").innerHTML = black_tea.temp;

/*Create a countdown timer that takes in a specified 
time in seconds and a display for the seconds and minutes
once the steep buttonis pressed.
*/
function countdown(time, secs, mins){
	var seconds = document.getElementById(secs);
	var minutes = document.getElementById(mins);
}

//Always start with the seconds at 59 and the min subtracted by 1
var min_init = 2;
var sec_init = 3;
var sec = sec_init;
var min = min_init;
var timeoutSec;
var timeoutMin;

/*If the steep button is pressed, start counters
document.getElementById("start_steeping").addEventListener("click", function steep(){
	secCounter();
	minCounter();
});
*/

//Minute Counter
function minCounter(){
	document.getElementById("black_tea_min").innerHTML = min;
	if(min == 0){
		alert("min should stop");
		stopMinTimeout();
	}
	min--;
	timeoutMin = setTimeout(minCounter,60000);
}
//Second Counter
function secCounter(){
	document.getElementById("black_tea_sec").innerHTML = sec;
	if((sec == 0) && (min ==0)){
		alert("should stop");
		stopSecTimeout();
	}
	else if((sec == 0) && (min > 0)){
		sec = 59;
		timeoutSec = setTimeout(secCounter,1000);
	}
	else if((sec > 0) && (min >= 0)){
		sec--;
		timeoutSec = setTimeout(secCounter,1000); 
	}
}
//Stop the min counter
function stopMinTimeout(){
	clearTimeout(timeoutMin);
}
//Stop the steep function
function stopSecTimeout(){
	clearTimeout(timeoutSec);
}