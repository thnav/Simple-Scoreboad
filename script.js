const hDisplay = document.getElementById('hDisplay');
const gDisplay = document.getElementById('gDisplay');
const hReset  = document.getElementById('hResetBtn');
const gReset  = document.getElementById('gResetBtn');

let hCount = 0;
let gCount = 0;

document.addEventListener('click', (e) => {
    if (e.target.id === 'hFirstBtn') {
        hCount++;
        hDisplay.textContent = hCount;
    }
    if (e.target.id === 'hSecondBtn') {
        hCount += 2;
        hDisplay.textContent = hCount;
    }
    if (e.target.id === 'hThirdBtn') {
        hCount += 3;
        hDisplay.textContent = hCount;
    }
    if (e.target.id === 'gFirstBtn') {
        gCount++;
        gDisplay.textContent = gCount;
    }
    if (e.target.id === 'gSecondBtn') {
        gCount += 2;
        gDisplay.textContent = gCount;
    }
    if (e.target.id === 'gThirdBtn') {
        gCount += 3;
        gDisplay.textContent = gCount;
    }

});

hReset.addEventListener('click', ()=> {
    hCount = 0;
    hDisplay.textContent = hCount;
});
gReset.addEventListener('click', ()=> {
    gCount = 0;
    gDisplay.textContent = gCount;
});