
alert("Hello, World");
console.log(1);

let myAge = 25;
let year = 2019;

//logs things to console

//console.log(myAge);

console.log(myAge, year);

age = 30;

console.log(age);

const points = 100;

console.log(points);

var score= 75;

console.log(score);

/*JS data types
Number: 1,2, 100,3.14
String: "Hello, world"
Boolean: true or false (not quoted because its not a string)
Null: Explicitly set a variable with no value.
Undeffined:For varibles that have not been defined (THats the difference from null)
Object:Complex data structures - Arrays, dates,literals, etc
Symbol: Used with objects
*/

//string
console.log('hello, world');

let email= '222jching@frhsd.com';

console.log(email);

// string concatenation (Connect varibles together)
let firstName = 'Jay';
let lastName = 'C';
let fullName = firstName + " " +  lastName;

console.log(fullName);

//getting characters from strings (JS starts counting at the number 0)
console.log(firstName[0]);

//string length

console.log(fullName.length);


//string methods

console.log(fullName.toUpperCase());



let result = fullName.toLowerCase();
console.log(result, fullName);



let index1 = email.indexOf("@");
console.log(index1);
let index2 = email.indexOf("j");
console.log(index2);



























//common string methods Used
let secondEmail = 'jching100000@gmail.com';
let result2 = secondEmail.lastIndexOf('m');
let result3 = secondEmail.slice(0,5);
let result4=secondEmail.substr(0,5);
let result5= secondEmail.replace('j','m');
console.log(result2);

console.log(result3);
console.log(result4);
console.log(result5);





let result6 = 3 + (4-1)**2;
console.log(result6);

let likes = 10;
likes -=3;
console.log(likes);


//NaN = not a Number

console.log(5/'hello');

let result7= 'The blog has ' + likes + ' likes.';
console.log(result7);

let ages= [20, 25, 30, 35];
console.log(ages[2]);


let random=['shaun', 'crystal', 30, 20];
console.log(random);
let result8 = random.join(',');
console.log(result8);
