function initializePoliticalWorld(){
  alert("start");
  var maxKingdoms = getRandomInt(7) + 4;
  var kingdomsList = createState(maxKingdoms, StateTier.kingdom, null);
  alert("done");
}

function createState(maxStates, tier, liege){
  var statesList = [];
  
  for (var i = 0; i < maxStates; i++){
    var stateName = generateStateName();
    var state = new State(stateName, tier, liege);
    
    var vassals = [];
    if (tier > 2){
      for (var j = 0; j < maxStates; j++){
        var vassal = createState(maxStates, tier - 1, state);
        vassals.push(vassal);
      }
      
      state.setDirectVassals(vassals);
    }
    else if (tier == 1){
      createSettlements(maxStates, state);
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
}
