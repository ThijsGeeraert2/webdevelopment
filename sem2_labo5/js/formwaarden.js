button = document.getElementById("btn");
dv = document.getElementById("resultaat");

button.addEventListener("click",waarden);

console.log("hello");

function waarden(){
    let ir = document.getElementById("isroker");
    if(ir.checked===true){
        console.log("is een roker");
    }
    else{
        console.log("geen roker");
    }
}