var generatedCharacters = [];

function printGeneratedCharacters(){
  var str = "Randomly Generated Characters:\n";
  for (var i = 0; i < generatedCharacters.length; i++){
    str += generatedCharacters[i].getFirstname() + " " + generatedCharacters[i].getHousename() + " - " + generatedCharacters[i].getRankTitle() + "\n";
  }
  
  alert(str);
}
