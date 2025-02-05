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

function f_buscar() {
var ndni = document.getElementById("dni").value;
var sumador = 0;

while ( tabla[sumador][0] != ndni &&  sumador < 8 ) {
    sumador++;
}

if (tabla[sumador][0] == ndni ){
document.getElementById("nombre").value = tabla[sumador][1];
document.getElementById("imagen").src= tabla[sumador][2];
document.getElementById("error").innerHTML="";
}

else {
document.getElementById("error").innerHTML="No encontrado";
document.getElementById("error").style.color= "red";
document.getElementById("nombre").value = "";
document.getElementById("imagen").src= "dni.png"
document.getElementById("dni").value = "";
}

}

function f_limpiar(){

document.getElementById("nombre").value = "";
document.getElementById("imagen").src= "dni.png"
document.getElementById("dni").value = "";
document.getElementById("error").innerHTML="";
}