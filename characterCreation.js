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
  
  updateVariableHTMLText()
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
