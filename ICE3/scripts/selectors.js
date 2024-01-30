/**
 * ICE3 Part 2 Selectors
 * Austin Pyzer
 * January 30, 2024
 */
console.log("selectors.js loaded")
$(function(){
    console.log("The DOM is ready");

});

/**
 * 
 * @param {*} element 
 */
function highlight(element){
    element.css('background-color', "#fcf30040");
}

function cssSelectors(){
    // updating by tag
    $('p').css('background-color', "#2a9d8f");
    // updating by class (class="red-box")
    $('.red-box').css('background-color', "#2a9d8f");
    // updating by id
    $('#list').css('font-size', '40px');

    $('li:even').css('background-color', "#fcf30040");

}

function traversingTheDOM(){
    //$('#list').prev().css('background-color', "#2a9d8f");
    //$('#list').next().css('background-color', "#2a9d8f");
    //$('#list').prev().next().css('background-color', "#2a9d8f");
    $('#list').find('li').css('background-color', "#2a9d8f");

    // Traverse up 1 level
    $('#list').parent('div').css('font-size', '24px');
    // Traverse all the way up to the body
    $('#list').parents('body').css('font-size', '24px');

}

function filtering(){
    //$('#list').find('li').filter(':even').css('background-color', "2a9d8f");

    // long function of the shortcut .filer(':even')
    $('#list').find('li').filter(function(i){
        return i % 2 === 0;
    }).css('background-color', "red");
}

function addReplaceRemove(){
    $('ul#list li:first').append($("<ul><li> I'm going to the be the last item of the first sub-list</li></ul>"));
    // Prepend
    $('ul#list').prepend($("<li> Prepended</li>"));

    // Use after to add elements after another
    $('.red-box').after("<div class='new-box red-box'>New box</div>");

    let newText = 'Last night, Darth Vader came down from the planet Vulcan.';

    $('p.grumpy').replaceWith(`<p>${newText}</p>`);
}

//traversingTheDOM();
//cssSelectors();
//filtering();
addReplaceRemove();