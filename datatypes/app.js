// kasutaja sisend
let poialpoisid = Number(prompt("Mitu pöialpoissi tahab õunu?"));

let lumivalgekeOunad = 14
let poialpoiss = 1;
while(poialpoiss <= poialpoisid){
    let ounad = Math.ceil(Math.random() * 2)
    console.log(ounad)
    lumivalgekeOunad = lumivalgekeOunad - ounad
    poialpoiss++
}
console.log(`Lumivalgekesele jäi ${lumivalgekeOunad}`)





