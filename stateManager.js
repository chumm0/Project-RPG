function generatePoliticalEntities(){
  var maxStates = GetRandomInt(7) + 4;
  alert("before generation");
  var statesList = createStates(maxStates, StateTier.kingdom);
  storeObject("statesList", statesList);
  alert("after generation and save");
}

function createStates(maxStates, tier){
  var statesList = [];
  var directVassals = [];
  var maxVassals = GetRandomInt(7) + 4;
  
  if (tier > StateTier.county){
    for (var i = 0; i < maxStates; i++){
      var stateName = generateStateName(statesList);
      var state = new State(stateName, tier, directVassals);
      
      directVassals = createStates(maxVassals, tier - 1);
      state.setDirectVassals(directVassals);
    
      statesList.push(state);
    }
  }
  else if (tier == StateTier.county){
    directVassals = createSettlements(maxVassals);
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
    str += currentKingdom.printState() + " Here are its direct vassals: <br><br>";
    
  }
  
  var printElement = document.getElementsByClassName("print")[0];
  printElement.innerHTML = str;
}
