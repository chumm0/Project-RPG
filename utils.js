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

function storeObject(varName, varObj){
  var objString = JSON.stringify(varObj);
  localStorage.setItem(varName, objString);
}
