function generatePoliticalEntities(){
  alert("in");
  var statesList = createStates(7, StateTier.kingdom);
  storeObject("statesList", statesList);
  alert("out");
}

function createStates(maxStates, tier){
  var statesList = [];
  var directVassals = [];
  
  if (tier > StateTier.county){
    for (var i = 0; i < maxStates; i++){
      var stateName = generateStateName(statesList);
      var state = new State(stateName, tier, directVassals);
    
      directVassals = createStates(maxStates, tier - 1);
      state.setDirectVassals(directVassals);
    
      statesList.push(state);
    }
  }
  else if (tier == StateTier.county){
    directVassals = createSettlements(maxStates);
  }
  
  return statesList;
}
  
  function createSettlements(maxSettlements){
  var settlementsList = [];
  
  for (var i = 0; i < maxSettlements; i++){
    var settlementName = generateSettlementName();
    var settlementSize = getRandomInt(3) + 1;
    var importantCharacters = generateCharacters();
    var settlement = new Settlement(settlementName, settlementSize, importantCharacters);
    
    settlementsList.push(settlement);
  }
  
  return settlementsList;
}

function printPoliticalEntities(){
  var statesList = parseStatesList("statesList");
  var str = "";
  
  for (var kingdomNum = 0; kingdomNum < statesList.length; kingdomNum++){
    var currentKingdom = statesList[kingdomNum];
    str += currentKingdom.printState() + "<br><br>";
  }
  
  var printElement = document.getElementsByClassName("print")[0];
  printElement.innerHTML = str;
}
