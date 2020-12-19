var player = new Character(getVariable("firstname"), getVariable("lastname"), getVariable("gender"), Rank.noble, getVariable("combat"), getVariable("intelligence"), getVariable("social"));

var generatedCharacters = [];

function GenerateCharacters(){
  for (int i = 0; i < 20; i++){
    var newCharacter = new Character(generateRandomName(), generateRandomName(), generateRandomGender(), Rank.noble, 0, 0, 0);
    generatedCharacters.push(newCharacter);
  }
}

function generateRandomName(){
  return "Bob"; //test
}

function generateRandomGender(){
  var randomNum = getRandomInt(2) + 1;
  if (randomNum == 1){
    return Gender.male;
  }
  else{
    return Gender.female;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
