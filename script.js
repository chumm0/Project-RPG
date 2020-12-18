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
  
  var command = str.substring(
    str.lastIndexOf("&lt;") + 3, 
    str.lastIndexOf("&gt;")
  );
  
  alert(command);
  
  /*var input = document.createElement("input");
  input.type = "text";
  input.placeholder="Type Here";
  input.onchange="setVariable(&quot;" +  + "&quot;, + "  ")";
  container.appendChild(input); // put it into the DOM
  
  <input type='text' name='txt' placeholder='Type Here' onchange='setVariable(&quot;firstname&quot;, this.value)'>*/
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

function PLACEHOLDER()
{
}
