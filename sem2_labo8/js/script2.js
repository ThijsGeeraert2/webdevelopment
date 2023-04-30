let student1 = {};

student1.voornaam = "tommy";
student1.achternaam = "jefke";
student1.richting = "toegepaste informatica";

let jstring = JSON.stringify(student1);

console.log(jstring);

const student2 = JSON.parse(jstring);

console.log(student2.voornaam);