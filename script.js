//Variables
function resetVariables(){
  localStorage.clear();
  localStorage['firstname'] = 'Unknown';
  localStorage['lastname'] = 'Name';
  localStorage['gender'] = 1;
  localStorage['combat'] = 0;
  localStorage['intelligence'] = 0;
  localStorage['social'] = 0;
}

function setVariable(varName, value){
  localStorage[varName] = value;
}

function getVariable(varName){
  return localStorage[varName];
}

function addToVariable(varName, value, linkNum){
  localStorage[varName] += value;
  PostBack("FollowLink", &quot;linkNum&quot;);return false;
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
  var str = pChild.innerHTML;
  var newStr = str;
    
  newStr = newStr.replace(new RegExp('#firstname', 'g'), localStorage['firstname']);
  newStr = newStr.replace(new RegExp('#lastname', 'g'), localStorage['lastname']);
    
  if (localStorage['gender'] == 1){
    newStr = newStr.replace(new RegExp('#gender', 'g'), 'boy');
  }
  else if (localStorage['gender'] == 2){
    newStr = newStr.replace(new RegExp('#gender', 'g'), 'girl');
  }
    
  pChild.innerHTML = newStr;
  
  var x = document.getElementsByClassName("combat");
  for (var i = 0; i < x.length; i++){
    x[i].innerHTML = getVariable("combat");
  }
}

function initializePage(){
  updatePageText();
}
