'use strict'

var gNumOfImgs = 18
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
// var gImgs = [{ id: 1, url: '/img/square-memes/1.jpg', keywords: ['funny', 'cat'] }]
var gImgs = []

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function findImageForMeme(imageId) {
    /**find image for meme by given id */
    return gImgs.find(image => imageId === image.id)
}

function initializeImgs() {
    /**initializes gImgs with images */
    for (let i = 0; i < gNumOfImgs; i++) {
        gImgs.push({ id: i + 1, url: `/img/square-memes/${i + 1}.jpg`, keywords: ['funny', 'cat'] })
    }

}

function getImages() {
    /**get array of images for gallery */
    return gImgs
}

function setImg(imageId) {
    /** set image for meme */
    gMeme.selectedImgId = imageId
}

function getMeme() {
    /**get the meme obj from gMeme */
    return gMeme
}

function setLineTxt(textVal) {
    /** update the gMeme txt by user input*/
    if (textVal) gMeme.lines[0].txt = textVal
}
