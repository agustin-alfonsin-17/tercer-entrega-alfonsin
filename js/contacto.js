const enviar = document.querySelector('.submit')
console.log(enviar);

enviar.addEventListener("click", mensajeEnviado);
function mensajeEnviado(){
    alert ('Tu mensaje se envio correctamente, en los proximos dias te llegara un correo!')
}