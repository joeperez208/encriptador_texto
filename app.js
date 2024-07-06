function encriptar() {

    var frace = document.getElementById("textoEncriptado").value.
    toLowerCase();

    // i = es para que tome letras mayusculas y minusculas
    //g = tome en cuenya toda lenea o la oracion
    // m = tomo en cuenta multiples lineas 

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML=
    textoEncriptado;
}