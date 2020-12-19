function State(name, settlements){
  this.name = name;
  this.settlements = settlements;
}

State.prototype.setName = function(value){ this.name = value; }
State.prototype.getName = function(){ return this.name; }

State.prototype.getSettlements = function(){ return this.settlements; }
