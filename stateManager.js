function generatePoliticalEntities(){
  var maxStates = getRandomInt(7) + 4;
  var kingdomsList = createStates(maxStates, StateTier.kingdom);
  storeObject("kingdomsList", kingdomsList);
}

function createStates(maxStates, tier){
  var statesList = [];
  var directVassals = [];
  var maxVassals = getRandomInt(7) + 4;
  
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
  var statesList = parseStatesListFromStorage("statesList");
  var str = "";
  
  for (var kingdomNum = 0; kingdomNum < statesList.length; kingdomNum++){
    var currentKingdom = statesList[kingdomNum];
    var duchyList = parseStatesList(
    str += currentKingdom.printState() + " Here are its direct vassals: <br><br>";
    
    for (var duchyNum = 0; duchyNum < 
    alert(currentKingdom.getVassals()[0].printState());
  }
  
  var printElement = document.getElementsByClassName("print")[0];
  printElement.innerHTML = str;
}

function parseStatesList(varObj){
  var statesListDeserialized = JSON.parse(varObj);
  var statesList = [];
  
  for (var i = 0; i < statesListDeserialized.length; i++){
    var state = new State(statesListDeserialized[i].name, statesListDeserialized[i].stateTier, statesListDeserialized[i].directVassals);
    statesList.push(state);
  }
  
  return statesList;
}
