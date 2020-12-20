function initializePoliticalWorld(){
  var maxKingdoms = getRandomInt(7) + 4;
  var kingdomsList = createStates(maxKingdoms, StateTier.kingdom, null);
  storeVariable("statesList", kingdomsList);
}

function createStates(maxStates, tier, liege){
  alert(tier);
  var statesList = [];
  for (var i = 0; i < maxStates; i++){
    var stateName = generateStateName(statesList);
    var state = new State(stateName, tier, liege);
    var vassalStates = [];
    
    if (tier > StateTier.county){
      vassalStates = createStates(maxStates, tier - 1, state);
      state.setDirectVassalStates(vassalStates);
    }
    else if (tier == StateTier.county) {
      vassalStates = createSettlements(maxStates, state);
      state.setDirectVassalStates(vassalStates);
    }
    
    statesList.push(state);
  }
  
  return statesList;
}

function createSettlements(maxSettlements, liege){
  var settlementsList = [];
  
  for (var i = 0; i < maxSettlements; i++){
    var settlementName = generateSettlementName();
    var settlementSize = getRandomInt(3) + 1;
    var importantCharacters = generateCharacters();
    var settlement = new Settlement(settlementName, 1, liege, settlementSize, importantCharacters);
    
    settlementsList.push(settlement);
  }
  
  return settlementsList;
}

function printWorldPoliticalMap(){
  var statesList = parseStatesList("statesList");
  alert("parsed!");
  var str = "";
  
  for (var kingdomNum = 0; kingdomNum < statesList.length; kingdomNum++){
    var currentKingdom = statesList[kingdomNum];
    str += currentKingdom.getName() + " Kingdom has " + currentKingdom.getDirectVassals().length + " direct vassals.<br><br>";
  }
  
  var printElement = document.getElementsByClassName("print")[0];
  printElement.innerHTML = str;
}
