const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");
const contenedorsubtitulo = document.querySelector(".contenedor-subtitulo");
const contenedorparrafo = document.querySelector(".contenedor-parrafo");
copia.style.display = "none"

//Llaves de encriptación
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
//Mensaje secreto dado:  fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
//Focus
textA.focus();
//funcion para encriptar texto
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}
//Conectando función con el botón
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    if (textoEncriptado.length === 0 || /^\s+$/.test(textoEncriptado)) {
         textA.focus();
        swal.fire({
            icon: 'info',
            iconColor: '#3f5b9a',
            background: '#a7b9c0',
            title: '¡Ups!',
            confirmButtonColor: '#3f5b9a',
            text: 'El campo se encuentra vacío. Escriba el texto que desea encriptar',
          });
        
        textArea.value = "";
       
    } else if (/[^a-z ]/.test(textoEncriptado)) {
        textA.focus();
        swal.fire({
            icon: 'info',
            iconColor: '#3f5b9a',
            background: '#a7b9c0',
            title: 'Recuerda!!! ',
            confirmButtonColor: '#3f5b9a',
            text: 'Solo se permiten letras minúsculas y sin acentos',
          });
        textArea.value = "";
    } else {
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none";
        contenedorsubtitulo.style.display = "none";
        contenedorparrafo.style.display = "none";
        textArea.value = "";
        textA.focus();
        copia.style.display = "block"
    }
}
//funcion para desencriptar texto
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptada
}
//Conectando función con el botón
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    if (textoDesencriptado.length === 0 || /^\s+$/.test(textoDesencriptado)) {
        textA.focus();
        swal.fire({
            icon: 'info',
            iconColor: '#3f5b9a',
            background: '#a7b9c0',
            title: '¡Ups!',
            confirmButtonColor: '#3f5b9a',
            text: 'El campo se encuentra vacío. Escriba el texto que desea desencriptar',
          });
        textArea.value = "";
    } else if (/[^a-z ]/.test(textoDesencriptado)) {
        textA.focus();
        swal.fire({
            icon: 'info',
            iconColor: '#3f5b9a',
            background: '#a7b9c0',
            title: 'Recuerda!!! ',
            confirmButtonColor: '#3f5b9a',
            text: 'Solo se permiten letras minúsculas y sin acentos.',
          });
        textArea.value = "";
    } else {
        mensaje.value = textoDesencriptado
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        contenedorsubtitulo.style.display = "none";
        contenedorparrafo.style.display = "none";
        textA.focus();
        copia.style.display = "block"
    }
}
//funcion para copiar el texto
function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    textA.focus();
    mensaje.value = "";
    swal.fire({
        icon: 'info',
        iconColor: '#3f5b9a',
        background: '#a7b9c0',
        title: 'Información ',
        confirmButtonColor: '#3f5b9a',
        text: 'Texto copiado al portapapeles',
      });
}