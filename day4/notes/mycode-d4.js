var square = document.getElementById("square");
square.style.position = "relevant";
square.style.top = "100px";
square.style.left = "100px";

// one-shot timer
// var timerId = setTimeout(yourFunction, millisecondsDelay);
// returns an integer
function doThisLater() {
    alert("Time's up!");
};
// run doThisLater after 3000ms delay
var timerId = setTimeout(doThisLater, 3000);

// stopping timer
clearTimeout(timerId);



// contiunally firing timer
// setInterval()
// create a function that displays the current date and time
function dateAndTime() {
    var clock = document.getElementById("clock");
    clock.innerHTML = new Date();
    clock.style.margin = "auto";
};

// call the function every second
setInterval(dateAndTime, 1000);



// click event
var button = document.getElementById("myBtn");


function clicked(event) {
    button.style.backgroundColor = "orange";
    button.innerHTML = "How dare you!";
}

// hover event
function hover(event) {
    button.style.backgroundColor = "red";
    button.style.textTransform = "uppercase";
    button.innerHTML = "Don't do it!";
}

button.addEventListener("mouseover", hover);


// prevent default
var link = document.getElementById("myLink");

link.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Error");
});


// currentTarget
// you can have multiple buttons with the same eventlistener but run function only on the current target
var myButton = document.getElementById("myBtn2") 

myButton.addEventListener("click", function(event) {
    btn2 = event.currentTarget;
    btn2.style.backgroundColor = 'lightblue';
    btn2.innerHTML = 'clicked!';
});

