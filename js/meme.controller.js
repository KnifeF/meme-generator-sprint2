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

    var img = new Image()
    img.src = 'img/square-memes/1.jpg'
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.font = '48px serif'

        gCtx.fillStyle = 'white'
        gCtx.textAlign = 'center'
        gCtx.fillText('Hello world', gElCanvas.width / 2, 50)
    }

}