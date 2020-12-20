function updatePlayerFirstName(value){
  var player = parseCharacter("player");
  player.setFirstname(value);
  storeObject("player", player);
}

function updatePlayerHouseName(value){
  var player = parseCharacter("player");
  player.setHousename(value);
  storeObject("player", player);
}

function updatePlayerGender(value){
  var player = parseCharacter("player");
  player.setGender(value);
  storeObject("player", player);
}

function addToPlayerSkill(skillName, value){
  var player = parseCharacter("player");
  if (player.getSkillpoints() > 0){
    player.setSkillpoints(player.getSkillpoints() - 1);
    switch(skillName){
      case "combat":
        player.setCombat(player.getCombat() + value);
        break;
      case "intelligence":
        player.setIntelligence(player.getIntelligence() + value);
        break;
      case "social":
        player.setSocial(player.getSocial() + value);
        break;
    }
    storeObject("player", player);
    updateVariableHTMLText();
  }
}

function subtractFromPlayerSkill(skillName, value){
  var player = parseCharacter("player");
  switch(skillName){
    case "combat":
      if(player.getCombat() > 0){
        player.setCombat(player.getCombat() - value);
        player.setSkillpoints(player.getSkillpoints() + 1);
      }
      break;
    case "intelligence":
      if (player.getIntelligence() > 0){
        player.setIntelligence(player.getIntelligence() - value);
        player.setSkillpoints(player.getSkillpoints() + 1);
      }
      break;
    case "social":
      if (player.getSocial() > 0){
        player.setSocial(player.getSocial() - value);
        player.setSkillpoints(player.getSkillpoints() + 1);
      }
      break;
  }
  storeObject("player", player);
  updateVariableHTMLText();
}
