var items = document.getElementsByClassName('item');
function cambiarDisplay(numItem) {
    var item = items[numItem];
    if (item.style.display == '') {
        item.style.display = 'none';
    } else {
        item.style.display = '';
    }
}


// ejercicio 1

function bcolor(color) {
    if (document.body.style.background != color) {
        document.body.style.background = color;
    } else {
        document.body.style.background = 'white';
    }
}

// ejercicio 2

var textarea = document.getElementById('textarea');
var counter = document.getElementById('counter');

textarea.addEventListener('input', contador)

function contador() {
    var character_count = textarea.value.length;
    document.getElementById("counter").innerHTML = character_count + " caracteres";
}

// ejercicio 3

var solo1 = false;
function notas() {
    var nombres = []
    var nota = []
    var nombreaprov = []
    var notaaprov = []
    for (var n = 0; n < alumnos.length; n++) {
        var store1 = alumnos[n].nombre
        var store2 = alumnos[n].nota
        nombres.push(store1)
        nota.push(store2)

        if (alumnos[n].nota >= 7) {
            nombreaprov.push(store1)
            notaaprov.push(store2)
        }
    }
    console.log(nombres)
    console.log(nota)
    console.log(nombreaprov)
    console.log(notaaprov)


    if (!solo1) {
        solo1 = true;
        document.getElementById("demo").innerHTML += "Los Alumnos que Aprobaron <br>"
        for (var n = 0; n < notaaprov.length; n++) {
            document.getElementById("demo").innerHTML += "" + nombreaprov[n] + ", " + notaaprov[n] + '<br>';
        }
    }
}

