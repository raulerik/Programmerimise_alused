let ainepunktid = Number(prompt("Sisestage ainepunktide arv:"))
let nadalad = Number(prompt("Sisestage nädalate arv:"))

let tunnid = ainepunktid * 26;
let nadalasToimetan = tunnid / nadalad;
console.log("Ühe nädala eeldatav ajakulu:" + Math.round(nadalasToimetan) + " tundi.")