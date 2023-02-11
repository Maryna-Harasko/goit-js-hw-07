import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imgCardMarkup = createImgCardMarkup(galleryItems);

function createImgCardMarkup(galleryItems){return galleryItems.map(({preview, original, description}) => {
    return `<li><a class="gallery__item" href = "${original}">
    <img 
        class="gallery__image"
        src="${preview}" 
        alt = "${description}"
        width = "340"></img></a></li>`
    }).join("")};

galleryEl.insertAdjacentHTML("afterbegin", imgCardMarkup);

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
});
