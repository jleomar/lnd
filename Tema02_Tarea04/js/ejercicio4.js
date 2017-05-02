var impBase = 12000;
var impCambioMotor = 0; 
var impCambioModelo = 0; 
var impCambioColor = 0; 
var impCambioPintura = 0;
var impCambioLlanta = 0; 
var impCambioClimatizador = 0;
var impCambioGps = 0; 
var impCambioOn = 0; 

function plusMotor(importePlus) {
	if (importePlus == 0) {
		document.getElementById("modelo3p").disabled = false;
		document.getElementById("modelo5p").disabled = true;
		document.getElementById("metalizada").disabled = true;
		document.getElementById("sistemaon1").disabled = true;
		document.getElementById("sistemaon2").disabled = true;
		document.getElementById("sistemaon2").checked = false; 
	} else {
		document.getElementById("modelo3p").disabled = true;
		document.getElementById("modelo5p").disabled = false;
		document.getElementById("metalizada").disabled = false;
		document.getElementById("sistemaon1").disabled = false;		document.getElementById("sistemaon2").disabled = false;
		document.getElementById("sistemaon2").checked = true; 
	}
	document.getElementById("llanta2").checked = true; 
	document.getElementById("clima2").checked = true; 
	document.getElementById("gps2").checked = true; 
	impBase = impBase + importePlus - impCambioMotor;
	impCambioMotor = importePlus;
	document.getElementById("impmotor").value=importePlus;
  	document.getElementById("impfinal").value=impBase;
}

function plusModelo(importePlus) {
	if (importePlus < 0) {
		document.getElementById("sistemaon1").disabled = true;
		document.getElementById("sistemaon2").disabled = true;
	} else {
		document.getElementById("sistemaon1").disabled = false;
		document.getElementById("sistemaon2").disabled = false;
	}	
	impBase = impBase + importePlus - impCambioModelo;
	impCambioModelo = importePlus;
	document.getElementById("impmodelo").value=importePlus;
  	document.getElementById("impfinal").value=impBase;
}

function plusColor(importePlus) {
	if (importePlus < 0) {
		document.getElementById("metalizada").disabled = true;
		document.getElementById("metalizada").checked = false; 
		plusPintura(0); 
	} else {
		document.getElementById("metalizada").disabled = false;
	}
	impBase = impBase + importePlus - impCambioColor;
	impCambioColor = importePlus;
	document.getElementById("impcolor").value=importePlus;
  	document.getElementById("impfinal").value=impBase;
}

function plusPintura(importePlus) {
	impBase = impBase + importePlus - impCambioPintura;
	impCambioPintura = importePlus;
	document.getElementById("imppintura").value=importePlus;
  	document.getElementById("impfinal").value=impBase;
}

function plusLlanta(importePlus) {
	impBase = impBase + importePlus - impCambioLlanta;
	impCambioLlanta = importePlus;
	document.getElementById("impllanta").value=importePlus;
  	document.getElementById("impfinal").value=impBase;
}

function plusClimatizador(importePlus) {
	impBase = impBase + importePlus - impCambioClimatizador;
	impCambioClimatizador = importePlus;
	document.getElementById("impclimatizador").value=importePlus;
  	document.getElementById("impfinal").value=impBase;
}

function plusGps(importePlus) {
	impBase = impBase + importePlus - impCambioGps;
	impCambioGps = importePlus;
	document.getElementById("impgps").value=importePlus;
  	document.getElementById("impfinal").value=impBase;
}

function plusOn(importePlus) {
	impBase = impBase + importePlus - impCambioOn;
	impCambioOn = importePlus;
	document.getElementById("impsistema").value=importePlus;
  	document.getElementById("impfinal").value=impBase;
}
