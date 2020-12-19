//Variables
var variableNames = [ 'firstname', 'lastname', 'gender' ];
var skillVariableNames = [ 'combat', 'intelligence', 'social', 'skillpoints' ]

function resetVariables(){
  localStorage.clear();
  
  localStorage[variableNames[0]] = 'Unknown';
  localStorage[variableNames[1]] = 'Name';
  localStorage[variableNames[2]] = 1
  
  localStorage[skillVariableNames[0]] = 0;
  localStorage[skillVariableNames[1]] = 0;
  localStorage[skillVariableNames[2]] = 0;
  localStorage[skillVariableNames[3]] = 5;
}

function setVariable(varName, value){
  localStorage[varName] = value;
}

function getVariable(varName){
  return localStorage[varName];
}

function addToVariable(varName, value, linkNum){
  var varAsInt = parseInt(localStorage[varName]);
  localStorage[varName] = varAsInt + value;
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
}

function initializePage(){
  updatePageText();
}
