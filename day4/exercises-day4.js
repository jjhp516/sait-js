var quotesArray = [
    "The reason why worry kills more people than work is that more people worry than work.",
    "Clothes make the man. Naked people have little or no influnce in society.",
    "We have to believe in free will. We have no choice.",
    "My experience is that as soon as people are old enought to know better, they don't know anything at all.",
    "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."
];

var authorsArray = ["Robert Frost", "Mark Twain", "Isaac Bashevis Singer", "Oscar Wilde", "Albert Einstein"];


// get paragraphs and buttons elements
var quote = document.getElementById("quote");
var author = document.getElementById("author");

// define index and fill in quoteContainer
var i = 0;
quote.innerHTML = quotesArray[i];
author.innerHTML = "- "+authorsArray[i];


// get back button element
var backButton = document.getElementById("backButton");
// define back button action
function prevQuote(event) {
    if(i === 0) {
        i = quotesArray.length-1;
    } else {
        i--;
    }
    quote.innerHTML = quotesArray[i];
    author.innerHTML = "- "+authorsArray[i];
}
// wire back button
backButton.addEventListener("click",prevQuote);


// get forward button element
var fowardButton = document.getElementById("forwardButton");
// define forward button action
function nextQuote(event) {
    if(i === quotesArray.length-1) {
        i = 0;
    } else {
        i++;
    }
    quote.innerHTML = quotesArray[i];
    author.innerHTML = "-"+authorsArray[i];
}
//wire forward button
forwardButton.addEventListener("click",nextQuote);


// swap quote every s seconds
s = 30;
var autoQuoteSwap = setInterval(nextQuote, s*1000);


// DEBUG
// var count = 0;

// function countSeconds() {
//     count++;
//     console.log(count);
//     if(count%s === 0) {
//         console.log("quote swapped");
//     }
// }

// var counting = setInterval(countSeconds, 1000);

// reset interval for autoQuoteSwap
function clickCheck(event) {
    count = 0;
    clearInterval(autoQuoteSwap);
    autoQuoteSwap = setInterval(nextQuote, s*1000);

    // DEBUG continued
    // console.log("clicked!");
    // clearInterval(counting);
    // counting = setInterval(countSeconds, 1000);
}

backButton.addEventListener("click",clickCheck);
forwardButton.addEventListener("click",clickCheck);



