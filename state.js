//STATES

const StateTier = {
  settlement: 1,
  county: 2,
  duchy: 3,
  kingdom: 4,
};
Object.freeze(StateTier);

function State(name, stateTier, directLiegeState){
  this.name = name;
  this.stateTier = stateTier;
  this.directLiegeState = directLiegeState;
}

State.prototype.setName = function(value){ this.name = value; }
State.prototype.getName = function(){ return this.name; }

State.prototype.getStateTier = function() { return this.stateTier; }

State.prototype.setDirectLiegeState = function(value){ this.directLiegeState = value; }
State.prototype.getDirectLiegeState = function(){ return this.directLiegeState; }

State.prototype.print = function()
{
  return this.name;
}

//SETTLEMENTS

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
