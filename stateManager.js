function initializeStates(){
  var statesList = [];
  var numOfStates = getRandomInt(3) + 1; // at least 1 but no more than 3
  for (var stateCounter = 0; stateCounter < numOfStates; stateCounter++){ // for each state
    var settlementsList = [];
    var numOfSettlements = getRandomInt(5) + 1; // at least 1 but no more than 5
    
    for (var settlementCounter = 0; settlementCounter < numOfSettlements; settlementCounter++){ // make settlements
      var settlementName = generateSettlementName();
      var settlementSize = getRandomInt(3) + 1;
      var settlement = new Settlement(settlementName, settlementSize);
      
      settlementsList.push(settlement);
    }
    
    var stateName = generateStateName();
    var state = new State(stateName, settlementsList)
    statesList.push(state);
  }
  alert("List Before: " + statesList.length);
  storeVariable("statesList", statesList);
}

function printStates(){
  var statesList = parseStatesList("statesList");
  alert("List After: " + statesList.length);
  var str = "States:\n";
  for (var i = 0; i < statesList.length; i++){
    alert("State:" + statesList[i].getName());
    //str += statesList[i].getName();
  }
  
  alert(str);
}
