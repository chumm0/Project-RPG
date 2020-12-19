var mainAdvisor;

function generateMainAdvisor(){
  var gender = generateGender();
  mainAdvisor = new Character(generateFirstName(gender), generateHouseName(), gender, 0, 1, 1, 2, Rank.peasant, 0);
  printCharacter(mainAdvisor);
}

function generateCharacters(){
  var characters = [];
  //generate characters depending on settlement later
  for (var i = 0; i < 5; i++){
    var gender = generateGender();
    var character = new Character(generateFirstName(gender), generateHouseName(), gender, 0, getRandomInt(3) + 1, getRandomInt(3) + 1, getRandomInt(3) + 1, generateRank(Rank.peasant, Rank.duke), 0)
    characters.push(character);
  }
  
  return characters;
}

function printCharacter(character){
  var str = "Your Main Advisor: \n" + 
      character.getFirstname() + " of House " + character.getHousename() + " (" + character.getRankTitle() + ")\n" +
      "Combat: " + character.getCombat() + "\n" +
      "Intelligence: " + character.getIntelligence() + "\n" +
      "Social: " + character.getSocial();
  
  alert(str);
}
