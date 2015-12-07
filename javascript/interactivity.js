randomMax = 50;
randomMin = 1;
var i = 0
function assignM(){
   document.getElementById("number_place").innerHTML = "Free";
}
function getNumber(){
   number = Math.floor(Math.random() * (randomMax - randomMin) + randomMin);
   document.getElementById("number_place").innerHTML = number; 
}