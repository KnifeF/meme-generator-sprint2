'use strict'

var gElCanvas
var gCtx


function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme()
}


function renderMeme() {
    /** renders an image on the canvas and a line of text on top*/

    const currMeme = getMeme()

    const img = new Image()
    img.src = 'img/square-memes/1.jpg'
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.font = '48px serif'

        // gCtx.fillStyle = 'white'
        // gCtx.textAlign = 'center'
        // gCtx.font = "30px Arial"

        currMeme.lines.forEach(line => {
            gCtx.textAlign = line.align
            gCtx.font = `${line.size}px Arial`
            gCtx.fillStyle = line.color
            gCtx.fillText(line.txt, gElCanvas.width / 2, 50)
        })
        // gCtx.fillText('Hello world', gElCanvas.width / 2, 50)

    }

}

function updateMeme(elTextVal) {
    /**renders updated meme */
    setLineTxt(elTextVal)
    renderMeme()
}
