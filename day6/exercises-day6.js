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
        checkbox.prop("checked",true);
    // if checkboxAll is unchecked, uncheck everything
    } else {
        checkbox.prop("checked",false);
    }
});


// get number of colors selector
var numOfColors = $('#numOfColors');
// get submit button
var submitBtn = $('#submitBtn');

$('#num-picker').attr('class','errorField');submitBtn.on('click', function(event) {
    $('#errorNum').css('color','white');
    $('#num-picker').removeClass('errorField');

    $('#errorHue').css('color','white');
    $('#hue-picker').removeClass('errorField');

    $('#num-picker').attr('class','errorField');    
    if(numOfColors.prop('value') < 1 || numOfColors.prop('value') > 12) {
        event.preventDefault();
        $('#errorNum').css('color','red');
        $('#num-picker').attr('class','errorField');
    } else {
        event.preventDefault();
        count = numOfColors.prop('value');
        console.log(count);
    };

    var textinputs = document.querySelectorAll('input[type=checkbox]'); 
    var empty = [].filter.call( textinputs, function( el ) {
    return !el.checked
    });

    if (textinputs.length == empty.length) {
        event.preventDefault();
        $('#errorHue').css('color','red');
        $('#hue-picker').attr('class','errorField');
    }
    
    
    checkbox.each(function() {
        var checked = $(this).prop('checked');
        var hueArray = [];
        if(checked == true) {
            hueArray.push(checkbox.attr('value'));
        }
    });
 

    
});










