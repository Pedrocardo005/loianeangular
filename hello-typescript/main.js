var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
// O let e var compilam em var, que louco.s
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// Pode colocar o tipo, any ou nada e adicionar o valor logo em seguida.
var n1 = 'safasf';
n1 = 4;
