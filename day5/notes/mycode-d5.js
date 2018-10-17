// dom access form using the standard method
var myForm = document.getElementById('myForm');
console.log(myForm);

// accessing forms
var myForm = document.myForm;
console.log(myForm);

// access the first input/textarea in form
var formFirstname = document.myForm[0];
console.log(formFirstname);

// access form input by name using dot notation
var formMessage = document.myForm.message;
console.log(formMessage);

// access form input by name using bracket notation if name has space in it
var formLastname = document.myForm["last name"];
console.log(formLastname);

// accessing form input type
console.log(document.myForm["first name"].type);
console.log(document.myForm['last name'].type);
console.log(document.myForm.email.type);
console.log(document.myForm[3].type);
console.log(document.myForm[4].type);

// focus element
document.myForm.email.focus();
// unfocus
// document.myForm.email.blur();



// assign submit button to variable
var submitButton = document.myForm.submit;
// add click event listener
submitButton.addEventListener('click', function(event) {
    // prevent default action
    event.preventDefault();

    console.log("Submitted!")

    // getting input values
    console.log(document.myForm["first name"].value);
    console.log(document.myForm["last name"].value);    
    console.log(document.myForm.email.value);
    console.log(document.myForm.message.value);


    // getting checkbox values
    // create a list of checkboxes using checkbox name;
    var myCheckbox = document.myForm.feeling;
    console.log(myCheckbox);

    // loop through your checkbox list
    for(var i = 0; i < myCheckbox.length; i++) {
        // if a checkbox is checked, consol.log the value of the checkbox
        if(myCheckbox[i].checked) {
            console.log(myCheckbox[i].value);
        }
    }
})


var validSubmit = document.validForm.submit;
validSubmit.addEventListener('click', function(event) {
    validForm.checkValidity();
    validForm.reportValidity();
    event.preventDefault();
    console.log(document.validForm.name.value);
    console.log(document.validForm.waterOrMilk.value);
    console.log(document.validForm.alcohol.value);
    console.log(document.validForm.number.value);
    console.log(document.validForm.email.value);
})

// regular expression
var regEx1 = new RegExp("ing");
var regEx2 = /ane/

// test method
console.log(regEx1.test('think')); //false
console.log(/ing/.test('thing')); //true
console.log(regEx2.test('plane')); //true
console.log(/ane/.test('plain')); //false

