
const restoreFavorites = () => {
    let favorieten = JSON.parse(localStorage.getItem("favorites"))
    for (let i = 0; i < favorieten.length ; i++) {
        let new_div = document.createElement('div')
        new_div.style.backgroundColor = favorieten[i]
        new_div.className = "swatch"
        new_div.addEventListener("click", restore)
        new_div.appendChild(createClearButton())
        let div_saved = document.getElementById('saved')
        div_saved.appendChild(new_div)
    }
}