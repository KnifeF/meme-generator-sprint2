'use strict'

initGallery()

function initGallery() {
    initializeImgs()
    renderGallery()
}


function renderGallery() {
    /** randers images (for meme) gallery*/
    const currImages = getImages()
    const elImgGallery = document.querySelector('.image-gallery')

    if (currImages && elImgGallery) {
        // creates array that contains images in html format, and joins them to a string
        const imagesHtml = currImages.map(currImage => {
            const url = currImage.url
            const id = currImage.id
            return `<img src="${url}" alt="meme-image" onclick="onImgSelect(${id})">`
        }).join('')

        if (imagesHtml) elImgGallery.innerHTML = imagesHtml
    }
}

function onImgSelect(currImageId) {
    /** selects image for the meme editor
     * call the memeService's setImg() and then renderMeme()*/
    setImg(currImageId)
    // console.log('x:', getMeme())
    renderMeme()
}