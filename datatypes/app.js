// kasutaja sisend
let ringideArv = Number(prompt("Sisesta ringide arv"));
let porgandidKokku = 0;

let ring = 1;
while(ring <= ringideArv){

    if (ring % 2 == 0){
        porgandidKokku = porgandidKokku + ring
    }
    ring++
}

console.log(`Porgandite koguarv on ${porgandidKokku}.`)




