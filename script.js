const count = 30;
const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


const loader = document.getElementById("loader");
const imageContainer = document.getElementById("images");

const imgLeft = document.getElementById("images-left");
const imgMiddle = document.getElementById("images-middle");
const imgRight = document.getElementById("images-right");

let ready = false;
let imagesLoaded = 0;

function imageLoaded(){
    imagesLoaded++;
    if (imagesLoaded === count){
        ready = true;
    }
}

async function getImages(){
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        loader.hidden = true;
        return data;
    } catch (error) {
        console.error(error);
    }
}


function showImages(data){
    for (let i = 0; i < data.length; i++){
        imgMiddle.innerHTML += `
        <a href="${data[i].links.html}" target="_blank">
            <img data-imgCount=${i} src="${data[i].urls.small}" alt="${data[i].alt_description}" title="${data[i].alt_description}">
        </a>
        `
    }

    imagesLoaded = 0;
    document.querySelectorAll("[data-imgcount]").forEach((img)=>{
        img.addEventListener("load", imageLoaded);
        img.removeAttribute("data-imgcount");
    });

}


window.addEventListener("scroll", () =>{
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight - 1500 && ready){
        ready = false;
        getImages().then((data)=>{
            showImages(data);
        });
    }
});




// On Load
getImages().then((data)=>{
    showImages(data);
});