randomMax = 50;
randomMin = 1;
var i = 0;
function assignM(){
   document.getElementById("number_place").innerHTML = "Free";
   buildCard();
}
function getNumber(){
   number = Math.floor(Math.random() * (randomMax - randomMin) + randomMin);
   document.getElementById("number_place").innerHTML = number; 
}


function buildCard(){
	var x = 0;
	while (x < 5) {
	number = Math.floor(Math.random() * (randomMax - randomMin) + randomMin);
    var dnode = document.createElement("div");
    var numholder = document.createTextNode(number);
    dnode.appendChild(numholder);
    document.getElementById("bingo_card").appendChild(dnode);
	x++;
	}	
}