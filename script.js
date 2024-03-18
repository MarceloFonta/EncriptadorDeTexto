
let inputEncriptar = document.getElementById("texto-encriptar");
let inputDesencriptar = document.getElementById("texto-desencriptar");



function validarMensaje(mensaje){
    let patron = /^[a-zñ0-9\s]+$/;
    return patron.test(mensaje);
}


function encriptador() {

    document.getElementById("boton-encriptar").disabled = true;

	let mensajeEncriptar="";

    if (validarMensaje(inputEncriptar.value.trim())){

        for(let i=0; i<inputEncriptar.value.length; i++){
            switch(inputEncriptar.value[i]){
                case "a": mensajeEncriptar+="ai";
                    break;
                case "e": mensajeEncriptar+="enter";
                    break;
                case "i": mensajeEncriptar+="imes";
                    break;
                case "o": mensajeEncriptar+="ober";
                    break;
                case "u": mensajeEncriptar+="ufat";
                    break;
                default:
                     mensajeEncriptar+=inputEncriptar.value[i];
        }

    }
        efectoEscribir(mensajeEncriptar, inputDesencriptar, "boton-encriptar");
    }else{
        openErrorModal()

        document.getElementById("boton-encriptar").disabled = false;
    }

}


function efectoEscribir(input, output, habilitarBoton){

    let velocidadDelEfectoLento=20;
    let velocidadDelEfectoRapido=5;

    //la velocidad depende de la longitud del texto.

    output.classList.add("ocultar-placeholder");
    output.value='';
    let i = 0;
    let arrFromStr=input.trim().split('');
   

    if(input.length<300){ 
        let a = setInterval(function(){
            output.value+=arrFromStr[i]; 
            i++;
            
            if(i == arrFromStr.length){
                clearInterval(a);
                document.getElementById(habilitarBoton).disabled = false;
                output.classList.remove("ocultar-placeholder");              
            }
        },velocidadDelEfectoLento);

    }else{
        let a = setInterval(function(){
            output.value+=arrFromStr[i]; 
            i++;
            
            if(i == arrFromStr.length){
                clearInterval(a);
                document.getElementById(habilitarBoton).disabled = false;
                output.classList.remove("ocultar-placeholder")
            }
        },velocidadDelEfectoRapido);
    }
}


function desencriptador(){

    document.getElementById("boton-desencriptar").disabled = true;

    let mensajeDesencriptar='';
    
    let arreglo = inputDesencriptar.value.split(" ");
    
    if (validarMensaje(inputDesencriptar.value.trim())){
        for (let i=0; i<arreglo.length;i++){
            mensajeDesencriptar += arreglo[i].replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes', 'i').replaceAll('ober','o').replaceAll('ufat','u');
            mensajeDesencriptar +=" ";
        }
        efectoEscribir(mensajeDesencriptar, inputEncriptar, "boton-desencriptar");
    }

    else{
        openErrorModal()

        document.getElementById("boton-desencriptar").disabled = false;
    }

}


function openErrorModal() {
    const modal = document.getElementById('modal');
    modal.showModal();
    
    modal.addEventListener('click', function() {
        modal.close();
    });
}





