function generatePoliticalEntities(){
  alert("1");
  var maxStates = getRandomInt(7) + 4;
  alert("in");
  var kingdomsList = createStates(maxStates, StateTier.kingdom);
  alert("out");
  storeObject("kingdomsList", kingdomsList);
  alert("store");
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
  var kingdomsList = parseStatesList("kingdomsList", null);
  var str = "";
  alert("in");
  for (var kingdomNum = 0; kingdomNum < kingdomsList.length; kingdomNum++){
    var currentKingdom = kingdomsList[kingdomNum];
  alert("before parse");
    var duchyList = parseStatesList("", currentKingdom.getDirectVassals());
  alert("after parse");
    str += currentKingdom.printState() + " Here are its direct vassals: <br><br>";
    alert("going to duchy for loop");
    for (var duchyNum = 0; duchyNum < duchyList.length; duchyNum++){
      var currentDuchy = duchyList[duchyNum];
      var countyList = parseStatesList("", currentDuchy.getDirectVassals());
      str += currentDuchy.printState() + " Here are its direct vassals: <br><br>";
    alert("going to county for loop");
      for (var countyNum = 0; countyNum < countyList.length; countyNum++){
        var currentCounty = countyList[countyNum];
        str += currentCounty.printState() + "<br>";
      }
      
      str += "<br>";
    }
    
    str + = "<br>";
  
  var printElement = document.getElementsByClassName("print")[0];
  printElement.innerHTML = str;
}

function parseStatesList(varName, varObj){
  var statesListDeserialized = [];
  var statesList = [];
  
  if (varObj == null){
    statesListDeserialized = JSON.parse(localStorage.getItem(varName) || "[]");
  }
  else{
    statesListDeserialized = varObj;
  }
  
  for (var i = 0; i < statesListDeserialized.length; i++){
    var state = new State(statesListDeserialized[i].name, statesListDeserialized[i].stateTier, statesListDeserialized[i].directVassals);
    statesList.push(state);
  }
  
  return statesList;
}
