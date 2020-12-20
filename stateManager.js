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
    alert(tier + " " + i);
    
    if (tier > StateTier.county){
      vassals = createStates(maxStates, tier - 1, state);
      state.setDirectVassals(vassals);
    }
    else if (tier == StateTier.county) {
      vassals = createSettlements(maxStates, state);
      alert("out2");
      state.setDirectVassals(vassals);
      alert("out3");
    }
    alert("out4");
  }
  
  alert("out5");
  
  return statesList;
}

function createSettlements(maxSettlements, liege){
  var settlementsList = [];
  alert("in");
  for (var i = 0; i < maxSettlements; i++){
    var settlementName = generateSettlementName();
    var settlementSize = getRandomInt(3) + 1;
    var importantCharacters = generateCharacters();
    var settlement = new Settlement(settlementName, 1, liege, settlementSize, importantCharacters);
    
    settlementsList.push(settlement);
  }
  alert("out1");
  
  return settlementsList;
}
