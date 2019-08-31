function mifuncion1(){
function inicio() {
    location.href = "index.html";
}
function conoceme() {
    location.href = "conoceme.html";
}
function libros() {
    location.href = "libros.html";
}
function contactame() {
    location.href = "contacto.html";
}


document.getElementById("inicio").onclick = inicio;
document.getElementById("conoceme").onclick = conoceme;
document.getElementById("libros").onclick = libros;
document.getElementById("contactame").onclick = contactame;
};  
