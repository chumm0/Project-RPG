const SettlementSize = {
  village: 1,
  town: 2,
  city: 3,
};
Object.freeze(SettlementSize);

function Settlement(name, size, importantCharacters){
  this.name = name;
  this.size = size;
  this.importantCharacters = importantCharacters;
}

Settlement.prototype.getName = function(){ return this.name; }
Settlement.prototype.setName = function(value) { this.name = value; }

Settlement.prototype.getSize = function(){ return this.size; }
Settlement.prototype.setSize = function(value) { this.size = value; }

Settlement.prototype.getImportantCharacters = function(value) { this.importantCharacters = value; }

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
