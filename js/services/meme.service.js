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
            txt: 'When you press on belly button,',
            size: 18,
            align: 'center',
            color: 'white',
            strokeColor: 'black',
            font: 'impact',
            yPos: 50
        },
        {
            txt: 'You also press on the belly..',
            size: 14,
            align: 'left',
            color: 'white',
            strokeColor: 'black',
            font: 'impact',
            yPos: 200
        },
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
    // if (textVal) gMeme.lines[0].txt = textVal
    if (textVal) {
        const currIdx = gMeme.selectedLineIdx
        gMeme.lines[currIdx].txt = textVal
    }
}

function setMemeLineColor(optStyle, clr) {
    /** update relevant color of meme text in the model gMeme*/
    const currIdx = gMeme.selectedLineIdx
    if (clr) {
        if (optStyle === 'fill') gMeme.lines[currIdx].color = clr
        else gMeme.lines[currIdx].strokeColor = clr
    }
}

function setFontSize(changeBy) {
    const currIdx = gMeme.selectedLineIdx
    if (changeBy && gMeme.lines[currIdx].size + changeBy >= 8) {
        gMeme.lines[currIdx].size += changeBy
    }
}

function setAlign(alignOpt) {
    const currIdx = gMeme.selectedLineIdx
    gMeme.lines[currIdx].align = alignOpt
}

function changeSelectedLine() {
    if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = 1
    else gMeme.selectedLineIdx = 0
}
