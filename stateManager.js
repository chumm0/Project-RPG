function initializeStates(){
  var statesList = [];
  var numOfStates = getRandomInt(7) + 4; // at least 2 but no more than 7
  for (var stateCounter = 0; stateCounter < numOfStates; stateCounter++){ // for each state
    var settlementsList = [];
    var numOfSettlements = getRandomInt(5) + 1; // at least 1 but no more than 5
    
    for (var settlementCounter = 0; settlementCounter < numOfSettlements; settlementCounter++){ // make settlements
      var settlementName = generateSettlementName();
      var settlementSize = getRandomInt(3) + 1;
      var settlement = new Settlement(settlementName, settlementSize);
      
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
  var str = "Randomly Generated States:\n";
  for (var i = 0; i < statesList.length; i++){
    str += statesList[i].getName() + " has " + statesList[i].getSettlements().length + " settlements!\n";
  }
  
  alert(str);
}
