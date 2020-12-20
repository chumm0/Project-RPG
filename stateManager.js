function initializePoliticalWorld(){
  var kingdomsList = [];
  
  for (var i = 0; i < getRandomInt(7) + 3; i++){
    var kingdom = new State("name", StateTier.kingdom, null);
    var duchiesList = [];
    
    for (var j = 0; j < getRandomInt(7) + 3; j++){
      var duchy = new State("name", StateTier.duchy, kingdom);
      var countiesList = [];
      
      for (var k = 0; k < getRandomInt(7) + 3; k++){
        var county = new State("name", StateTier.county, duchy);
        var settlementsList = [];
        
        for (var z = 0; z < getRandomInt(7) + 3; z++){
          var settlement = new State("name", StateTier.settlement, county);
          
          settlementsList.push(settlement);
        }
        
        countiesList.push(county);
        county.directVassals = countiesList;
      }
      
      duchiesList.push(duchy);
      duchy.directVassals = duchiesList;
    }
    
    kingdomsList.push(kingdom);
    kingdom.directVassals = kingdomsList;
  }
  
  storeCyclicObject("kingdomsList", kingdomsList);
}

function printWorldPoliticalMap(){
  var kingdomsList = parseStatesList("kingdomsList");
  var str = "";
  
  for (var kingdomNum = 0; kingdomNum < kingdomsList.length; kingdomNum++){
    var currentKingdom = kingdomsList[kingdomNum];
    str += currentKingdom.getName() + " Kingdom has " + currentKingdom.getDirectVassalStates().length + " direct vassals.<br><br>";
  }
  
  var printElement = document.getElementsByClassName("print")[0];
  printElement.innerHTML = str;
}
