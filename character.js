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
  constructor(){
    
  }
  
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
  
  setFirstName(firstname) { this.firstname = firstname; alert(firstname);}
  getFirstName() { return this.firstname; }
  
  setHouseName(housename) { this.housename = housename; }
  getHouseName() { return this.housename; }
  
  setGender(gender) { this.gender = gender; }
  getGender() { return this.gender; }
  
  setCombat(combat) { this.combat = combat; }
  getCombat() { return this.combat; }
  
  setIntelligence(intelligence) { this.intelligence = intelligence; }
  getIntelligence() { return this.intelligence; }
  
  setSocial(social) { this.social = social; }
  getSocial() { return this.social }
  
  setRank(rank) { this.rank = rank; }
  getRank() { return this.rank; }
  
  getWealth(wealth) { this.wealth = wealth; }
  getWealth() { return this.wealth; }
}
