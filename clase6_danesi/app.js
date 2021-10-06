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

// RESULTADO
    
function resultado (a){
    console.log (a)
    alert (a);
    }
}



// OBJETOS

class Producto{
    constructor (nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseInt (precio);
        this.cantidad = cantidad;
        this.disponible = true;
 }

    vender(){
        this.disponible = false;
    }
}

const producto1 = new Producto ("maceta flora", 890, 1);
const producto2 = new Producto ("planta echeveria", 250, 1);
producto1.vender();

console.log(producto1);
console.log(producto2);

*/

// ARRAYS

class Producto {
    constructor (nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseInt (precio);
        this.cantidad = cantidad;
        this.disponible = true;
    }
}



var arrayProductos = [];
    do {
        var comprobacion = prompt('Ingrese el nombre del producto (maceta o combo) y una vez ingresada la cantidad de productos a comprar, coloque la palabra FIN para terminar');
        if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
            break;
        }else{
            nombreP = comprobacion;
        var precioP = prompt('Ingrese el precio del prodcucto que desea comprar');
        var cantidadP = prompt('Ingrese la cantidad de productos que desea comprar');
        arrayProductos.push(new Producto(nombreP, precioP, cantidadP));
        }
    }
    while (comprobacion != "fin"|| comprobacion != "FIN"|| comprobacion != "Fin")

    console.log (arrayProductos);

    for (var producto of arrayProductos) {
        alert(" El producto seleccionado es: "+producto.nombre+ "");
        alert(" La cantidad solicitada es: "+producto.cantidad +"");
        alert(" El precio es $ "+producto.precio + "");

    console.log(producto.nombre);
    console.log(producto.cantidad);
    console.log(producto.precio);
    }


//ARRAYS  COMPLEMENTARIO
class Compra{
    constructor(producto, cantidad){
        return {
            producto : producto,
            cantidad : parseInt(cantidad),
            Items: () => {
            return `Tu pedido es el siguiente:  ${quantity} producto/s, cuyo/s nombre/s es/son: ${producto}. Su pedido ha sido procesado. Gracias por elegirnos! `
            }
        }
    }
}

let cantidadProductos = parseInt(prompt('Cuantos productos diferentes quiere comprar?'))

let counter = 0;
const listadoPedidos = [];

while(isNaN(cantidadProductos)){
    cantidadProductos = parseInt(prompt('Debe ingresar un valor numerico. Cuantos productos diferentes quiere comprar?'))
}

while(counter < cantidadProductos){
    const prod = prompt('Ingrese el nombre del producto que desea comprar:')
    const qt = parseInt(prompt('Cuantos desea comprar?'))
    
    const producto = new Compra(prod, qt);  
    
    listadoPedidos.push(producto)
    console.log(producto.Items())
    counter++;
}

listadoPedidos.sort((a, b) => (a.quantity > b.quantity) ? 1 : -1)

console.log(listadoPedidos)

