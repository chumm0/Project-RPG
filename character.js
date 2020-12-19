const Gender = {
  male: 1,
  female: 2
};
Object.freeze(Gender);

const Rank = {
  peasant: 1,
  noble: 2,
  baron: 3,
  count: 4,
  duke: 5,
  king: 6,
  emperor: 7
};
Object.freeze(Rank);

class Character{
  constructor(firstname, housename, gender, combat, intelligence, social, rank, wealth){
    this.firstname = firstname;
    this.housename = housename;
    this.gender = gender;
    
    this.combat = combat;
    this.intelligence = intelligence;
    this.social = social;
    
    this.rank = rank;
    this.wealth = wealth;
  }
}

/*
function Character(firstname, housename, gender, combat, intelligence, social, rank, wealth){
  this.firstname = firstname;
  this.housename = housename;
  this.gender = gender;
    
  this.combat = combat;
  this.intelligence = intelligence;
  this.social = social;
    
  this.rank = rank;
  this.wealth = wealth;
}

Character.prototype.getFirstname = function(){ return this.firstname; }
Character.prototype.setFirstname = function(value) { this.firstname = value; }

Character.prototype.getHousename = function() { return this.housename; }
Character.prototype.setHousename = function(value) { this.housename = value; }

Character.prototype.getGender = function() { return this.gender; }
Character.prototype.setGender = function(value) { this.gender = value; }

Character.prototype.getCombat = function() { return this.combat; }
Character.prototype.setCombat = function(value) { this.combat = value; }

Character.prototype.getIntelligence = function() { return this.intelligence; }
Character.prototype.setIntelligence = function(value) { this.intelligence = value; }

Character.prototype.getSocial = function() { return this.social; }
Character.prototype.setSocial = function(value) { this.social = value; }

Character.prototype.getRank = function() { return this.rank; }
Character.prototype.setRank = function(value) { this.rank = value; }

Character.prototype.getWealth = function() { return this.wealth; }
Character.prototype.setWealth = function(value) { this.wealth = value; }
*/
