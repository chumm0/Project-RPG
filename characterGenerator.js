const maleNames = [
  "Lydan",
  "Syrin",
  "Ptorik",
  "Joz",
  "Varog",
  "Gethrod",
  "Hezra",
  "Feron",
  "Ophni",
  "Colborn",
  "Fintis",
  "Gatlin",
  "Jinto",
  "Hagalbar",
  "Krinn",
  "Lenox",
  "Revvyn",
  "Hodus",
  "Dimian",
  "Paskel",
  "Kontas",
  "Weston",
  "Azamarr",
  "Jather",
  "Tekren",
  "Jareth",
  "Adon",
  "Zaden",
  "Eune",
  "Graff",
  "Tez",
  "Jessop",
  "Gunnar",
  "Pike",
  "Domnhar",
  "Baske",
  "Jerrick",
  "Mavrek",
  "Riordan",
  "Wulfe",
  "Straus",
  "Tyvrik",
  "Henndar",
  "Favroe",
  "Whit",
  "Jaris",
  "Renham",
  "Kagran",
  "Lassrin",
  "Vadim",
  "Arlo",
  "Quintis",
  "Vale",
  "Caelan",
  "Yorjan",
  "Khron",
  "Ishmael",
  "Jakrin",
  "Fangar",
  "Roux",
  "Baxar",
  "Hawke",
  "Gatlen",
  "Barak",
  "Nazim",
  "Kadric",
  "Paquin",
  "Kent",
  "Moki",
  "Rankar",
  "Lothe",
  "Ryven",
  "Clawsen",
  "Pakker",
  "Embre",
  "Cassian",
  "Verssek",
  "Dagfinn",
  "Ebraheim",
  "Nesso",
  "Eldermar",
  "Rivik",
  "Rourke",
  "Barton",
  "Hemm",
  "Sarkin",
  "Blaiz",
  "Talon",
  "Agro",
  "Zagaroth",
  "Turrek",
  "Esdel",
  "Lustros",
  "Zenner",
  "Baashar",
  "Dagrod",
  "Gentar",
  "Feston"
];

const femaleNames = [
  "Syrana",
  "Resha",
  "Varin",
  "Wren",
  "Yuni",
  "Talis",
  "Kessa",
  "Magaltie",
  "Aeris",
  "Desmina",
  "Krynna",
  "Asralyn",
  "Herra",
  "Pret",
  "Kory",
  "Afia",
  "Tessel",
  "Rhiannon",
  "Zara",
  "Jesi",
  "Belen",
  "Rei",
  "Ciscra",
  "Temy",
  "Renalee",
  "Estyn",
  "Maarika",
  "Lynorr",
  "Tiv",
  "Annihya",
  "Semet",
  "Tamrin",
  "Antia",
  "Reslyn",
  "Basak",
  "Vixra",
  "Pekka",
  "Xavia",
  "Beatha",
  "Yarri",
  "Liris",
  "Sonali",
  "Razra",
  "Soko",
  "Maeve",
  "Everen",
  "Yelina",
  "Morwena",
  "Hagar",
  "Palra",
  "Elysa",
  "Sage",
  "Ketra",
  "Lynx",
  "Agama",
  "Thesra",
  "Tezani",
  "Ralia",
  "Esmee",
  "Heron",
  "Naima",
  "Rydna",
  "Sparrow",
  "Baakshi",
  "Ibera",
  "Phlox",
  "Dessa",
  "Braithe",
  "Taewen",
  "Larke",
  "Silene",
  "Phressa",
  "Esther",
  "Anika",
  "Rasy",
  "Harper",
  "Indie",
  "Vita",
  "Drusila",
  "Minha",
  "Surane",
  "Lassona",
  "Merula",
  "Kye",
  "Jonna",
  "Lyla",
  "Zet",
  "Orett",
  "Naphtalia",
  "Turi",
  "Rhays",
  "Shike",
  "Hartie",
  "Beela",
  "Leska",
  "Vemery",
  "Lunex",
  "Fidess",
  "Tisette",
  "Partha"
];

function generateCharacters(){
  for (var i = 0; i < 20; i++){
    var gender = generateRandomGender();
    var newCharacter = new Character(generateFirstName(gender), generateHouseName(), gender, Rank.noble, 0, 0, 0);
    generatedCharacters.push(newCharacter);
  }
}

function generateFirstName(gender){
  var firstName = "";
  
  if (gender == Gender.male){
    firstName = maleNames[getRandomInt(maleNames.length)];
  }
  else{
    firstName = femaleNames[getRandomInt(femaleNames.length)];
  }
  
  return firstName;
}

function generateHouseName(){
  var houseName = "";
  var randomHouseNameGender = getRandomInt(2) + 1;
  
  if (randomHouseNameGender == Gender.male){
    houseName = maleNames[getRandomInt(maleNames.length)];
  }
  else{
    houseName = femaleNames[getRandomInt(femaleNames.length)];
  }
  
  return houseName;
}

function generateRandomGender(){
  var randomNum = getRandomInt(2) + 1;
  if (randomNum == 1){
    return Gender.male;
  }
  else{
    return Gender.female;
  }
}
