// Escribe aquí tu codigo Javascript
function calcularPar_Impar(a){
	if (a%2 === 0){
		return "es par";
	} else{
		return "es impar";
	}
}

//Solicitando numeros
var a = Number(prompt("Dame un numero entero"));
var resultado = calcularPar_Impar(a);
document.write("El numero " + a + " " + resultado);


