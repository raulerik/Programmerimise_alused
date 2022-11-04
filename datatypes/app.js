let istekoht = prompt('Kas soovite valida ("ise") või loosida ("loos")?')
while(istekoht !== 'ise' && istekoht !== 'loos'){
    istekoht = prompt('Kas soovite valida ("ise") või loosida ("loos")?')
}
if(istekoht === 'ise'){
    let kasAknasIste = prompt('Kas soovite istuda akna ääres("aken") või mitte("muu")?')
    while(kasAknasIste !== 'aken' && kasAknasIste !== 'muu'){
        kasAknasIste = prompt('Kas soovite istuda akna ääres("aken") või mitte("muu")?')
    }
    switch (kasAknasIste) {
        case "aken":
            console.log('Valisite ise. Aknakoht!')
            break
        case "muu":
            console.log('Valisite ise. Vahekäigukoht!')
            break
    }
}
if(istekoht==='loos'){
    let randInt = Math.floor(Math.random() *3   );
    switch (randInt) {
        case 0:
        case 1:
            console.log('Istekoht loositi. Vahekäigukoht!')
            break
        case 2:
            console.log('Istekoht loositi. Aknakoht!')
            break
    }
}



