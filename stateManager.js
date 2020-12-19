function initializeStates(){
  var statesList = [];
  var numOfStates = getRandomInt(7) + 3; // at least 3 but no more than 7
  for (var stateCounter = 0; stateCounter < numOfStates; stateCounter++){ // for each state
    var settlementsList = [];
    var numOfSettlements = getRandomInt(5) + 2; // at least 2 but no more than 5
    
    for (var settlementCounter = 0; settlementCounter < numOfSettlements; settlementCounter++){ // make settlements
      var settlementName = generateSettlementName();
      var settlementSize = getRandomInt(3) + 1;
      var settlement = new Settlement(settlementName, settlementSize);
      settlement.generateImportantCharacters();
      
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
    str += currentState.getName() + " has " + currentState.getSettlements().length + " settlements! Here are the settlements:\n";
    
    for (var j = 0; j < statesList[i].getSettlements().length; j++){
      var currentSettlement = currentState.getSettlements()[j];
      str += currentSettlement.getName() + " is a " + currentSettlement.getSizeTitle() + ".\n";
    }
    
    str += "\n\n"
  }
  
  printElement.innerHTML = str;
}
