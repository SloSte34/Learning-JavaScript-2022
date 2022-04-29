//boolean type
let booleanTrue = true;
let booleanFalse = false;
console.log(booleanTrue);
console.log(booleanFalse);

//using examples
//when using boolean types set variable names like 'is~'
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isFree);

//Falshy
//is 0 true or false?
//!! -> tells value is true or false
console.log(!!0); //->false
console.log(!!-0); //->false
console.log(!!''); //->false
console.log(!!null); //->false
console.log(!!undefined); //->false
console.log(!!NaN); //->false

//Truthy
console.log(!!1); //->true
console.log(!!-1); //->true
console.log(!!'text'); //->true
console.log(!!{}); //->true //empty object is true.
console.log(!![]); //->true //empty array is true.
console.log(!!Infinity); //->true Infinity is also true.

//check MDN Boolean page
