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

function addToPlayerSkill(skillName, value){
  var player = parseCharacter("player");
  alert("before add");
  if (skillpoints > 0){
    skillpoints--;
    switch(skillName){
      case "combat":
        player.setCombat(player.getCombat() + value);
        alert("after add");
        break;
      case "intelligence":
        player.setIntelligence(player.getIntelligence() + value);
        break;
      case "social":
        player.setSocial(player.getSocial() + value);
        break;
    }
    storeCharacter("player", player);
    updateVariableHTMLText();
  }
}

function subtractFromPlayerSkill(skillName, value){
  var player = parseCharacter("player");
  switch(skillName){
    case "combat":
      if(player.getCombat() > 0){
        player.setCombat(player.getCombat() - value);
        skillpoints++;
      }
      break;
    case "intelligence":
      if (player.getIntelligence() > 0){
        player.setIntelligence(player.getIntelligence() - value);
        skillpoints++;
      }
      break;
    case "social":
      if (player.getSocial() > 0){
        player.setSocial(player.getSocial() - value);
        skillpoints++;
      }
      break;
  }
  storeCharacter("player", player);
  updateVariableHTMLText();
}
