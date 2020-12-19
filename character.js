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
  constructor(firstname, housename, gender, rank, combat, intelligence, social){
    this.firstname = firstname;
    this.housename = housename;
    this.gender = gender;
    this.rank = rank;
    
    this.combat = combat;
    this.intelligence = intelligence;
    this.social = social;
   }
  
  getFirstName() { return this.firstname; }
  getHouseName() { return this.housename; }
  getGender() { return this.gender; }
  getRank() { return this.rank; }
  
  getCombat() { return this.combat; }
  getIntelligence() { return this.intelligence; }
  getSocial() { return this.social }
}
