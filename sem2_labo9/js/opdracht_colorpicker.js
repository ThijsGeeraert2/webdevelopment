const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        // we moeten zowel op het input als het change event reageren,
        // zie http://stackoverflow.com/questions/18544890
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    if (localStorage.getItem("rgbString")){
        let rgb = localStorage.getItem("rgbString")
        let tekst = rgb.replaceAll(' ','')
        tekst = tekst.slice(4,-1)
        let red = tekst.slice(0,tekst.indexOf(','))
        let green = tekst.slice(tekst.indexOf(',')+1,tekst.lastIndexOf(','))
        let blue = tekst.slice(tekst.lastIndexOf(',')+1)
        document.getElementById("lblRed").innerHTML=red;
        document.getElementById("lblGreen").innerHTML=green;
        document.getElementById("lblBlue").innerHTML=blue;
        document.getElementById('sldRed').value = red
        document.getElementById('sldGreen').value = green
        document.getElementById('sldBlue').value = blue
    }
    if (localStorage.getItem("favorites")){
        restoreFavorites()
    }

    let button = document.querySelector('button')
    button.addEventListener('click',save)
    update()

}

const getRGBString = () => {
    updateLBL()
    localStorage.setItem("rgbString", `rgb(${getRedSlider()}, ${getGreenSlider()}, ${getBlueSlider()})`)
    return `rgb(${getRedSlider()}, ${getGreenSlider()}, ${getBlueSlider()})`
}

const getRedSlider = () => {
    return document.getElementById("sldRed").value;
}

const getGreenSlider = () => {
    return document.getElementById("sldGreen").value;
}

const getBlueSlider = () => {
    return document.getElementById("sldBlue").value;
}

const updateLBL = () => {
    document.getElementById("lblRed").innerHTML=getRedSlider();
    document.getElementById("lblGreen").innerHTML=getGreenSlider();
    document.getElementById("lblBlue").innerHTML=getBlueSlider();
}

const update = () => {
    updateLBL()
    main_swatch_invullen()
}

const main_swatch_invullen = (tekst) => {
    let swatch=document.getElementById("swatch");
    swatch.style.backgroundColor= getRGBString();
}

const updateSliderValues = (red, green,blue) => {
    document.getElementById('sldRed').value = red
    document.getElementById('sldGreen').value = green
    document.getElementById('sldBlue').value = blue
}

const restore = (event) => {
    let geklikteStyle = event.target.style.backgroundColor
    let tekst = geklikteStyle.replaceAll(' ','')
    tekst = tekst.slice(4,-1)
    let red = tekst.slice(0,tekst.indexOf(','))
    let green = tekst.slice(tekst.indexOf(',')+1,tekst.lastIndexOf(','))
    let blue = tekst.slice(tekst.lastIndexOf(',')+1)
    updateSliderValues(red,green,blue)
    updateLBL()
    main_swatch_invullen(geklikteStyle)

}

const clear = (event) => {
    let parent = event.target.parentElement
    let saved = parent.parentElement
    saved.removeChild(parent)
    let favorites = JSON.parse(localStorage.getItem("favorites"))
    let new_favorites = favorites.filter(function (elem) {
        return elem !== event.target.parentElement.style.backgroundColor
    })
    localStorage.setItem("favorites",JSON.stringify(new_favorites))
    event.stopPropagation() // anders wordt restore opnieuw uitgevoerd aangezien deze door bubbling wordt uitgevoerd omdat de clear knop in een div staat (waar je zogezegd ook op geklikt hebt)
}
const filter = (string,parentRgbString) => {
    return string !== parentRgbString
}

const createClearButton = () => {
    let clear_button = document.createElement('button')
    clear_button.innerText = 'X'
    clear_button.addEventListener("click", clear)
    clear_button.className = "clear_btn"
    return clear_button;
}

const save = () => {
    let new_div = document.createElement('div')
    new_div.style.backgroundColor = getRGBString()
    new_div.className = "swatch"
    new_div.addEventListener("click", restore)
    new_div.appendChild(createClearButton())

    let div_saved = document.getElementById('saved')
    div_saved.appendChild(new_div)

    let favorieten = document.getElementsByClassName("swatch")
    let rgbStrings = []
    for (let i = 1; i < favorieten.length; i++) {
        rgbStrings.push(favorieten[i].style.backgroundColor)
    }
    localStorage.setItem("favorites",JSON.stringify(rgbStrings))
}

window.addEventListener("load", initialize);