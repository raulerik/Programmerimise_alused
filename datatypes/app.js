let kirjaTeema = prompt('Sisestage kirja teema pealkiri:');
let kirjaSuurus;
let kirjaLisa;

function isFloat(value) {
    if (
        typeof value === 'number' &&
        !Number.isNaN(value)
    ) {
        return true;
    }
    return false;
}
while (!isFloat(kirjaSuurus)){
    kirjaSuurus = parseFloat(prompt('Sisestage kirja suurus:'))
}
while (kirjaLisa !== 'jah' && kirjaLisa !== 'ei'){
    kirjaLisa= prompt('Kas kirjaga on kaasas fail?')
}
if(kirjaTeema.length ===0 || (kirjaLisa === 'jah' && kirjaSuurus > 1.0)){
    console.log('Kiri on spämm.')
}
else console.log('Kiri ei ole spämm.');


