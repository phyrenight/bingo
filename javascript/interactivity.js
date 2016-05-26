var bingoArray = []
function getNumber(min, max){
   number = Math.floor(Math.random() * (max - min) + min);
   return number 
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
  getCardData();
  buildCard();
 }

function buildCard(){
    count = 1;
    for(var i = 0; i < 25; i++){
       if(count == 1 || count == 6){
        sectionNumber = "section" + i;
        section = document.createElement("section");
        section.setAttribute("id", sectionNumber);
        section.className = "row";
        document.getElementById("bingoCard").appendChild(section);
        count = 1
        }
    divNumber = "div" + i;
    div = document.createElement("div");
    div.setAttribute("id", divNumber);
    div.className = " col-sm-1 col-md-1 col-lg-1";          
    num = document.createTextNode(i);
    div.appendChild(num);
    document.getElementById(sectionNumber).appendChild(div);

          //div = "<div class='col-sm-1 col-md-1 col-lg-1 " + divNumber + "'>"
          //+ bingoArray[i] + "</div>";
          //newDiv.innerHTML = div;
          //count++;
       
    count += 1;
    }
}

