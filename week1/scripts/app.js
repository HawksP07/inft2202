/*
    myFunction
    define the functionality of the function
*/
function myFunction(){
    alert('this is the about link');
}

var aboutLink = document.getElementById("about");
aboutLink.addEventListener("click", myFunction, false);