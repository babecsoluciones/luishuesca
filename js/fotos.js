function mifuncion3(){

var fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg"];
var largoft = fotos.length; 
var contador = 1;
	
function cambia(){
	
	 document.getElementById("imgp").src = "images/fotos/"+fotos[contador];
	
	for (var i = 0; i < 7; i++ ) {
	if (contador != i) {	
	document.getElementById("apnt"+i).style.visibility= "hidden";
	document.getElementById("tmb"+i).style.borderColor= "transparent";
	document.getElementById("tmb"+i).style.opacity= "0.4";
		document.getElementById("tmb"+i).onmouseover = function() {
		 this.style.opacity =  "1";
		}
		document.getElementById("tmb"+i).onmouseout = function() {
		 this.style.opacity =  "0.4";
		}
	}
	else {	
		document.getElementById("apnt"+i).style.visibility= "visible";
		document.getElementById("tmb"+i).style.borderColor= "#1077A5";
		document.getElementById("tmb"+i).style.opacity= "1";
		
			document.getElementById("tmb"+i).onmouseover = function() {
			 this.style.opacity =  "1";
			}
			document.getElementById("tmb"+i).onmouseout = function() {
			 this.style.opacity =  "1";
			}
		}
	}
	
	
	
	++contador;
	
	if (contador == largoft) {
	contador = 0;
	}
	
	}	
	
	
	var cmbio = setInterval(cambia,10000);
	
	
	
	function seleccion() {
   var nmr = this.getAttribute("id"); 
   
   if (nmr=="tmb0") {contador=0;}
   if (nmr=="tmb1") {contador=1;}
   if (nmr=="tmb2") {contador=2;}
   if (nmr=="tmb3") {contador=3;}
   if (nmr=="tmb4") {contador=4;}
   if (nmr=="tmb5") {contador=5;}
   if (nmr=="tmb6") {contador=6;}
   
   clearInterval(cmbio);
   cambia();
   cmbio = setInterval(cambia,10000);
   }  
     
	document.getElementById("tmb0").onclick = seleccion;	
	document.getElementById("tmb1").onclick = seleccion;
	document.getElementById("tmb2").onclick = seleccion;	
	document.getElementById("tmb3").onclick = seleccion;
	document.getElementById("tmb4").onclick = seleccion;	
	document.getElementById("tmb5").onclick = seleccion;
	document.getElementById("tmb6").onclick = seleccion;			

};  
