//Variables
function resetVariables(){
  localStorage.clear();
  localStorage['firstname'] = 'Unknown';
  localStorage['lastname'] = '';
  localStorage['gender'] = 1;
}

function updatePageText(){
  var body = document.getElementById('svbanner').parentNode;
  var pChildren = body.getElementsByTagName('p');
  
  for (var i = 0; i < pChildren.length; i++)
  { 
    //updateInputText
    updateVariableText(pChildren[i]);
  }
}

function updateInputText(){
  
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
  displayVariableText();
  alert(localStorage['firstname']);
}
