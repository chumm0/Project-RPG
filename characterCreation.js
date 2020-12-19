var skillpoints = 5;
var player = JSON.parse(localStorage.getItem('player'));

function updatePlayerFirstName(value){
  player.setFirstName(value);
  localStorage.setItem('player', JSON.stringify(player));
}

function updatePlayerHouseName(value){
  player.setHouseName(value);
  localStorage.setItem('player', JSON.stringify(player));
}

function updatePlayerGender(value){
  player.setGender(value);
  localStorage.setItem('player', JSON.stringify(player));
}

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
  localStorage.setItem('player', JSON.stringify(player));
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
  localStorage.setItem('player', JSON.stringify(player));
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
  localStorage.setItem('player', JSON.stringify(player));
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
