//Variables
function resetVariables(){
  localStorage.clear();
  localStorage['firstname'] = 'Unknown';
  localStorage['lastname'] = '';
  localStorage['gender'] = 1;
}

function displayVariableText(){
  var body = document.getElementById('svbanner').parentNode;
  var pChildren = body.getElementsByTagName('p');
  alert(pChildren.length);
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
  displayVariableText();
  alert(localStorage['firstname']);
}
