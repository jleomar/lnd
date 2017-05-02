var aleatorio1, aleatorio2, apuesta, contador = 0; 

window.onload = function() { 
	verDados(); 
}

function numeroAleatorio() {
	return Math.floor((Math.random() * 6) + 1);
}

function muestraDado(queImagen, queDado) {
	imagen = "imagenes/dado" + queDado + ".png"; 
	document.images[queImagen].src = imagen; 
}

function verDados() {
	if (contador <= 10) { 
		aleatorio1 = numeroAleatorio(); 
		aleatorio2 = numeroAleatorio();
		muestraDado("fotoDado1", aleatorio1);
		muestraDado("fotoDado2", aleatorio2); 
	} else {
		 location.href="http://www.ludopatia.org";
	}
}

function lanzamiento() { 
	apuesta = document.getElementById("apuesta").value;
	if (apuesta > 1 && apuesta < 13) {
		contador ++; 
		verDados()
		if (apuesta == aleatorio1 + aleatorio2) {
			alert("Felicidades. Eres un adivino")
		} 
	} else {
		alert("Introduzca valores entre 2 y 12");
	}
}



/*
var aleatorio1, aleatorio2, apuesta, contador = 0; 

window.onload = function(){ 
	verDados(); 
}

function verDados() {
	if (contador <= 10) { 
		aleatorio1 = Math.floor((Math.random() * 6) + 1);
		aleatorio2 = Math.floor((Math.random() * 6) + 1);  
		imagen1 = "imagenes/dado" + aleatorio1 + ".png"; 
		imagen2 = "imagenes/dado" + aleatorio2 + ".png";
		document.images["fotoDado1"].src = imagen1; 
		document.images["fotoDado2"].src = imagen2;
	} else {
		 location.href="http://www.ludopatia.org";
	}
}

function lanzamiento() { 
	apuesta = document.getElementById("apuesta").value;
	if (apuesta > 1 && apuesta < 13) {
		contador ++; 
		verDados()
		if (apuesta == aleatorio1 + aleatorio2) {
			alert("Felicidades. Eres un adivino")
		} 
	} else {
		alert("Introduzca valores entre 2 y 12");
	}
}
*/