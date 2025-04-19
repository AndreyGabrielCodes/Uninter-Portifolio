const formulario = document.getElementById('Formulario');
const mensagem = document.getElementById("MensagemSucesso");

formulario.addEventListener('submit', function(event){
    if (this.checkValidity()){
        //Impede o comportamento padrão quando não possui destino (voltar ao topo)
        event.preventDefault();
        mensagem.style.setProperty('display','block');
    }
})

function FecharMensagemSucesso(){
    mensagem.style.setProperty('display','none');
}