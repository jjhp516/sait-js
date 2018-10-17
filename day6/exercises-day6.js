// define count, hue and luminosity variables (components of randomColor function)
var count = 1;
var hue = 'random';
var luminosity = 'random';

// get checkbox inputs
var checkbox = $('input[name="hue"]');
// get checkAll element
var checkAll = $('#checkAll');

// when checkboxAll is clicked...
checkAll.on('click', function() {
    // if checkboxAll is checked, check everything
    if(checkAll.prop("checked")) {
        checkbox.attr("checked",true);
    // if checkboxAll is unchecked, uncheck everything
    } else {
        checkbox.attr("checked",false);
    }
});


// get number of colors selector
var numOfColors = $('#numOfColors');
// get submit button
var submitBtn = $('#submitBtn');

// when submit button it clicked...
submitBtn.on('click', function(event) {
    $('#errorNum').css('color','white');
    $('.num-picker').removeClass('errorField');
    // prevent its default action   
    if(numOfColors.prop('value') < 1 || numOfColors.prop('value') > 12) {
        event.preventDefault();
        $('#errorNum').css('color','red');
        $('.errorField').css('background','linear-gradient(to right, rgb(230,230,255,0.2),#262626)');
    } 

    if(checkbox.prop("checked",false)) {
        event.preventDefault();
        $('#errorHue').css('color','red');
        $('.errorField').css('background','linear-gradient(to right, rgb(230,230,255,0.2),#262626)');
    }

    // $(".test:checked").length == 0
});


var tester = document.paletteForm.hue.name;
console.log(tester);





