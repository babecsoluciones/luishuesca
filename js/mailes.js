function mifuncion2(){
function comprueba()
{
var nombrep = document.getElementById("nombre").value;
var telefonop = document.getElementById("telefono").value;
var mailp = document.getElementById("maile").value;
var msjp = document.getElementById("mensaje").value;	
	
if (nombrep != 'Nombre *') {	
	document.getElementById("nombre").style.color= "#000000";
	}
	
	if (telefonop != 'Teléfono (10 dígitos) (opcional)') {	
	document.getElementById("telefono").style.color= "#000000";
	}
	
	if (mailp != 'Correo electrónico *') {	
	document.getElementById("maile").style.color= "#000000";
	}
	
	if (msjp != 'Mensaje *') {	
	document.getElementById("mensaje").style.color= "#000000";
	}
}


function borravl()
{
var algo = this.value; 
	if (algo == 'Nombre *' || algo == 'Teléfono (10 dígitos) (opcional)' || algo == 'Correo electrónico *' ||  algo == 'Mensaje *') {	
	this.value = '';
	this.style.color= "#000000";
	}
}

function nombreini() 
{
var vlnombre= document.getElementById("nombre").value;
	if (vlnombre == 'Nombre *' || vlnombre == '') {
	this.style.color= "#8E8E8E";
	this.value = 'Nombre *'
	}
}

function telfini() 
{
var vltel= document.getElementById("telefono").value;
	if (vltel == 'Teléfono (10 dígitos) (opcional)' || vltel == '') {
	this.style.color= "#8E8E8E";
	this.value = 'Teléfono (10 dígitos) (opcional)'
	}
}

function mailini() 
{
var vlmail= document.getElementById("maile").value;
	if (vlmail == 'Correo electrónico *' || vlmail == '') {
	this.style.color= "#8E8E8E";
	this.value = 'Correo electrónico *'
	}
}

function msjini() 
{
var vlmsj= document.getElementById("mensaje").value;
	if (vlmsj == 'Mensaje *' || vlmsj == '') {
	this.style.color= "#8E8E8E";
	this.value = 'Mensaje *'
	}
}



document.getElementById("nombre").onfocus = borravl;
document.getElementById("telefono").onfocus = borravl;
document.getElementById("maile").onfocus = borravl;
document.getElementById("mensaje").onfocus = borravl;

document.getElementById("nombre").onblur = nombreini;
document.getElementById("telefono").onblur = telfini;
document.getElementById("maile").onblur = mailini;
document.getElementById("mensaje").onblur = msjini;

comprueba();

/* Envio */

function envio() {
	var conteo = 0;
	var banderaenv = false;
	
    var nombre = document.ContactForm.nombre.value;	
	 var longnom = document.ContactForm.nombre.value.length;
		
				
		if(!(/^[a-zA-ZáéíóúñüàèÁÉÍÓÚÑÜ\s]*$/.test(nombre)) || longnom < 2 || longnom > 25 || nombre == 'Nombre')	
		{
			document.getElementById("tachenombre").style.display= "block";
		}
		else {
			++conteo;
			document.getElementById("tachenombre").style.display= "none";}

var telef = document.ContactForm.telefono.value;
var longtlf = document.ContactForm.telefono.value.length;

if (telef != "Teléfono (10 dígitos) (opcional)"){
	 if(!/^([0-9])*$/.test(telef) || longtlf < 10 || longtlf > 10 )	
		{
			document.getElementById("tachefon").style.display= "block";
		}
		else {document.getElementById("tachefon").style.display= "none";}
    }else {document.getElementById("tachefon").style.display= "none";}

    var maile = document.ContactForm.mail.value;
	 if( !(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/.test(maile)) ) 
	 {
		document.getElementById("tachemail").style.display= "block";		
	 }
		else {
			++conteo;
			document.getElementById("tachemail").style.display= "none";}	
		
	var descr = document.ContactForm.mensaje.value;
	var descrct = document.ContactForm.mensaje.value.length;
	
						if (descr == 'Mensaje *' || descrct > 500)
						{	
						document.getElementById("tachemsj").style.display= "block";		
						}
		           else {
		           	++conteo;
		           	document.getElementById("tachemsj").style.display= "none";}	
		           
		           
/* Ajax */	
	           
	if (conteo == 3) {
	banderaenv = true;
			if (banderaenv == true) {	
document.getElementById("envia").style.pointerEvents = 'none';
			comprobar();
		
		}
	}	           
				
					
}

/* Ajax Code */	
		var READY_STATE_COMPLETE=4;
var peticion_http = null;
 
function inicializa_xhr() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest(); 
  } else if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP"); 
  } 
}
 
function crea_query_string() {
  var nombre = document.getElementById("nombre");
  var telefono = document.getElementById("telefono");
  var mail = document.getElementById("maile");
  var mensaje = document.getElementById("mensaje");
 
  return "nombrepost=" + encodeURIComponent(nombre.value) +
         "&telefonopost=" + encodeURIComponent(telefono.value) +
         "&mailepost=" + encodeURIComponent(mail.value) +
         "&mensajepost=" + encodeURIComponent(mensaje.value) +
         "&nocache=" + Math.random();
} 
 
 
function comprobar() {
  var nombrepost = document.getElementById("nombre").value;
  var mailepost = document.getElementById("maile").value;
  var login = document.getElementById("mensaje").value;
  peticion_http = inicializa_xhr();
  if(peticion_http) {
    peticion_http.onreadystatechange = procesaRespuesta;
    peticion_http.open("POST", "php/envmail.php", true);
 
   peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var query_string = crea_query_string();
    peticion_http.send(query_string);
  }
}
 
function procesaRespuesta() {
  if(peticion_http.readyState == READY_STATE_COMPLETE) {
    if (peticion_http.status == 200) {
      document.getElementById("borrenv").innerHTML = peticion_http.responseText;  
    }
  }
}

document.getElementById("envia").onclick = envio;



};  
