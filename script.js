//Variables
function resetVariables(){
  localStorage.clear();
  localStorage['firstname'] = 'Unknown';
  localStorage['lastname'] = '';
  localStorage['gender'] = 1;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

function showScreen(){
  setTimeout(function(){document.body.style.opacity="100";},100);
}

function embedScriptIntoHead(){
  var header = document.getElementsByTagName('head')[0];
  var mainS = document.createElement('script');
  mainS.type = 'text/javascript';
  mainS.src = 'https://chumm0.github.io/Project-RPG/script.js';
  
  header.append(mainS);
}

function initializePage
alert("YAA");
  embedScriptIntoHead();
  //addCSS();
  addDefaultButtons();
  displayVariableText();
  addLoadEvent(showScreen);
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

function addCSS(){
  var element = document.createElement("link");
  element.setAttribute("rel", "stylesheet");
  element.setAttribute("type", "text/css");
  element.setAttribute("href", "https://codepen.io/jordanvang/pen/wvMzmoz.css");
  document.getElementsByTagName("head")[0].appendChild(element);
}

function setVariable(variable, value){
  localStorage[variable] = value;
}

function addToVariable(variable, value){
  var num = parseInt(localStorage[variable]) + value;
  localStorage[variable] = num;
}

function clearSVBanner(){
  var list = document.getElementById('svbanner').getElementsByTagName('ul')[0];
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  
  return list;
}

function checkStatsFunc(){
  PostBack('FollowLink','1');
  return false;
}

function addDefaultButtons(){
  var list = clearSVBanner();
  
  var stats = document.createElement('LI');
  stats.id = 'checkStats';
  var statsLink = document.createElement('A');
  statsLink.onclick = checkStatsFunc;
  statsLink.href = '#';
  statsLink.innerHTML = 'Stats';
  stats.appendChild(statsLink);
  
  list.prepend(stats);
}

function addReturnToGameButton(){
  var list = clearSVBanner();
  
  var returnToGame = document.createElement('LI');
  returnToGame.id = 'returnToGame';
  var returnToGameLink = document.createElement('A');
  returnToGameLink.href = 'javascript: history.go(-1)';
  returnToGameLink.innerHTML = 'Return To Game';
  returnToGame.appendChild(returnToGameLink);
  
  list.prepend(returnToGame);
}

function removeNoLinkText(){
  addLoadEvent(function() {
   var list = document.getElementsByClassName('smallerText');
   var element = list[0];
   element.parentNode.removeChild(element);
  });
}
