//array 10X3 DNI NOMBRE Foto
var tabla = new Array (9);
tabla[0] =  ["06020487C","Mariano Rajoy","rajoy.jpg"];
tabla[1] =  ["51929293A","Javier Milei","Milei.jpg"];
tabla[2] =  ["06024457D","Santiago Abascal","Santi.jpg"];
tabla[3] =  ["06025346V","Donald Trump","Donald.jpg"];
tabla[4] =  ["24903590B","Jordi Wild","jordi.jpeg"];
tabla[5] =  ["41143569L","Nayib Bukele","Bukele.jpg"];
tabla[6] =  ["56765765G","Vladimir Putin","Putin.jpg"];
tabla[7] =  ["02875856R","Isabel Diaz","Ayuso.jpg"];
tabla[8] =  ["06020455Z","Angela Merkel","merkel.jpg"];

//creamos la funcion buscar
function f_buscar() {

//creamos una variable ndni en la que vamos a almacenar  
// el valor del elemento con el id dni
var ndni = document.getElementById("dni").value;

//creamos una variable de control
var sumador = 0;

//Hacemos un bucle para buscar el dni
while ( tabla[sumador][0] != ndni &&  sumador < 8 ) {
    sumador++;
}

//hacemos una condicion de que si el valor escrito (ndni) es igual 
// al que encontro el bucle lo muestre en un input de texto en modo 
// lectura
if (tabla[sumador][0] == ndni ){

//escribe el nombre encontrado
document.getElementById("nombre").value = tabla[sumador][1];

//escribe la imagen relacionada al dni
document.getElementById("imagen").src= tabla[sumador][2];

//quita el rastro de no encontrado por si una busqueda anterior 
// fuen en vano
document.getElementById("error").innerHTML="";
}

//si la anterior condicion es falsa entonces mostrara no 
// encontrado en un h1
else {

//ecribe no encontrado
document.getElementById("error").innerHTML="No encontrado";

//modificacion del color de ese elemento
document.getElementById("error").style.color= "red";

//estas tres lineas vacian los campos de una busqueda anterior exitosa
document.getElementById("nombre").value = "";
document.getElementById("imagen").src= "dni.png"
document.getElementById("dni").value = "";
}

}

//creamos una funcion para el boton de limpiar
function f_limpiar(){

//estas 4 lineas vacian todos los campos haya lo que haya

document.getElementById("nombre").value = "";
document.getElementById("imagen").src= "dni.png"
document.getElementById("dni").value = "";
document.getElementById("error").innerHTML="";
}