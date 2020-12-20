function initializePoliticalWorld(){
  var kingdomsList = [];
  
  for (var i = 0; i < getRandomInt(7) + 3; i++){
    var kingdom = new State("name", StateTier.kingdom, null);
    var duchiesList = [];
    
    for (var j = 0; j < getRandomInt(7) + 3; j++){
      var duchy = new State("name", StateTier.duchy, kingdom);
      var countiesList = [];
      
      for (var k = 0; k < getRandomInt(7) + 3; k++){
        var county = new State("name", StateTier.county, duchy);
        var settlementsList = [];
        
        for (var z = 0; z < getRandomInt(7) + 3; z++){
          var settlement = new State("name", StateTier.settlement, county);
          
          settlementsList.push(settlement);
        }
        
        countiesList.push(county);
        county.directVassals = countiesList;
      }
      
      duchiesList.push(duchy);
      duchy.directVassals = duchiesList;
    }
    
    kingdomsList.push(kingdom);
    kingdom.directVassals = kingdomsList;
  }
  alert("1");
  storeCyclicObject("kingdomsList", kingdomsList);
  alert("2");
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
  var str = "";
  
  for (var kingdomNum = 0; kingdomNum < statesList.length; kingdomNum++){
    var currentKingdom = statesList[kingdomNum];
    str += currentKingdom.getName() + " Kingdom has " + currentKingdom.getDirectVassals().length + " direct vassals.<br><br>";
  }
  
  var printElement = document.getElementsByClassName("print")[0];
  printElement.innerHTML = str;
}
