var generatedCharacters = [];

function printGeneratedCharacters(){
  for (var i = 0; i < 5; i++){
    alert(generatedCharacters[i].getFirstName() + " " + generatedCharacters[i].getHouseName() + " " + generatedCharacters[i].getRank());
  }
}
