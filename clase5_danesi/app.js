/*
//ingresar usuario

let nombreUsuario = prompt("Ingresar nombre de usuario");
if (nombreUsuario == "") {
alert("No ingresaste el nombre de usuario");
}
else {
alert("Nombre de usuario ingresado " + nombreUsuario);
}

//costo del producto


const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

let precioProducto = 650;
let precioDescuento = 60;

let nuevoPrecio = resta(precioProducto,precioDescuento); 
console.log (nuevoPrecio);



// FUNCIONES 

solicitarDatos();

// SOLICITUD PRECIOS DE MACETAS Y PRODUCTOS A USUARIO

function solicitarDatos (){
    let num1 = Number (prompt ("Por favor, ingrese precio de su maceta o producto que quiere comprar"));
    let num2 = Number (prompt ("Por favor, ingrese segundo precio de su maceta o producto que quiere comprar"));
    let operador = prompt ("Por favor, para visualizar el monto final a abonar, ingrese el simbolo +");

    calcular (num1, num2, operador);
}

// CALCULO
function calcular (a,b,c) {

    let res;

    switch (c) {
        case "+": res= a+b;
        break;
        case "-": res= a-b;
        break;
        case "*": res= a*b;
        break;
        case "/": res= a/b;
        break;
        default: res= "La operación es incorrecta";
        break;
    }
    resultado(res);

//RESULTADO
    
function resultado (a){
    console.log (a)
    alert (a);
    }
}

*/

//OBJETOS

class Producto{
    constructor (nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseInt (precio);
        this.cantidad = cantidad;
        this.disponible = true;
 }

    Vender(){
        this.disponible = false;
    }
}

const producto1 = new Producto ("maceta flora", 890, 1);
const producto2 = new Producto ("planta echeveria", 250, 1);
producto1.Vender();

console.log(producto1);
console.log(producto2);