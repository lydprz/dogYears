// variable myAge is set equal to my age in number
const myAge = 31;
// crating a variable named earyYears the value of this variable will change
let earlyYears = 2;
earlyYears = earlyYears *= 10.5;
//laterYears variable is the result of substracting 2 from myAge
let myAge = myAge - 2;
// multiply laterYears variable by 4
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

laterYears = 29;
//Multiply the laterYears variable by 4 to calculate the number of dog years
//accounted for by your later years
console.log((laterYears *= 4));
// here we add earlyYear and laterYear togotheter
let myAgeInDogYears = earlyYears + laterYears;
// write your name in lowercase and store it in variable myName
let myName = "Lydia".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years
which is ${myAgeInDogYears} years old in dog years.`);
