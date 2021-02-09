// Console de Hola mundo//
let primerExercici = ("Hola Mundo");
console.log(primerExercici);

//Alert mi nombre//
const myName = "Me llamo Jordi!";
alert(myName);

//Concatenación//
let nombre = "Jordi ";
let apellido = "Calatayud";
let nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

//Suma numeros y concatenación//
let num1 = 63;
let num2 = 49;

let result = num1 + num2;
console.log("La suma entre " + num1 + " y " + num2 + " es: " + result);

//Condicional If prueba exámen//
let nota_examen = 7.2;
if (nota_examen >= 0 && nota_examen <= 4.9) {
    alert("Desafortunadamente supendiste el examen con un " + `${nota_examen}`);

} else if (nota_examen >= 5 && nota_examen <= 10) {
    alert("Enhorabuena, aprovaste el examen con un " + `${nota_examen}`)
} else if (nota_examen < 0 || nota_examen > 10) {
    console.log("Los números menores a 0 y mayores de 10 el programa no los identifica.")

} else {
}

console.log("----------------------------------------------");


//Modificación de palabras//

let fraseStr = "Tinc un cotxe de color blau";

let resultado = fraseStr.replace("blau", "verd");

let resultadoVocales = fraseStr.replace(/o/g, "u");
console.log(resultado);
console.log(resultadoVocales);

console.log("----------------------------------------------");

//Iterar un array //
let objecte = ["taula", "cadira", "ordinador", "llibreta"];

for (let i = 0; i < objecte.length; i++) {
    console.log("L'objecte " + objecte[i] + " està en la posició " + [i]);
}

console.log("-----------------------------------------------");


//Calculadora nivel-1//

function calculadora(operador, valor1, valor2) {
    var resultat;
    if (operador == "suma") {
        return valor1 + valor2;

    } else if (operador == "resta") {
        return valor1 - valor2;

    } else if (operador == "multiplicacio") {
        return valor1 * valor2;

    } else { }
}
resultat = calculadora("suma", 10, 13);
document.write("El resultat de l'operació es: " + resultat + "<br/>");



//Calculadora nivel-2//
function calculadora(operador, valor1, valor2) {
    var resultat;
    if (operador == "suma") {
        return valor1 + valor2;
    } else if (operador == "resta") {
        return valor1 - valor2;

    } else if (operador == "multiplicacio") {
        return valor1 * valor2;

    }
    else if (operador == "divisio" && valor2 == 0) {
        return "El numero es Infinito";
    }
    else if (operador == "divisio") {
        return valor1 / valor2;

    } else {

    }
}
resultat = calculadora("divisio", 10, 0);
document.write("El resultat de l'operació es: " + resultat);




