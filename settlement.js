const SettlementSize = {
  village: 1,
  town: 2,
  city: 3,
};
Object.freeze(SettlementSize);

function Settlement(name, stateTier, directLiegeState, size, importantCharacters){
  State.call(name, stateTier, directLiegeState);
  
  this.size = size;
  this.importantCharacters = importantCharacters;
}

Settlement.prototype.getSize = function(){ return this.size; }
Settlement.prototype.setSize = function(value) { this.size = value; }

Settlement.prototype.getImportantCharacters = function() { return this.importantCharacters; }

Settlement.prototype.getSizeTitle = function() 
{ 
  switch(this.size){
    case Rank.village:
      return "village";
    case Rank.town:
      return "town";
    case Rank.city:
      return "city";
  }
}
