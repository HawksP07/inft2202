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
var startOfList = document.getElementById("one");
groceries.insertBefore(aNewListItem, startOfList)



// All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup