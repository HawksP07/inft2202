/**
 * Name: Austin Pyzer
 * Date: March 5. 2024
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
const PIXABAY_API_KEY = '42719377-a77d49f614ad8c60f33c3640f'; // normally we would load a key through the .env file
// URL for Pixbay request
const PIXABAY_URL = 'https://pixabay.com/api/?key=<API_KEY>';
// https://pixabay.com/api/?key=42719377-a77d49f614ad8c60f33c3640f&page=1&per_page=30
// Constant for image count
const IMAGE_COUNT = 30;


/**
 * makePosts
 * Creates posts for pictures.
 */
const makePosts = (pictureData) => 
{
    const blogColumn=  $('.blog-column');

    if(pictureData?.length > 0){
        for (let i = 0; i < IMAGE_COUNT; i++){
            let id = i;
            let pixabayPicture = pictureData[i];
    
            let card = $('<div class="card"></div>')
            .attr("id", "card_" + id)
            .width(600)
            .appendTo(blogColumn);
    
            let pic = $('<img>')
                .attr('id', "img-"+i)
                .attr('src', pixabayPicture.webformatURL)
                .attr('alt', pixabayPicture.tags)
                .addClass('card-img-top')
                .appendTo(card);
    
            let cardBody = $('<div class"card-body"></div>')
            .appendTo(card);
            // append this to card element
            let cardParagraph = $('<p class"card-text tags"></p>')
            .html(pixabayPicture.tags)
            .appendTo(cardBody);
            // append to card body
        }
    }

};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = () => 
{
    // get images match the following: 30 per page, query search value of "cars", all horizontal only, type photo only
    const url = `${PIXABAY_URL.replace('<API_KEY>', PIXABAY_API_KEY)}&q=cars&orientation=horizontal&image_type=photo&per_page=${IMAGE_COUNT}`;
    // use fetch to get the pictures from the API
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        if(data?.hits?.length > 0){
            makePosts(data?.hits);
            console.log(data?.hits);
        }
    })
    // handle error(s) with .catch()
    .catch((err) => {
        //log to console
        console.log(err);
    })

};

getPictures();
