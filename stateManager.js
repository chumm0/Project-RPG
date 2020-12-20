function initializeStates(){
  var statesList = [];
  var numOfStates = getRandomInt(7) + 3; // at least 3 but no more than 7
  for (var stateCounter = 0; stateCounter < numOfStates; stateCounter++){ // for each state
    var settlementsList = [];
    var numOfSettlements = getRandomInt(5) + 2; // at least 2 but no more than 5
    
    for (var settlementCounter = 0; settlementCounter < numOfSettlements; settlementCounter++){ // make settlements
      var settlementName = generateSettlementName();
      var settlementSize = getRandomInt(3) + 1;
      var settlementImportantCharacters = generateCharacters();
      var settlement = new Settlement(settlementName, settlementSize, settlementImportantCharacters);
      
      settlementsList.push(settlement);
    }
    
    var stateName = generateStateName(statesList);
    var state = new State(stateName, settlementsList)
    statesList.push(state);
  }
  
  storeVariable("statesList", statesList);
}

function printStates(){
  var statesList = parseStatesList("statesList");
  var printElement = document.getElementsByClassName("print")[0];
  var str = "";
  
  for (var i = 0; i < statesList.length; i++){
    var currentState = statesList[i];
    var settlementsList = parseSettlementsList(currentState.getSettlements());
    
    str += "<b>" + currentState.getName() + " has " + settlementsList.length + " settlements! Here are the settlements:</b><br>";
    
    for (var j = 0; j < settlementsList.length; j++){
      var currentSettlement = settlementsList[j];
      var importantCharactersList = parseCharactersList(currentSettlement.getImportantCharacters());
      
      str += currentSettlement.getName() + " - Here is a list of its important characters:<br><br>";
      
      for (var k = 0; k < importantCharactersList.length; k++){
        var currentImportantCharacter = importantCharactersList[k];
        
        str += currentImportantCharacter.getFirstname() + " " + currentImportantCharacter.getHousename() + "<br>";
      }
      
      str += "<br>"
    }
    
    str += "<br><br>";
  }
  
  printElement.innerHTML = str;
}
