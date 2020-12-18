//Variables
function resetVariables(){
  localStorage.clear();
  localStorage['firstname'] = 'Unknown';
  localStorage['lastname'] = '';
  localStorage['gender'] = 1;
}

function initializePage(){
  alert(localStorage['firstname']);
}
