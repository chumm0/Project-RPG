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

State.prototype.setDirectVassalStates = function(value){ this.directVassalStates = value; }
State.prototype.getDirectVassalStates = function(){ return this.directVassalStates; }
