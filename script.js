const count = 30;
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

const loader = document.getElementById("loader");
const imageContainer = document.getElementById("images");

const imgLeft = document.getElementById("images-left");
const imgMiddle = document.getElementById("images-middle");
const imgRight = document.getElementById("images-right");

async function getImages(){
    loader.hidden = false;
    imageContainer.hidden = true;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        loader.hidden = true;
        imageContainer.hidden = false;
        return data;
    } catch (error) {
        console.error(error);
    }
    
    
}

getImages().then((data)=>{
    showImages(data);
});

function showImages(data){
    for (let i = 0; i < data.length; i++){
        if(i < 10){
            imgLeft.innerHTML += `
                     <a href="${data[i].links.html}" target="_blank">
                         <img src="${data[i].urls.small}" alt="${data[i].alt_description}" title="${data[i].alt_description}">
                     </a>
                     `
        } else if (i > 9 && i < 20){
            imgMiddle.innerHTML += `
                     <a href="${data[i].links.html}" target="_blank">
                         <img src="${data[i].urls.small}" alt="${data[i].alt_description}" title="${data[i].alt_description}">
                     </a>
                     `
        } else if (i > 19 && i < 30) {
            imgRight.innerHTML += `
                     <a href="${data[i].links.html}" target="_blank">
                         <img src="${data[i].urls.small}" alt="${data[i].alt_description}" title="${data[i].alt_description}">
                     </a>
                     `
        }
    }
}