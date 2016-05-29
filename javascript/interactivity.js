var bingoArray = [];

function getNumber(min, max){
   /* 
      args - min: the lowest possible number to be drawn
             max: the highest possible number to be drawn
      purpose - need for building randomized game cards and for the
                randomly drawn numbers.
      returns - a random number is returned by the function.
   */
   var number = Math.floor(Math.random() * (max - min) + min);
   return number 
}

function drawNumber() {
    /* 
       purpose- This function is suppose to replicate a bingo ball
               being drawn.
    */ 
    var min = 1;
    var max = 60;
    number = getNumber(min, max);
    document.getElementById("number_place").innerHTML = number;
}

function getCardData(){
  /* 
     purpose -stores the data that will be used as
              the numbers for each space.
  */
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
  /* 
     purpose - sets up a new game by clearing the 
     screen and building the game card
  */
  clearScreen();
  getCardData();
  buildCard();
 }

function clearScreen(){
    /* 
        Clears the data from BingoArray, bingo card and the aside.
    */
    var clearDraw = ""
    document.getElementById("number_place").innerHTML = clearDraw;
    var parent = document.getElementById("bingo_Card")
    if(bingoArray.length > 1){
        for(var i = 0;i <= 20; i+=5){
            var div = "section_" + i;
            var divToRemove = document.getElementById(div);
            parent.removeChild(divToRemove);
        }
    }
}

function buildCard(){
    /* 
       Generates a bingo card using random numbers .
    */
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

function marker(divNumber){
    /*
        args - divNumber: Numbers assigned to the divs holding 
                          the randomly generated number.
        purpose - allows the user to mark the board to show
                  that the number was drawn.
    */ 
    var marker = "green";
    var div = document.getElementById(divNumber);
    div.style.backgroundcolor = marker;
}
