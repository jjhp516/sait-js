var score = 0;

var submitQ1 = document.getElementById('submit1');
var submitQ2 = document.getElementById('submit2');
var submitQ3 = document.getElementById('submit3');
var submitQ4 = document.getElementById('submit4');
var submitQ5 = document.getElementById('submit5');

var nextBtn1 = document.getElementById('next1');
var nextBtn2 = document.getElementById('next2');
var nextBtn3 = document.getElementById('next3');
var nextBtn4 = document.getElementById('next4');
var resultBtn = document.getElementById('next5');

submitQ1.addEventListener('click', function(event) {
    event.preventDefault();
    if(!document.getElementById('a').checked && !document.getElementById('b').checked && 
        !document.getElementById('c').checked && !document.getElementById('d').checked) {
        console.log('Pick an answer!')
    } else if(document.getElementById('a').checked) {
        console.log('Correct!');
        score++;
        console.log(score);
        submitQ1.style.display = 'none';
        nextBtn1.style.display = 'block';
    } else {
        console.log('Correct answer was A.')
        submitQ1.style.display = 'none';
        nextBtn1.style.display = 'block';
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
        submitQ2.style.display = 'none';
        nextBtn2.style.display = 'block';
    } else {
        console.log('Correct answer was False.');
        submitQ2.style.display = 'none';
        nextBtn2.style.display = 'block';
    }

})

submitQ3.addEventListener('click', function(event) {
    event.preventDefault();
    if(document.question3['part1'].value === 'choicePart1' || document.question3['part2'].value === 'choicePart2') {
        console.log("You haven't completed the question!");
    } else if(document.question3['part1'].value === 'option3Part1' && document.question3['part2'].value === 'option2Part2') {
        console.log('Correct!');
        score++;
        console.log(score);
        submitQ3.style.display = 'none';
        nextBtn3.style.display = 'block';
    } else {
        console.log('Correct answer: option3 & option2');
        submitQ3.style.display = 'none';
        nextBtn3.style.display = 'block';
    }

})

submitQ4.addEventListener('click', function(event) {
    event.preventDefault();
    if(!document.question4.checklist.value) {
        console.log("Pick at least one.");
    } else if(document.question4.checklist.value[2] && document.question4.checklist.value[4] && document.question4.checklist.value[7]) {
        console.log('Correct!');
        score++;
        console.log(score);
        submitQ4.style.display = 'none';
        nextBtn4.style.display = 'block';
    } else {
        console.log('Correct answer: 2, 3, 7');
        submitQ4.style.display = 'none';
        nextBtn4.style.display = 'block';
    }

}) 

submitQ5.addEventListener('click', function(event) {
    event.preventDefault();
    if(!document.question5.txtAnswer.value) {
        console.log("Don't leave it blank!");
    } else if(document.question5.txtAnswer.value = 'correct answer') {
        console.log('Correct!');
        score++;
        console.log(score);
        submitQ5.style.display = 'none';
        nextBtn5.style.display = 'block';
    } else {
        console.log("Correct answer was 'correct answer'")
        submitQ1.style.display = 'none';
        nextBtn1.style.display = 'block';
    }
})

