function generateRandomGender(){
  var randomNum = getRandomInt(2) + 1;
  if (randomNum == 1){
    return Gender.male;
  }
  else{
    return Gender.female;
  }
}

function generateRank(minRank, maxRank){
  var rankInt = getRandomInt(maxRank) + minRank;
  return rankInt;
}
