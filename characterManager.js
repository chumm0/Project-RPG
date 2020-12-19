var mainAdvisor;

function generateMainAdvisor(){
  var gender = generateRandomGender();
  mainAdvisor = new Character(generateFirstName(gender), generateHouseName(), gender, 0, 1, 1, 2, Rank.peasant, 0);
}
