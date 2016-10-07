/*var numeros = [];
 
numeros.push(prompt("Introduce el primer número: "));
numeros.push(prompt("Introduce el segundo número: "));
numeros.push(prompt("Introduce el tercer número: "));
 
var ordenados = numeros.sort(function (a,b) {
    return a - b;
});
 
alert(ordenados);
*/
var numeros=[];
function ordenarNumeros(numeros){
	var orden = numeros.sort(function(a,b){
		return a - b;
	});
	return orden;
}

numeros.push(prompt("Introduce el primer numero"));
numeros.push(prompt("Introduce el segundo numero"));
numeros.push(prompt("Introduce el tercer numero"));
var ordenados = ordenarNumeros(numeros);
document.write(ordenados);
