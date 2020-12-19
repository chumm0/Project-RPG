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

function updateVariableHTMLText(){
  for (var i = 0; i < variableNames.length; i++){
    var x = document.getElementsByClassName(variableNames[i]);
    
    for (var j = 0; j < x.length; j++)
    {
      x[j].innerHTML = getVariable(variableNames[i]);
    }
  }
}
