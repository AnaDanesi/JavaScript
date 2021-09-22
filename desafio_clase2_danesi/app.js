/*desafio 1 

let nombre = prompt('ingresa tu nombre');
let apellido = prompt('ingresa tu apellido');

console.log(nombre);
console.log(apellido);

console.log(nombre + "  " + apellido);



var numero1 = 2;
let numero2 = 5;

let resultadoSuma = numero1 + numero2;
*/

//practicando condicionales: if

let numero = 15
if (numero == 15) {
    alert ("Bienvenido/a!");
}
if (numero == 20) {
    alert ("no veras este mensaje");
}

let nombreUsuario = prompt("Ingresar nombre de usuario");
if (nombreUsuario == "") {
alert("No ingresaste el nombre de usuario");
}
else {
alert("Nombre de usuario ingresado " + nombreUsuario);
}

// practicando en clase
let frio= true;
if (frio) {
    console.log ("debo abrigarme")
}

/*operadores comparacion
asignar =
igual ==
mayor >
menor<
mayor igual >=
menor igual <=
estracitamente igual ===
estricamente distinto !=
*/

let edad=prompt("Indicanos tu edad")
if (edad >18){
    console.log ("Podés ingresar al spa");
}else {
    console.log("Sos menor, no podés ingresar al spa")
}

// Contraseña

let cont = "anabella"
let pass= prompt ("Ingresá su contraseña")
if(pass == cont){
    console.log ("Contraseña correcta");
} else if (pass==="anadanesi") {
    console.log ("Eres el administrador");
} else {
    console.log ("Contraseña incorrecta");
}

// Ingreso al spa

const nombrePersona1 = "anabella"
const nombrePersona2 = "carolina"
const nombrePersona3 = "mariel"

let nombreDinamico = prompt ("¿Cuál es tu nombre?")

nombreDinamico = nombreDinamico.toLowerCase()

if (nombreDinamico === nombrePersona1 || nombreDinamico === nombrePersona2 || nombreDinamico === nombrePersona3) {
    console.log ("Podés ingresar, disfruta del relax");
} else {
    console.log ("No podés ingresar al spa, no figuras como cliente")
}






