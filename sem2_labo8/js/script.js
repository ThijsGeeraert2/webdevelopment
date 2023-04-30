let currentDate = new Date();
let myDate = new Date(2023,9,3);

let verschil = myDate-currentDate;
verschil = Math.floor(verschil/(1000*60*60*24));
console.log(verschil);