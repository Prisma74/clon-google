let nombreUsuario ="Camilo";
let edadUsuario = parseInt("25");
let esEstudiante = ("si").toLowerCase() == "sí";
let mensaje = `Hol, ${nombreUsuario}`; 
mensaje +=  `Tienes ${edadUsuario} años`;

if (edadUsuario >= 18) {
 mensaje += " Ere mayor de edad.";
} else {
 mensaje += " Eres menor de edad.";
}
console.log(esEstudiante);
if (esEstudiante) {
 mensaje += " Tienes derecho a un descuento por ser estudiante.";
}
console.log(mensaje);