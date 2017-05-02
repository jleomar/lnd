function rellenaIsla(){
	var islas = ["Tenerife", "Gran Canaria", "Lanzarote", "Fuerteventura", "La Palma", "La Gomera", "El Hierro"];

	for(var i=0; i<islas.length; i++)
		document.write("<option>"+islas[i]+"</option>");
}

function rellenaDia(){
	for(var i=1; i<=31; i++) document.write("<option>"+i+"</option>");
}

function rellenaMes(){
	var mes=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	
	for (var i = 0; i<=mes.length-1; i++){
		document.write("<option>"+ mes[i]+"</option>");
	}
}

function rellenaAnno(){
	for(var i=1980; i<=2020; i++) document.write("<option>"+i+"</option>");
}