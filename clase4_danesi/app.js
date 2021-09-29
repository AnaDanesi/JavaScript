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

