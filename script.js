//Variables
function resetVariables(){
  localStorage.clear();
  localStorage['firstname'] = 'Unknown';
  localStorage['lastname'] = '';
  localStorage['gender'] = 1;
}

function setVariable(varName, value){
  localStorage[varName] = value;
}

function updatePageText(){
  var body = document.getElementById('svbanner').parentNode;
  var pChildren = body.getElementsByTagName('p');
  
  for (var i = 0; i < pChildren.length; i++)
  { 
    updateInputText(pChildren[i]);
    updateVariableText(pChildren[i]);
  }
}

function updateInputText(pChild){
  var str = pChild.innerHTML;
  var newStr = str;
  
  var variableName = str.substring(
    str.lastIndexOf("&lt;") + 4, 
    str.lastIndexOf("&gt;")
  );
  
  if (variableName.length > 0){
    newStr = newStr.replace(new RegExp("&lt;" + variableName + "&gt;", 'g'), "");
    
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder="Type Here";
    input.onchange="setVariable(&quot;" + variableName + "&quot;, " + "this.value)";
    pChild.appendChild(input);
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
  alert(localStorage['firstname']);
}
