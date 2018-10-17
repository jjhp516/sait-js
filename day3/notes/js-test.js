// var header = document.getElementById("header");
// console.log(header);

// var listItems = document.getElementsByTagName("li");
var listItems = document.getElementsByClassName("nav-item");
// var listItems = document.querySelectorAll("li");
// var listItems = document.querySelectorAll(".nav-item");
// var firstItem = document.querySelector("li");
var firstItem = document.querySelector(".nav-item");
console.log(listItems);
console.log(firstItem);

console.log(listItems[0].classList);


// if (el.classList) {
//     el.classList.add(className);
// } else {
//     el.className += " " + className;
// }

// if (el.classList) {
//     el.classList.remove(className);
// } else {
//     el.className = el.className.replace(new RegExp('(^|\\b)') + className.split(" ").join("|"))
// }



console.log(document.getElementsByTagName("p")[1]);

var testImg = document.getElementsByTagName("img")[0];
testImg.getAttribute("src");
testImg.setAttribute("src", "http://placekitten.com/g/600/500");

var pageBody = document.getElementsByTagName("body")[0];
pageBody.style.color = "white";
pageBody.style.backgroundColor = "#222";

var pageTitle = document.getElementsByTagName("h1")[0];
pageTitle.innerHTML = "<h1>Kitty Cat</h1>";

var pageFooter = document.getElementById("footer");
pageFooter.style.color = "yellow";
pageFooter.style.backgroundColor = "black";
pageFooter.style.paddingTop = "20px";
pageFooter.style.paddingBottom = "30px";
pageFooter.innerHTML = "<p>Meow</p>";




// * * * * * * * * * * * * * * * *
// CREATING NEW NODES
// * * * * * * * * * * * * * * * *

// DOM access <div id="main"></div>
var pageMain = document.getElementById("main");

// new paragraph
    // creating new <p></p>
var newParagraph = document.createElement("p");
    // creating content to go inside <p>
var paragraphText = document.createTextNode("\"I am a kitty cat!\"");
    // adding content to <p>
newParagraph.appendChild(paragraphText);
    // adding the new <p> to <div id="main">
pageMain.appendChild(newParagraph);


// new image
    // creating new <img></img>
var newImg = document.createElement("img");
    // define image attributes
newImg.src = "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-0.3.5&s=2afd8201ee37144103cbf7f05aa33cf5&auto=format&fit=crop&w=1401&q=80";
newImg.style.width = "80%";
newImg.style.minWidth = "600px";
    // adding new image to main
pageMain.appendChild(newImg);


// another paragraph
var newParagraph2 = document.createElement("p");
var paragraphText2 = document.createTextNode("\"Peek-a-boo!\"");
newParagraph2.appendChild(paragraphText2);
pageMain.appendChild(newParagraph2);





function newTextElementByTag(parentTag, tagBracketNum, elementTag, textNode) {
    var parentElement = document.getElementsByTagName(parentTag)[tagBracketNum];
    var addNew = document.createElement(elementTag);
    var newText = document.createTextNode(textNode);
    addNew.appendChild(newText);
    parentElement.appendChild(addNew);
}

function newTextElementById(parentId, elementTag, textNode) {
    var parentElement = document.getElementById(parentId);
    var addNew = document.createElement(elementTag);
    var newText = document.createTextNode(textNode);
    addNew.appendChild(newText);
    parentElement.appendChild(addNew);
}

newTextElementByTag("div", 2, "h2", "Testing my new function...");
newTextElementById("main", "h6", "Testing my new NEW function...");

