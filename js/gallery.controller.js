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

    // { id: 1, url: '/img/square-memes/1.jpg', keywords: ['funny', 'cat'] }

    if (currImages && elImgGallery) {
        // for (let i = 0; i < 2; i++) {
        //     const currUrl = currImages[i].url
        //     htmlImages.push(`<img src="${currUrl}" alt="meme-image">`)
        // }
        // console.log(htmlImages)
        // join elements
        // const galleryInnerHtml = htmlImages.join('')
        // console.log(galleryInnerHtml)
        // elImgGallery.innerHTML = galleryInnerHtml

        // creates array that contains images in html format, and joins to a string
        const imagesHtml = currImages.map(currImage => `<img src="${currImage.url}" alt="meme-image">`).join('')

        if (imagesHtml) elImgGallery.innerHTML = imagesHtml
    }
}