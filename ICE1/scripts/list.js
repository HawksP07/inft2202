// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var groceries = document.getElementById("groceries");

// ADD NEW ITEM TO END OF LIST
// Create element
const newListItem = document.createElement("li");
// Create text node
const listItemContent = document.createTextNode("apples");
// Add text node to element
newListItem.appendChild(listItemContent);
// Add element end of list
groceries.appendChild(newListItem);

// ADD NEW ITEM START OF LIST
// Create element
const aNewListItem = document.createElement("li");
// Create text node
const newListItemContent = document.createTextNode("oranges");
// Add text node to element
aNewListItem.appendChild(newListItemContent);
// Add element to list
const elementOne = document.getElementById("one");
groceries.insertBefore(aNewListItem, elementOne);



// All <li> elements
var listItems = groceries.getElementsByTagName("li");
// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
for(var counter = 0; counter < listItems.length; counter++){
    // Change class to cool
    listItems[counter].classList.add("cool");
}



// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup