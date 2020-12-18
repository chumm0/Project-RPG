//Variables
function resetVariables(){
  localStorage.clear();
  localStorage['firstname'] = 'Unknown';
  localStorage['lastname'] = '';
  localStorage['gender'] = 1;
  alert(localStorage['firstname']);
}

function initializePage(){
  alert(localStorage['firstname']);
}
