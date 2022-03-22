function Randomize() {
    var images = [
        'Sono sicuro che il tuo culetto starebbe bene nella nostra chat', 
        'Che ne pensi di mostrarmi la tua pesca?', 
        'Sono amante della frutta, mi mostri la tua pesca?', 
        'Me la mandi una foto di quel culetto?', 
        'Giuro che se mi mandi una foto del tuo culetto inizio a fare il bravo',
        'Mi hanno detto che le foto del culetto ti rendono felice, io sono molto triste oggi',
        'Giuro che inizio a studiare se mi mandi una fotina',
    ];
    
    var imageNum = Math.floor(Math.random() * images.length);
    document.querySelector('.random').innerHTML = images[imageNum];
}

window.onload = Randomize