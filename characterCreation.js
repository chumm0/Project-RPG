function addToVariableWithButton(varName, value, linkNum){
  addToVariable(varName, value);
  PostBack('FollowLink', '2');
  return false;
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
