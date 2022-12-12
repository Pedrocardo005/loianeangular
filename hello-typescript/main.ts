var minhaVar = 'minha variavel';

function minhaFunc(x, y) {
    return x + y;
}
// O let e var compilam em var, que louco.s
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});

class Matematica {
    soma(x, y) {
        return x + y;
    }
}

// Pode colocar o tipo, any ou nada e adicionar o valor logo em seguida.
var n1 = 'safasf';
n1 = 4;
