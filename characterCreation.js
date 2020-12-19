var skillpoints = 5;

function createPlayerCharacter(){
  var playerCharacter = new Character();
  localStorage.setItem('playerCharacter', JSON.stringify(playerCharacter));
}

function updateFN(value){
  var playerCharacter = JSON.parse(localStorage.getItem('playerCharacter'));
  playerCharacter.setFirstName(value);
  localStorage.setItem('playerCharacter', JSON.stringify(playerCharacter));
}

function updateHN(value){
  var playerCharacter = JSON.parse(localStorage.getItem('playerCharacter'));
  playerCharacter.setHouseName(value);
  localStorage.setItem('playerCharacter', JSON.stringify(playerCharacter));
}

function updateCombat(value){
  var playerCharacter = JSON.parse(localStorage.getItem('playerCharacter'));
  playerCharacter.setCombat(value);
  localStorage.setItem('playerCharacter', JSON.stringify(playerCharacter));
}

function updateIntelligence(value){
  var playerCharacter = JSON.parse(localStorage.getItem('playerCharacter'));
  playerCharacter.setIntelligence(value);
  localStorage.setItem('playerCharacter', JSON.stringify(playerCharacter));
}

function updateSocial(value){
  var playerCharacter = JSON.parse(localStorage.getItem('playerCharacter'));
  playerCharacter.setSocial(value);
  localStorage.setItem('playerCharacter', JSON.stringify(playerCharacter));
}

function addToSkill(varName, value, linkNum){
  if (value > 0){
    if (parseInt(getVariable("skillpoints")) > 0){
      addToVariable(varName, value);
      addToVariable("skillpoints", -value);
    }
  }
  else if (value < 0){
    if (parseInt(getVariable(varName)) > 0){
      addToVariable(varName, value);
      addToVariable("skillpoints", -value);
    }
  }
  
  updateSkillVariableHTMLText()
}

function updateSkillVariableHTMLText(){
  for (var i = 0; i < skillVariableNames.length; i++){
    var x = document.getElementsByClassName(skillVariableNames[i]);
    
    for (var j = 0; j < x.length; j++)
    {
      x[j].innerHTML = getVariable(skillVariableNames[i]);
    }
  }
}
