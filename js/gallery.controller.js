'use strict'

// Gallery: Show a Gallery of images
// initGallery()

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
            return `<img class="gallery-image" src="${url}" alt="meme-image" onclick="onImgSelect(${id})">`
        }).join('')

        if (imagesHtml) elImgGallery.innerHTML = imagesHtml
    }
}

function onImgSelect(currImageId) {
    /** selects image for the meme editor
     * call the memeService's setImg() and then renderMeme()*/
    setImg(currImageId)
    // console.log('x:', getMeme())
    toggleViews()
    renderMeme()
}

function toggleViews() {
    /**changes views from image gallery to meme editor and the opposite */
    const elImgGallery = document.querySelector('.image-gallery')
    const elMemeEditor = document.querySelector('.meme-editor')

    elImgGallery.classList.toggle('hide')
    elMemeEditor.classList.toggle('hide')
}