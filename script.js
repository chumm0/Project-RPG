function resetVariables(){
  localStorage.clear();
  
  var player = new Character("Unknown", "Name", Gender.male, 0, 0, 0, Rank.noble, 0);
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
  var player = parseCharacter("player")
  var str = pChild.innerHTML;
  var newStr = str;
  alert(player.firstname);
  alert(player.getFirstname());
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

function initializePage(){
  updatePageText();
}
