// global variable
// var name = 'Heather'

// keep variables inside functions rather than using global variables

// immediately invoke function
// (function greetPerson() {
//     console.log('hello');
//     var name = "Heather";
//     if (name) {
//         // code here
//     }
// })();



// let variable respects block scope

// let condition = true;

// if(condition) {
//     let a = 'Zeta';
//     console.log(a);
// }

// console.log(a); a is undefined


// =====================================================================================================================


// const variable - you cannot ever change its value
// const array you cannot reassign value but you can still add more items with .push()

const arr = [1, 2, 3];
const obj = {id: 0, name: 'Alpha'}

arr.push(4, 5, 6);
console.log(arr);

obj.id = 1;
obj.name = 'Bravo';
console.log(obj);

const funcs = [];

for (let i = 0; i < 3; i++ ) {
    funcs.push(function() {
        console.log(i);
    })
}

for (let j = 0; j < funcs.length; j++) {
    funcs[j]();
}

console.log(funcs);


console.log('===========================================================================================================')


// arrow function - implicit return 
const sum = (num1, num2) => num1 + num2;
console.log(sum(3,4));

const fibonacci = n => {
    if (n<3) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2)
} 

console.log(fibonacci(9));


console.log('===========================================================================================================')

// default parameters = is no parameters were passed, it uses a default value
const multiply = (a, b=1) => {
    if(a==null) {
        return "error";
    } else {
        return a*b;
    }
};

console.log(multiply(5,4)); //20
console.log(multiply(4)); //4
console.log(multiply()); //error

console.log('===========================================================================================================')


// for of loop - iterates through a list of elements and returns the elements one by one
let array = [2, 3, 4, 1];

for (let value of array) {
    console.log(value);
} 

// same as:
for (let z = 0; z < array.length; z++) {
    console.log(array[z]);
}


console.log('===========================================================================================================')


// spread/rest - converts a list of elements to an array and vice versa
let createArray = (...array) => {
    console.log(array);
}
createArray(10, 20, 40, 60, 90); // [10, 20, 40, 60, 90]


let createListFromArray = (...list) => {
    console.log(list);
}
createListFromArray([10, 20, 40, 60, 90]); // 10, 20, 40, 60, 90
   

// ...rest
// Refactor the following to use the rest operator. There should be no restriction on how many numbers the function accepts.

// function product(x, y, z) {
//  var numbers = [x, y, z];
//  return numbers.reduce((currentProduct, number) => currentProduct * number, 1);
// }
const product = (...numbers) => numbers.reduce((currentProduct,number) => currentProduct * number, 1);
console.log(product(3,4,5)); //60
console.log(product(3,4,5,6)); //360
console.log(product(1,2,3,4,5,6,)); //720



// ...spread
// Refactor this code to use the spread operator instead of the concat method).
// function join(array1, array2) {
//  return array1.concat(array2);
// }

