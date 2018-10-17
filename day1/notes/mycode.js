alert("click ok to continue"); //alert("message") = popup box
console.log('testing...'); //display message on the console
document.write("안녕"); //add something to the page

var x = 2;
var y = 3;

console.log(x);
console.log(-y);
console.log(x+y);
console.log(y-x);
console.log(x*y);
console.log(y/x);
console.log((x*x*x)%y);

var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name?");

var nameKor = "박";
nameKor += "재현";

console.log(firstName, lastName);
console.log(nameKor);

// var name = prompt("What's your name?");
// console.log("Hello " + name);


var y = 2 + ' cats';
// the number 2 will turn into a string 
// (a variable can only be one type)
console.log(typeof y); 

function woodchuck() {
    console.log("How much wood would a woodchuck chuck if a woodchuck would chuck wood?");
}

woodchuck();


// function fullName(first, last) {
//     var name = first + " " + last;
//     console.log("My name is", name);
// }

function fullName(first, last) {
    return first + " " + last;
}

var name = fullName(firstName, lastName);

console.log("Full Name:", name);


var temperature = 5;

function coatOrNoCoat(temp) {
    if (temp < -20 || temp >= 30) {
        console.log("Stay inside!");
    } else if (temp < 0) {
        console.log("Wear a coat and a hat!");
    } else if (temp < 10) {
        console.log("Put on a coat!");
    } else {
        console.log("Dress for style!");
    }
}

coatOrNoCoat(temperature);
