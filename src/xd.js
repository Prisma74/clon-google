let nombreUsuario ="Camilo";
let edadUsuario = parseInt("25");
let esEstudiante = ("si").toLowerCase() == "sí";
let mensaje = `Hola, ${nombreUsuario}`; 
mensaje +=  `Tienes ${edadUsuario} año`;

if (edadUsuario >= 18) {
 mensaje += " Eres mayor de edad.";
} else {
 mensaje += " Eres menor de edad.";
}
console.log(esEstudiante);
if (esEstudiante) {
 mensaje += " Tienes derecho a un descuento por ser estudiante.";
}
console.log(mensaje);