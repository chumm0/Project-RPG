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

var settlementNames = [
  "Aerilon",
  "Aquarin",
  "Aramoor",
  "Azmar",
  "Begger’s Hole",
  "Black Hollow",
  "Blue Field",
  "Briar Glen",
  "Brickelwhyte",
  "Broken Shield",
  "Boatwright",
  "Bullmar",
  "Carran",
  "City of Fire",
  "Coalfell",
  "Cullfield",
  "Darkwell",
  "Deathfall",
  "Doonatel",
  "Dry Gulch",
  "Easthaven",
  "Ecrin",
  "Erast",
  "Far Water",
  "Firebend",
  "Fool’s March",
  "Frostford",
  "Goldcrest",
  "Goldenleaf",
  "Greenflower",
  "Garen’s Well",
  "Haran",
  "Hillfar",
  "Hogsfeet",
  "Hollyhead",
  "Hull",
  "Hwen",
  "Icemeet",
  "Ironforge",
  "Irragin",
  "Jarren’s Outpost",
  "Jongvale",
  "Kara’s Vale",
  "Knife’s Edge",
  "Lakeshore",
  "Leeside",
  "Lullin",
  "Marren’s Eve",
  "Millstone",
  "Moonbright",
  "Mountmend",
  "Nearon",
  "New Cresthill",
  "Northpass",
  "Nuxvar",
  "Oakheart",
  "Oar’s Rest",
  "Old Ashton",
  "Orrinshire",
  "Ozryn",
  "Pavv",
  "Pella’s Wish",
  "Pinnella Pass",
  "Pran",
  "Quan Ma",
  "Queenstown",
  "Ramshorn",
  "Red Hawk",
  "Rivermouth",
  "Saker Keep",
  "Seameet",
  "Ship’s Haven",
  "Silverkeep",
  "South Warren",
  "Snake’s Canyon",
  "Snowmelt",
  "Squall’s End",
  "Swordbreak",
  "Tarrin",
  "Three Streams",
  "Trudid",
  "Ubbin Falls",
  "Ula’ree",
  "Veritas",
  "Violl’s Garden",
  "Wavemeet",
  "Whiteridge",
  "Willowdale",
  "Windrip",
  "Wintervale",
  "Wellspring",
  "Westwend",
  "Wolfden",
  "Xan’s Bequest",
  "Xynnar",
  "Yarrin",
  "Yellowseed",
  "Zao Ying",
  "Zeffari",
  "Zumka"
];

var stateNames = [
  "Othutea",
  "Deibaraduna",
  "Priland",
  "Varuzya",
  "Felda",
  "Feaduz",
  "Fenuta",
  "Gyehgene",
  "Firiwilder",
  "Zarant",
  "Azewenunto",
  "Fieo",
  "Tyrezora",
  "Leinchi",
  "Dunelaa",
  "Epirinena",
  "Macimea",
  "Giayar",
  "Gyrudea",
  "Periria",
  "Kornea",
  "Koanta",
  "Lydenukeria",
  "Burunata",
  "Mabiz",
  "Muna",
  "Tewantesong",
  "Grenoric",
  "Rheludrevent",
  "Delato",
  "Grusong",
  "Meomonterino",
  "Lusaman",
  "Odo",
  "Weleva",
  "Tharuso",
  "Wbora",
  "Ralarich",
  "Daine",
  "Onegoto"
];

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

function generateSettlementName(){
  var name = "";
  
  name = settlementNames[getRandomInt(settlementNames.length)];
  return name;
}

function generateStateName(statesList){
  var nameIsUsed = true;
  var flag = 10
  var name = "";
  
  while (nameIsUsed){
    name = stateNames[getRandomInt(stateNames.length)];
    nameIsUsed = false;
    
    for (var i = 0; i < statesList.length; i++){
      if (statesList[i].getName() == name){
        nameIsUsed = true;
      }
    }
    
    flag--;
    if (flag < 0){
      return name;
    }
  }
  return name;
}
