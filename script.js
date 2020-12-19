function resetVariables(){
  localStorage.clear();
  
  var player = new Character("Unknown", "Name", Gender.male, 0, 0, 0, Rank.peasant, 0);
  localStorage.setItem("player", JSON.stringify(player));
}

function updatePageText(){
  var body = document.getElementById('svbanner').parentNode;
  var pChildren = body.getElementsByTagName('p');
  
  for (var i = 0; i < pChildren.length; i++)
  { 
    updateVariableText(pChildren[i]);
  }
}

function updateVariableText(pChild){
  var player = parseCharacter("player");
  var str = pChild.innerHTML;
  var newStr = str;
  
  newStr = newStr.replace(new RegExp('#firstname', 'g'), player.getFirstname());
  newStr = newStr.replace(new RegExp('#lastname', 'g'), player.getHousename());
    
  if (player.getGender() == Gender.male){
    newStr = newStr.replace(new RegExp('#gender', 'g'), 'boy');
  }
  else{
    newStr = newStr.replace(new RegExp('#gender', 'g'), 'girl');
  }
  
  newStr = newStr.replace(new RegExp('#combat', 'g'), player.getCombat());
  newStr = newStr.replace(new RegExp('#intelligence', 'g'), player.getIntelligence());
  newStr = newStr.replace(new RegExp('#social', 'g'), player.getSocial());
    
  pChild.innerHTML = newStr;
}

function updateVariableHTMLText(){
  var player = parseCharacter("player");
  
  var combatElements = document.getElementsByClassName("combat");
  for(var i = 0; i < combatElements.length; i++){
    combatElements[i].innerHTML = player.getCombat();
  }
  
  var intelligenceElements = document.getElementsByClassName("intelligence");
  for(var i = 0; i < intelligenceElements.length; i++){
    intelligenceElements[i].innerHTML = player.getIntelligence();
  }
  
  var socialElements = document.getElementsByClassName("social");
  for(var i = 0; i < socialElements.length; i++){
    socialElements[i].innerHTML = player.getSocial();
  }
}

function initializePage(){
  updatePageText();
}
