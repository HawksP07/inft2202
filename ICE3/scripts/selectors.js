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

cssSelectors();