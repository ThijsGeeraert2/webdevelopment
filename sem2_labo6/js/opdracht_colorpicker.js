const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    let button = document.querySelector('button')
    button.addEventListener('click',save)
    update()

}

const getRGBString = () => {
    updateLBL()
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
    event.stopPropagation()
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
}

window.addEventListener("load", initialize);