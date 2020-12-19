function Settlement(name, settlements){
  this.name = name;
  this.settlements = settlements;
}

Settlement.prototype.setName = function(value){ this.name = value; }
Settlement.prototype.getName = function(){ return this.name; }

Settlement.prototype.getSettlements = function(){ return this.settlements; }
