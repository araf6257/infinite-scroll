
// Unsplash API
const count = 10;
const apiKey ='04H7izfUj4XvsXlA_xB168TpzPGXu9NzUwFcci0UjZ0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos form unsplash API

async function getphotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

    } catch(error) {
        console.log('error')
    }
}




// on load
getphotos();