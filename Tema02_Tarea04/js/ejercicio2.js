window.onload = function() { //tras cargar la página ...
	visor1=document.getElementById("visor"); //referencia al visor
	mititulo=document.getElementById("titulo"); //referencia al pie de foto
}

//Se define la varibale para saber la posición del array
posicion = 1; 

function mifoto(num) { //cambiar la imagen
	posicion = num; 
	imagen = "../imagenes/ejercicio2/España" + num + ".jpg"; //ruta de la nueva imagen
    document.images["fotoVisor"].src = imagen; //cambiar imagen
    texto = document.images["moneda" + num].alt; //texto de pie de foto
    mititulo.innerHTML = texto; //cambiar pie de foto
}

function anteriorFoto() {
	if (posicion == 1) {
		posicion = 13; 
	} else {
		--posicion; 
	}
	mifoto(posicion);
}

function siguienteFoto() {
	if (posicion == 13) {
		posicion = 1; 
	} else {
		++posicion; 
	} 
	mifoto(posicion);
}