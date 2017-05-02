function generarTabla() {
	var filas = document.getElementById("filas").value;
	var columnas = document.getElementById("columnas").value;
	var muestra = document.getElementById("resultado");

	var tabla = '<table id="tabla">';

	for (var i = 0; i < filas; i ++) {
		if (i == 0) {
			tabla += '<tr id="par">';
		} else {
			if (i % 2 == 0) {
				tabla += '<tr id ="par">';
			} else {
				tabla += '<tr id ="impar">';
			}
		}
		for (var j = 0; j < columnas; j ++) {
			tabla += '<td>(' + i + ',' + j + ')</td>';
		}
		tabla += '</tr>';
	}
	tabla += '</table>';
	document.getElementById("resultado").innerHTML = tabla;
}
