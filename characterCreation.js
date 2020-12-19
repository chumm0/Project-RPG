var skillpoints = 5;

function updatePlayerFirstName(value){
  var player = parseCharacter("player");
  player.firstname = value;
  //player.setFirstname(value);
  storeCharacter(player);
}

function updatePlayerHouseName(value){
  var player = parseCharacter("player");
  player.setHousename(value);
  storeCharacter(player);
}

function updatePlayerGender(value){
  var player = parseCharacter("player");
  player.setGender(value);
  storeCharacter(player);
}

function addToPlayerCombat(value){
  var player = parseCharacter("player");
  if (value > 0){
    if (skillpoints > 0){
      player.setCombat(player.getCombat() + 1);
      skillpoints--;
    }
  }
  else if (value < 0){
    if (player.getCombat() > 0){
      player.setCombat(player.getCombat() - 1);
      skillpoints++;
    }
  }
  storeCharacter(player);
  updateSkillVariableHTMLText()
}

function addToPlayerIntelligence(value){
  var player = parseCharacter("player");
  if (value > 0){
    if (skillpoints > 0){
      player.setIntelligence(player.getIntelligence() + 1);
      skillpoints--;
    }
  }
  else if (value < 0){
    if (player.getIntelligence() > 0){
      player.setIntelligence(player.getIntelligence() - 1);
      skillpoints++;
    }
  }
  storeCharacter(player);
  updateSkillVariableHTMLText()
}

function addToPlayerSocial(value){
  var player = parseCharacter("player");
  if (value > 0){
    if (skillpoints > 0){
      player.setSocial(player.getSocial() + 1);
      skillpoints--;
    }
  }
  else if (value < 0){
    if (player.getSocial() > 0){
      player.setSocial(player.getSocial() - 1);
      skillpoints++;
    }
  }
  storeCharacter(player);
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
