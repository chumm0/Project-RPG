function initializePoliticalWorld(){
  var maxStates = getRandomInt(1) + 1;
  var statesList = createStates(maxStates, StateTier.kingdom, null);
  var state1 = new State("name1", StateTier.kingdom, null);
  var state2 = new State("name2", StateTier.duchy, state1);
  var state3 = new State("name3", StateTier.county, state2);
  var state4 = new State("name4", StateTier.county, state2);
  var state5 = new State("name4", StateTier.kingdom, null);
  var state6 = new State("name4", StateTier.duchy, state5);
  var state7 = new Settlement("name4", StateTier.settlement, state6, 1, generateCharacters());
  
  var vassals1 = [ state2, state3, state4 ];
  var vassals2 = [ state5, state6, state7 ];
  state1.setDirectVassalStates(vassals1);
  state5.setDirectVassalStates(vassals2);
  
  var stateList = [ state1, state5 ];
  storeVariable("stateList", stateList);
}

function createStates(maxStates, tier, liege){
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
    alert("s");
    alert("t");
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
