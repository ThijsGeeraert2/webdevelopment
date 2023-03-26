function setup () {
    let i = 0;
    const gemeentes = [];
    let doorgaan = new Boolean(true);
    while(doorgaan){

        let gemeente = prompt("geef een gemeente");
        if(gemeente=="stop"){
            doorgaan=false;
        }
        gemeentes[i] = gemeente;

        i++;
    }

    gemeentes.splice(-1);
    var select = document.getElementById(
"arr");

    for(var k = 0; k < gemeentes.length; k++){
        var gem = gemeentes[k];
        var el = document.createElement("option");
        el.textContent = gem;
        el.value = gem;
        select.appendChild(el);
    }

}

window.addEventListener("load",setup);

