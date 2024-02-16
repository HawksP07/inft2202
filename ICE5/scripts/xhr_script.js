console.log('xhr_script.js loaded');

let url_photos = 'https://jsonplaceholder.typicode.com/photos';

// instantiate the XMLHttpRequest object with the new keyword
var xhr = new XMLHttpRequest();

// create a callback function to fire when the onreadystatechange happens
xhr.onreadystatechange = function () {
    // check that the state is done
    if (xhr.readyState === 4) {
        // turn into json
        var responseData = JSON.parse(xhr.responseText);

        // console log to see what we have
        console.log(responseData);

        // Example: update the 1st image
        document.getElementById("photo1").src = responseData[0].url;

        // Example: update the 1st figcaption
        document.getElementById("caption1").innerText = responseData[0].title;

        // Example: update the 2nd image
        document.getElementById("photo2").src = responseData[1].url;

        // Example: update the 2nd figcaption
        document.getElementById("caption2").innerText = responseData[1].title;

        // send error message if status is not 200 OK
        if (xhr.status !== 200) {
            console.error("Error: " + xhr.status + " - " + xhr.statusText);
        }
    }
};

// use the .open() method to configure the object
xhr.open("GET", url_photos, true);

// add datatype to header (optional)
xhr.setRequestHeader("Content-Type", "application/json");

// use the .send() method to send the request
xhr.send();