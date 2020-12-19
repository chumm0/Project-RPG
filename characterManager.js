var mainAdvisor;

function generateMainAdvisor(){
  var gender = generateRandomGender();
  mainAdvisor = new Character(generateFirstName(gender), generateHouseName(), gender, 0, 1, 1, 2, Rank.peasant, 0);
  printCharacter(mainAdvisor);
}

function printCharacter(character){
  var str = 
      character.getFirstname + " of House " + character.getLastname + " (" + character.getRankTitle() + ")]n" +
      "Combat: " + character.getCombat() + "\n" +
      "Intelligence: " + character.getIntelligence() + "\n" +
      "Social: " + character.getSocial();
  
  alert(str);
}
