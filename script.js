//Variables
function resetVariables(){
  localStorage.clear();
  localStorage['firstname'] = 'Unknown';
  localStorage['lastname'] = '';
  localStorage['gender'] = 1;
}

function embedScriptIntoHead(){
  var header = document.getElementsByTagName('head')[0];
  var mainS = document.createElement('script');
  mainS.type = 'text/javascript';
  mainS.src = 'https://chumm0.github.io/Project-RPG/script.js';
  
  header.append(mainS);
}

function displayVariableText(){
  var body = document.getElementById('svbanner').parentNode;
  var pChildren = body.getElementsByTagName('p');

  for (var i = 0; i < pChildren.length; i++)
  { 
    var str = pChildren[i].innerHTML;
    var newStr = str;
    
    newStr = newStr.replace(new RegExp('#firstname', 'g'), localStorage['firstname']);
    newStr = newStr.replace(new RegExp('#lastname', 'g'), localStorage['lastname']);
    
    if (localStorage['gender'] == 1){
      newStr = newStr.replace(new RegExp('#gender', 'g'), 'boy');
    }
    else if (localStorage['gender'] == 2){
      newStr = newStr.replace(new RegExp('#gender', 'g'), 'girl');
    }
    
    pChildren[i].innerHTML = newStr;
  }
}

function initializePage(){
  embedScriptIntoHead();
  displayVariableText();
  alert(localStorage['firstname']);
}
