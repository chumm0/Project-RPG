function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function parseCharacter(varName){
  var charDeserialized = JSON.parse(localStorage.getItem(varName));
  return new Character(charDeserialized.firstname, charDeserialized.housename, charDeserialized.gender, charDeserialized.combat, charDeserialized.intelligence, charDeserialized.rank, charDeserialized.wealth);
}

function storeCharacter(varObj){
  var str = "&quot;" + varObj + "&quot;"
  localStorage.setItem(str, JSON.stringify(varObj));
}
