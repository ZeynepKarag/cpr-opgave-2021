let cpr = "180400-7980";
let cpr1=[1];
let dato = cpr.slice(0,2);
let maaned = cpr.slice(2,4);
let aarstal = cpr.slice(4,6);
let koen = cpr.slice(10);


console.log("Dit indtastede CPR nummer er " + cpr)

//console.log(cpr.slice(0,2));
// tjek om det virker
// console.log(dato);


// Datoen, de første 2 cifre
if(dato >= 1 && dato <= 31){
    console.log("Datoen er gyldig");
    
}
else{
    console.log("Datoen er u-gyldig");
}

// Måneden, de næste 2 cifre
if(maaned >= 1 && maaned <= 12){
console.log("Måneden er gyldig")
}
else{
console.log("Måneden er u-gyldig")
}

// Årstal, de næste 2 cifre
if(aarstal >= 00 && aarstal <= 99){
    console.log("Årstallet er gyldigt")
}
 else{
console.log("Årstallet er u-gyldigt")
}

// Kønnet, det sidste cifre, hvis det er lige er du en pige, hvis du er en fyr er det ulige
if(koen % 2 == 0){
    console.log("Du er en pige")
}
else{
    console.log("Du er en fyr")
}
// % 2 == 00, betyder om tallet kan divideres med 2, hvis det kan er det et lige tal
// == 0, eller tallet er 0, så er det også et lige tal


// Længden på ens cpr nummer
if(cpr.length == 11){
console.log("Længden på dit CPR nummer er gyldigt")
}
else{
    console.log("Længden på dit CPR nummer er u-gyldigt")
}




















//Hvordan caster man et string til  et number, cpr1=Number(Cpr[1])

// console.log(typeofcpr1)
/*
if(cpr1 >= 1 && cpr1 <=31) {

}
*/


// brug slice hvis du fx vil slice 2 tal ud af gangen, fx 18-04-00-69-70
