const count = 20;
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

const loader = document.getElementById("loader");
const imageContainer = document.getElementById("images");

async function getImages(){
    loader.hidden = false;
    imageContainer.hidden = true;

    const res = await fetch(apiUrl);
    const data = await res.json();

    loader.hidden = true;
    imageContainer.hidden = false;
    return data;
}

getImages().then((data)=>{
    console.log(data);
})