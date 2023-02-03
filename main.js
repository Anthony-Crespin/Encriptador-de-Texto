var btnEncriptar = document.querySelector("#btnEncriptar");
var btnDesencriptar = document.querySelector("#btnDesencriptar");
var btnLimpiar = document.querySelector("#btnLimpiar");
var btnCopiar = document.querySelector("#btnCopiar");

var parrafoMostrado = "";

function encriptar(){

    var texto = document.querySelector("#texto").value;
    var before = document.querySelector(".sidebar_antes");
    var after = document.querySelector(".sidebar_despues");
    var parrafoMostrado = document.querySelector("#texto_desencriptado");

    if(texto == ""){
        Swal.fire({
            title: 'Alerta',
            text: "Ingrese el texto a Encriptar!",
            icon: 'warning'
        })
    } else {
        resultado = texto.replaceAll("e","enter");
        resultado = resultado.replaceAll("i","imes");
        resultado = resultado.replaceAll("a","ai");
        resultado = resultado.replaceAll("o","ober");
        resultado = resultado.replaceAll("u","ufat");

        before.classList.add("oculto");
        after.classList.remove("oculto");

        btnEncriptar.classList.add("activo");
        btnDesencriptar.classList.remove("activo");

        parrafoMostrado.innerHTML = resultado;

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Texto encriptado correctamente.',
            showConfirmButton: false,
            timer: 1000
        })

        function copiarResultado(){
            navigator.clipboard.writeText(parrafoMostrado.innerHTML);
            Swal.fire({
                title: 'Copiado',
                text: "El texto a sido copiado con exito!",
                icon: 'success'
            })
        }
        
        btnCopiar.onclick = copiarResultado;
    }

}

function desencriptar(){
    var texto = document.querySelector("#texto").value;
    var before = document.querySelector(".sidebar_antes");
    var after = document.querySelector(".sidebar_despues");
    var parrafoMostrado = document.querySelector("#texto_desencriptado");

    if(texto == ""){
        Swal.fire({
            title: 'Alerta',
            text: "Ingrese el texto a Desencriptar!",
            icon: 'warning'
        })
    } else {
        resultado = texto.replaceAll("enter","e");
        resultado = resultado.replaceAll("imes","i");
        resultado = resultado.replaceAll("ai","a");
        resultado = resultado.replaceAll("ober","o");
        resultado = resultado.replaceAll("ufat","u");

        before.classList.add("oculto");
        after.classList.remove("oculto");

        btnEncriptar.classList.remove("activo");
        btnDesencriptar.classList.add("activo");

        parrafoMostrado.innerHTML = resultado;

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Texto desencriptado correctamente.',
            showConfirmButton: false,
            timer: 1000
        })

        function copiarResultado(){
            navigator.clipboard.writeText(parrafoMostrado.innerHTML);
            Swal.fire({
                title: 'Copiado',
                text: "El texto a sido copiado con exito!",
                icon: 'success'
            })
        }
        
        btnCopiar.onclick = copiarResultado;
    }
}

function limpiarDatos(){
    document.querySelector("#texto").value = "";
    document.querySelector("#texto").focus();
    document.querySelector("#texto_desencriptado").innerHTML = "";
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnLimpiar.onclick = limpiarDatos;