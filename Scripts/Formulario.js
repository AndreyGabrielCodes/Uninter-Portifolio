const formulario = document.getElementById('Formulario');
const mensagemSucesso = document.getElementById("MensagemSucesso");

formulario.addEventListener('submit', function(event){
    if (this.checkValidity()){
        //Impede o comportamento padrão quando não possui destino (voltar ao topo)
        event.preventDefault();
        mensagemSucesso.style.setProperty('display','block');
    }
})

function FecharMensagemSucesso(){
    mensagemSucesso.style.setProperty('display','none');
}