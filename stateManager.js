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
  var statesList = parseStatesList("kingdomsList", null);
  var str = "";
  
  for (var kingdomNum = 0; kingdomNum < statesList.length; kingdomNum++){
    var currentKingdom = statesList[kingdomNum];
    var duchyList = parseStatesList("", currentKingdom.getDirectVassals());
    alert("after parse");
    alert(duchyList[0].getName());
    str += currentKingdom.printState() + " Here are its direct vassals: <br><br>";
  }
  
  var printElement = document.getElementsByClassName("print")[0];
  printElement.innerHTML = str;
}

function parseStatesList(varName, varObj){
  var statesListDeserialized = [];
  var statesList = [];
  
  if (varObj == null){
  alert("from storage");
    statesListDeserialized = JSON.parse(localStorage.getItem(varName) || "[]");
  }
  else{
  alert("not from storage");
    statesListDeserialized = JSON.parse(varObj);
  }
  
  for (var i = 0; i < statesListDeserialized.length; i++){
    var state = new State(statesListDeserialized[i].name, statesListDeserialized[i].stateTier, statesListDeserialized[i].directVassals);
    statesList.push(state);
  }
  
  return statesList;
}
