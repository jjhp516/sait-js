// the fortune teller
var numOfChildren = 2;
var partnerName = "Rowena";
var geoLocation = "Alaska";
var jobTitle = "musher";

console.log("You will be a", jobTitle, "in", geoLocation + ", and married to", partnerName, "with", numOfChildren, "kids.")


// the age calculator
var birthYear = 1993;
var futureYear = prompt("My age in year ____ (yyyy)");
var age = futureYear - birthYear;
var ageB4Bday = age - 1;

console.log("I will either be either", ageB4Bday, "or", age, "in", futureYear);


// the lifetime supply calculator
var currentAge = 25;
var maxAge = 100;
var NumOfSnacksPerDay = 3;
var NumOfSnacksForLife = (maxAge - currentAge) * 365 * 3;

document.write("\"You will need " + NumOfSnacksForLife + " to last you until the ripe old age of " + maxAge + ".\"");


// the geometrizer
var r = 20;
var circumference = 2* 3.14 * r;
var area = 3.14 * r * r;
console.log("The circumference is", circumference);
console.log("The area is", area);

// the temperature converter
