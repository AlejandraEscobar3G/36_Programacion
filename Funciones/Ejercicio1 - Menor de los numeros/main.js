// Escribe aquí tu codigo Javascript
function calcularMenor(a, b, c){
	var num1= a;
	var num2= b;
	var num3= c;
	if(num1<num2 && num1<num3){
		return num1;
	} else if(num2<num1 && num2<num3){
		return num2;
	} else {
		return num3;
	}
}
//Solicitando valores
var a = Number(prompt("Dame numero 1"));
var b = Number(prompt("Dame numero 2"));
var c = Number(prompt("Dame numero 3"));

var menor = calcularMenor(a, b, c);
		document.write("El numero menor es: " + menor);


