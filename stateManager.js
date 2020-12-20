function initializePoliticalWorld(){
  alert("start");
  var maxKingdoms = getRandomInt(7) + 4;
  var kingdomsList = createStates(maxKingdoms, StateTier.kingdom, null);
  alert("done");
}

function createStates(maxStates, tier, liege){
  var statesList = [];
  
  for (var i = 0; i < maxStates; i++){
    var stateName = generateStateName(statesList);
    var state = new State(stateName, tier, liege);
    var vassals = [];
    if (tier > 2){
      vassals = createState(maxStates, tier - 1, state);
      state.setDirectVassals(vassals);
    }
    else if (tier == 2){
      alert("in");
      vassals = createSettlements(maxStates, state);
      state.setDirectVassals(vassals);
    }
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
