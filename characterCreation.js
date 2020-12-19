var skillpoints = 5;

function addToPlayerCombat(value){
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
  
  updateSkillVariableHTMLText()
}

function addToPlayerIntelligence(value){
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
  
  updateSkillVariableHTMLText()
}

function addToPlayerSocial(value){
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
