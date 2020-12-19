var generatedCharacters = [];

function generateCharacters(){
  for (var i = 0; i < 20; i++){
    var newCharacter = new Character(generateRandomName(), generateRandomName(), generateRandomGender(), Rank.noble, 0, 0, 0);
    generatedCharacters.push(newCharacter);
  }
}

function printGeneratedCharacters(){
  for (var i = 0; i < 5; i++){
    alert(generatedCharacters[i].getFirstName() + " " + generatedCharacters[i].getLastName());
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
