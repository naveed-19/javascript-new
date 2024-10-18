const name = "Naveed"
const gameScore = 12

//console.log(name + gameScore + " anything");

console.log(`Hey my name is ${name} and my score is ${gameScore}`);

const gameName = new String('Pubg-venom-new')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('u'));

//const newString = gameName.substring(0, 4)
//console.log(newString);

const nextString = gameName.slice(-1, 4)
console.log(nextString);

const newStringOne = " Naveed   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Naveed.com/naveed%14dar"
console.log(url.replace('%', '-'));
console.log(url.includes('Naveed'));
console.log(url.includes('Nsd'));
console.log(gameName.split('-'));