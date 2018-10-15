var submitButton = document.getElementById('submitBtn');
var errorName = document.getElementById('errorName');
var errorAge = document.getElementById('errorAge');
var errorMinAge = document.getElementById('errorMinAge');
var errorNaN = document.getElementById('errorNaN');

submitButton.addEventListener('click',function(event) {
    errorName.style.display = "none";
    errorAge.style.display = "none";

    var name = document.form1.txtName.value;
    var age = document.form1.txtAge.value;

    if(!name) {
        event.preventDefault();
        errorName.style.display = "block";
    }

    if(!age) {
        event.preventDefault();
        errorAge.style.display = "block";
    } else if (age < 18) {
        event.preventDefault();
        errorMinAge.style.display = "block";
    } else if(isNaN(age)) {
        event.preventDefault();
        errorNaN.style.display = "block";
    }
}); 
