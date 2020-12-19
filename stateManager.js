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
    alert("1 " + stateName);
    var state = new State(generateStateName(), settlementsList)
    alert("2");
    statesList.push(state);
  }
  localStorage.setItem("statesList", JSON.stringify(statesList));
  alert("3");
}

function printState(){
  var statesList = parseStatesList();
  var str = "States:\n";
  for (var i = 0; i < statesList.length; i++){
    str += statesList[i].getName() + " has " + statesList[i].getSettlements().length + " settlements!\n";
  }
  
  alert(str);
}
