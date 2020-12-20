//STATES

const StateTier = {
  county: 1,
  duchy: 2,
  kingdom: 3,
};
Object.freeze(StateTier);

function State(name, stateTier, directVassals){
  this.name = name;
  this.stateTier = stateTier;
  this.directVassals = directVassals;
}

State.prototype.setName = function(value){ this.name = value; }
State.prototype.getName = function(){ return this.name; }

State.prototype.getStateTier = function() { return this.stateTier; }

State.prototype.setDirectVassals = function(value){ this.directVassals = value; }
State.prototype.getDirectVassals = function(){ return this.directVassals; }

//SETTLEMENTS

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
