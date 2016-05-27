var bingoArray = []
function getNumber(min, max){
   number = Math.floor(Math.random() * (max - min) + min);
   return number 
}

function drawNumber() {
    var min = 1;
    var max = 60;
    number = getNumber(min, max);
    console.log(number);
    document.getElementById("number_place").innerHTML = number;
}

function getCardData(){
  var min = 1;
  var max = 60;

  for(var i = 0; i <= 25; i++){
    if(i == 12) {
      bingoArray[i] = "Free space";
    }
    else{
    bingoArray[i] = getNumber(min, max)
  }
}
}
function newGame(){
  bingoArray = []
  getCardData();
  buildCard();
 }

function buildCard(){
    count = 1;
    for(var i = 0; i < 25; i++){
       if(count == 1 || count == 6){
        sectionNumber = "section_" + i;
        section = document.createElement("section");
        section.setAttribute("id", sectionNumber);
        section.className = "row";
        document.getElementById("bingo_Card").appendChild(section);
        count = 1;
        }
    divNumber = "div_" + i;
    div = document.createElement("div");
    div.setAttribute("id", divNumber);
    if (count == 1){
      div.className = "col-sm-1 col-sm-offset-3 col-md-1 col-md-offset-3 col-lg-1 col-lg-offset-3 text-center";
    
    }
    else{
    div.className = "text-center col-sm-1 col-md-1 col-lg-1";          
    }
    num = document.createTextNode(bingoArray[i]);
    div.appendChild(num);
    document.getElementById(sectionNumber).appendChild(div);
    count += 1;
    }
}