const join = (...listOfArrays) => listOfArrays.reduce((concated, array) => concated.concat(array), []);
console.log(join([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6]


console.log('===========================================================================================================')


// Template Literals

// Create a div with an id of "target" in your index.html page.

let body = document.getElementsByTagName('body')[0];
let newDiv = document.createElement('div');
newDiv.id = "target";
body.appendChild(newDiv);

// Refactor this code to use template strings.

// const user = {
//  name: 'Cody',
//  loginCount: 1,
//  goldStatus: true
// };
// const className = 'container';
// const html = '<div class="' + className + '">'
//  + '<h2>Welcome' + (user.goldStatus ? ' to our gold status member, ' : ', ') +
// user.name + '!' + '</h2>'
//  + '<p>Today is ' + new Date() + '</p>'
//  + '<p>You have logged in ' + ++user.loginCount + ' times.</p>'
//  + '</div>';
// document.getElementById('target').innerHTML = html

const user = {
    name: 'Cody',
    loginCount: 1,
    goldStatus: true
};
const className = 'container';
const html = `<div class ="${className}">
              <h2>Welcome ${user.goldStatus ? ' to our gold status member, ' : ','} ${user.name}!</h2>
              <p>Today is ${new Date()}<p>
              <p>You have logged in ${++user.loginCount} times</p>
              </div>`;
document.getElementById('target').innerHTML = html;



console.log('===========================================================================================================')


// Data can be extracted from arrays and objects into distinct variables using destructuring.

// DESTRUCTURING AN ARRAY

const points = [20, 30, 40];
// const [x, y, z] = points;
// console.log(x, y, z); // 20 30 40

// Ignore a value:
// const [x, , z] = points;
// console.log(z); // 40


// DESTRUCTURING AN OBJECT
// Can you get the body of isActiveEngineer() down to two lines using destructuring?
const myEmployee = {
 active: true,
 department: 'Engineering'
};

// function isActiveEngineer(employee) {
//  const active = employee.active;
//  const department = employee.department;
//  return department === 'Engineering' && active;
// }

// destructured
function isActiveEngineer(employee) {
    const {active, department} = myEmployee;
    return department ==='Engineering' && active;
}

console.log(`Is myEmployee active? ${isActiveEngineer(myEmployee)}`);





console.log('===========================================================================================================')



// OBJECT LITERAL SHORTHAND
let type = 'Toyota';
let color = 'silver';
let model = 2007;
const car = {
 type, // instead of type: type
 color, // instead of color: color
 model // instead of model: model
};
console.log(car);
//output { type: 'Toyota', color: 'Silver', model: 2007 }



console.log('===========================================================================================================')


// for each method
const trips = [
    { mph: 10, hours: 3 },
    { mph: 30, hours: 2 },
    { mph: 25, hours: 4 }
];

trips.forEach((trip,index,array) => {
    console.log(trip.mph*trip.hours);
    // console.log(index);
    // console.log(array);
})



// You're managing IT inventory and want to check if
// all of your available laptops have at least 16 GB of RAM. If not, do
// some of them have at least 16 GB of RAM?
const availableLaptops = [
    { name: 'MacBook', RAM: 8 },
    { name: 'Asus', RAM: 32 },
    { name: 'Lenovo', RAM: 16 },
    { name: 'HP', RAM: 4 }
   ];
// .every method to check if all have 16GB
const all16 = availableLaptops.every(laptop => laptop.RAM >= 16);
console.log(all16);
// .some method if at least one has 16GB
const some16 = availableLaptops.some(laptop => laptop.RAM >= 16);
console.log(some16);



console.log('===========================================================================================================')



// array.filter() method
// use filter method to create an array of produce that cost less than $5
const groceries = [
    { name: 'bananas', aisle: 'produce', price: 2 },
    { name: 'flour', aisle: 'baking', price: 5 },
    { name: 'avocados', aisle: 'produce', price: 4},
    { name: 'lettuce', aisle: 'produce', price: 5 },
    { name: 'olive oil', aisle: 'baking', price: 10 },
    { name: 'shampoo', aisle: 'beauty', price: 12 }
];
const produceLessThan5 = groceries.filter(item => item.aisle==='produce' && item.price<5);
console.log(produceLessThan5);



console.log('===========================================================================================================')



// array.map() method - create new array by modifying original array elements

// create an array called 'speeds' based on the 'trips' array. Speed is calculated as miles/hours.
const trips2 = [
 { miles: 5, hours: 1},
 { miles: 6, hours: 0.5},
 { miles: 4, hours: 2 }
];
const speeds = trips2.map(trip => trip.miles/trip.hours);
console.log(speeds);



console.log('===========================================================================================================')



// array.find() - find the first element that passes a test

// We need to console.log the title and body of the post with ID 29. Use the nd() method to set the value of
// 'currentPost' to the object with ID 29. If everything worked, you should see the title and body in your console.
const posts = [
 { id: 23, title: 'Becoming an ES6 Wizard', body: 'Ille vivere. Ut ad te ...' },
 { id: 29, title: 'JavaScript Pro Tips', body: 'Pellentesque euismod ...' },
 { id: 31, title: 'Acing your next JS interview', body: 'Lorem ipsum dolor sitamet...'}
];
// Find the post with ID 29
const currentId = 29;
const currentPost = posts.find(post => currentId === post.id);
console.log(currentPost.title);
console.log(currentPost.body);


console.log('===========================================================================================================')



// reduce method - pass in an initialValue and modify it according to the currentelement value
// syntax - arr.reduce((calculatedValue, element, index, array) => reducer{}, initialValue);

const numbers = [2, 6, 10];

// for each number in array, call function(currentSum, number) which returns currentSum + number
    // function called -> returns initial value of 0(currentSum) + 2(number) =  2
    // function called -> returns 2(currentSum) + 6(number) = 8
    // function called -> returns 8(currentSum) + 10(number) = 18
const sum1 = numbers.reduce(function(currentSum, number) { 
 return currentSum + number; 
}, 0);

console.log(sum1); // 18

// Use reduce() to find the sum of the elements in the transactions array. Remember to return 
// the current calculated value (the first parameter in the iterator function) every iteration.
const transactions = [5, 10, 15];
// solution:
const sum2 = transactions.reduce((currentSum, transaction) => currentSum + transaction, 0);
console.log(sum2); // 30
