const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = [];
// Unsplash API
const count = 10;
const apiKey ='04H7izfUj4XvsXlA_xB168TpzPGXu9NzUwFcci0UjZ0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Helper function to set attributes on DOM elements
function setAttribiutes(element,attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

}


// Create elements for links and photos 
function displayPhotos() {
    // Run foreach
    photoArray.forEach((photo) => {
        // create <a> to link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('href',photo.links.html);
        // item.setAttribute('target','_blank');
        setAttribiutes(item, {
            href:photo.links.html,
            target:'_blank'
        });
        // create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src',photo.urls.regular);
        // img.setAttribute('alt',photo.alt_description);
        // img.setAttribute('title',photo.alt_description);
        setAttribiutes(img,{
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        // put img in item and item in image container
        item.appendChild(img);
        imageContainer.appendChild(item);
        
    })
}

// Get photos form unsplash API

async function getphotos() {
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        console.log(photoArray);
        displayPhotos();
    } catch(error) {
        console.log('error')
    }
}




// on load
getphotos();