function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function parseCharacter(varName){
  JSON.parse(localStorage.getItem('player'));
  return player = new Character(playerDeserialized.firstname, playerDeserialized.housename, playerDeserialized.gender, playerDeserialized.combat, playerDeserialized.intelligence, playerDeserialized.rank, playerDeserialized.wealth);
}

function storeCharacter(varObj){
  var str = "&quot;" + varObje + "&quot;"
  localStorage.setItem(str, JSON.stringify(varObj));
}
