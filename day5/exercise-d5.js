var score = 0;

var submitQ1 = document.getElementById('submit1');
var submitQ2 = document.getElementById('submit2');
var submitQ3 = document.getElementById('submit3');
var submitQ4 = document.getElementById('submit4');
var submitQ5 = document.getElementById('submit5');

submitQ1.addEventListener('click', function(event) {
    event.preventDefault();
    if(!document.getElementById('a').checked && !document.getElementById('b').checked && 
        !document.getElementById('c').checked && !document.getElementById('d').checked) {
        console.log('Pick an answer!')
    } else if(document.getElementById('a').checked) {
        console.log('Correct!');
        score++;
        console.log(score);
    } else {
        console.log('Bzzz! Correct answer was A.')
    }
})


submitQ2.addEventListener('click', function(event) {
    event.preventDefault();
    if(!document.getElementById('true').checked && !document.getElementById('false').checked) {
        console.log('Pick an answer!');
    } else if(document.getElementById('false').checked) {
        console.log('Correct!');
        score++;
        console.log(score);
    } else {
        console.log('Bzzz! Correct answer was False.');
    }
})

submitQ3.addEventListener('click', function(event) {
    event.preventDefault();
    if(document.question3['part1'].value === 'choicePart1' || document.question3['part2'].value === 'choicePart2') {
        console.log("You haven't completed the question!");
    } else if(document.question3['part1'].value === 'answer3Part1' && document.question3['part2'].value === 'answer2Part2') {
        console.log('Correct!');
        score++;
        console.log(score);
    } else {
        console.log('Bzzz!');
    }
})


