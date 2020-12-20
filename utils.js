function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function parseCharacter(varName){
  var charDeserialized = JSON.parse(localStorage.getItem(varName));
  return new Character(charDeserialized.firstname, charDeserialized.housename, charDeserialized.gender, charDeserialized.skillpoints, charDeserialized.combat, charDeserialized.intelligence, charDeserialized.social, charDeserialized.rank, charDeserialized.wealth);
}

function parseCharactersList(charactersListDeserialized){
  var charactersList = [];
  
  for (var i = 0; i < charactersListDeserialized.length; i++){
    var character = new Character(charactersListDeserialized[i].firstname, charactersListDeserialized[i].housename, charactersListDeserialized[i].gender, charactersListDeserialized[i].skillpoints, charactersListDeserialized[i].combat, charactersListDeserialized[i].intelligence, charactersListDeserialized[i].social, charactersListDeserialized[i].rank, charactersListDeserialized[i].wealth);
    charactersList.push(character);
  }
  
  return charactersList;
}

function parseSettlementsList(settlementsListDeserialized){
  var settlementsList = [];
  
  for (var i = 0; i < settlementsListDeserialized.length; i++){
    var settlement = new Settlement(settlementsListDeserialized[i].name, settlementsListDeserialized[i].size, settlementsListDeserialized[i].importantCharacters);
    settlementsList.push(settlement);
  }
  
  return settlementsList;
}

function parseStatesList(varName){
  var statesListDeserialized = JSON.parse(localStorage.getItem(varName) || "[]");
  var statesList = [];
  alert("before:" + statesListDeserialized[0].directVassalStates);
  for (var i = 0; i < statesListDeserialized.length; i++){
    var state = new State(statesListDeserialized[i].name, statesListDeserialized[i].stateTier, statesListDeserialized[i].directLiegeState);
  alert("after:" + statesListDeserialized[0].directVassalStates);
    state.setDirectVassalStates(statesListDeserialized[i].directVassalStates);
    statesList.push(state);
  }
  
  return statesList;
}

function storeVariable(varName, varObj){
  var objString = JSON.stringify(varObj);
  localStorage.setItem(varName, objString);
}

function storeCyclicObject(varName, varObj){ 
  var cache = [];
  
  var objString = JSON.stringify(varObj, function(key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  cache = null; // Enable garbage collection
  
  localStorage.setItem(varName, objString);
}
