var skillpoints = 5;

function updatePlayerFirstName(value){
  var player = parseCharacter("player");
  player.setFirstname(value);
  storeCharacter("player", player);
}

function updatePlayerHouseName(value){
  var player = parseCharacter("player");
  player.setHousename(value);
  storeCharacter("player", player);
}

function updatePlayerGender(value){
  var player = parseCharacter("player");
  player.setGender(value);
  storeCharacter("player", player);
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
  updateVariableHTMLText()
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
  updateVariableHTMLText()
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
  updateVariableHTMLText()
}
