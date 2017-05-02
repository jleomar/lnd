function lanzamiento() { 
	var aleatorio = Math.floor((Math.random() * 6) + 1);
	imagen = "../imagenes/ejercicio3/dado" + aleatorio + ".png"; 
	document.images["fotoDado"].src = imagen; 
}
