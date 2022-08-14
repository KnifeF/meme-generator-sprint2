'use strict'

// 1. Use a single set of control-boxes to handle all the
// different lines ("control-box" is the section containing the
// text line and buttons).
// Text (of line) shall be updated while typing
// The user can switch the selected line by clicking the switch-line button, he can
// also click the text on the canvas.
// Mark the selected line with a frame (so the user can see which line is selected)
// 2. As a default, Use the common meme font "Impact", white with black stroke.
// 3. Set of controls: font family, font color, font size, L-R-C alignment.
// 4. Up-Down alignment arrows for positioning the text line (you may hide them
// later if you implement line dragging).
// 5. “Delete-Line” and “Add-Line” Buttons.
// 6. “Download” Button/Link of the created Meme image
// 7. First to lines shall appear at start editing a new meme – ready to be edited.
// First two lines shall be at the TOP and BOTTOM of canvas, further lines at the
// center


var gElCanvas
var gCtx

function onInit() {
    initGallery()

    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    renderMeme()
}


function renderMeme() {
    /** renders an image on the canvas and a line of text on top*/

    const currMeme = getMeme()
    const currImage = findImageForMeme(currMeme.selectedImgId)

    const img = new Image()
    img.src = (currImage) ? currImage.url : 'img/square-memes/1.jpg'

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        // gCtx.font = '48px serif'

        currMeme.lines.forEach(line => {
            gCtx.textAlign = line.align
            gCtx.font = `${line.size}px Arial`
            gCtx.strokeStyle = line.strokeColor
            gCtx.fillStyle = line.color
            gCtx.strokeText(line.txt, gElCanvas.width / 2, 50)
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

function toggleModal(classNameOpt) {
    /**toggle the modal from hidden to shown and the opposite */
    const elModal = document.querySelector('.modal')
    if (elModal) {
        elModal.classList.toggle('hide')
        // const elModalDiv = elModal.querySelector('.' + classNameOpt)
        // if (elModalDiv) elModalDiv.classList.toggle('hide')
    }
}

function updateColorStyle(optStyle, inputVal) {
    /** update relevant color of meme text*/
    setMemeLineColor(optStyle, inputVal)
    renderMeme()
    // if (inputVal) gMeme.lines[0].color = inputVal
    // gMeme.lines[0].color = (optStyle === fill)
}

function updateFontSize(fontOpt) {
    if (fontOpt === 'increase') setFontSize(1)
    else setFontSize(-1)
    renderMeme()
}