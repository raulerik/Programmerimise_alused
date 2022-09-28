let vanus = prompt("Sisestage enda vanus:");
let sugu = prompt("Sisestage enda sugu:");
let treening = prompt("Sisestage treeningu tüüp:");


let pulsisagedusMax;

if(sugu == "n" || sugu == "N") {
        pulsisagedusMax = 206 - 0.88 * vanus;
}
if(sugu == "m" || sugu == "M") {
        pulsisagedusMax = 220 - vanus;
}

// treeningtüüp
let minPulss;
let maxPulss;

if(treening == 1) {
        minPulss = 0.5 * pulsisagedusMax;
        maxPulss = 0.7 * pulsisagedusMax;
} else if(treening == 2) {
        minPulss = 0.7 * pulsisagedusMax;
        maxPulss = 0.8 * pulsisagedusMax;
} else if(treening == 3) {
        minPulss = 0.8 * pulsisagedusMax;
        maxPulss = 0.87 * pulsisagedusMax;
}

// ümardamine
minPulss = Math.round(minPulss);
maxPulss = Math.round(maxPulss);

// output

console.log("Pulsisagedus peaks olema vahemikus " + minPulss + " kuni " + maxPulss);



