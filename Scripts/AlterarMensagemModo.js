const mensagemModo = document.getElementById("MensagemAlterarModo");
let mensagemFechada = false;
let estadoMensagemSalva = localStorage.getItem('mensagemFechada');

//Verifica se a mensagem já foi clicada para não exibi-la novamente ao recarregar
if(estadoMensagemSalva == 'true'){
    AlterarExibicaoMensagem(false);
}
else{
    AlterarExibicaoMensagem(true);
}

function AlterarMensagem(){
    AlterarExibicaoMensagem(mensagemFechada);
}

//Controla o CSS para exibição da mensagem
function AlterarExibicaoMensagem(exibirMensagem){
    if(exibirMensagem){
        mensagemModo.style.setProperty('display','block');
    }
    else{
        mensagemModo.style.setProperty('display','none');
        mensagemFechada = true;
    }
    localStorage.setItem('mensagemFechada',mensagemFechada);
}