import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery");
const imgCardMarkup = createImgCardMarkup(galleryItems);

function createImgCardMarkup(galleryItems){return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item"><a class="gallery__link" 
    href = "${original}"><img class="gallery__image" 
        src="${preview}" data-source = "${original}" 
            alt = "${description}" width = "340"></img></a></div>`
    }).join("")};

galleryEl.insertAdjacentHTML("afterbegin", imgCardMarkup);

galleryEl.addEventListener('click', onImgOriginalCard);

function onImgOriginalCard(event){
    event.preventDefault();
    if(!event.target.dataset.source){
    return
    }
    
// Відкриття модалки    
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();

// Закриття модалки  кнопкою esc
    galleryEl.addEventListener('keydown', (event) =>{
        if (event.code === "Escape"){
            instance.close()
        }
    });
}