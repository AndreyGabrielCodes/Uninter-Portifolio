const formulario = document.getElementById('Formulario');

formulario.addEventListener('submit', function(event){
    if (this.checkValidity()){
        //Impede o comportamento padrão quando não possui destino (voltar ao topo)
        //event.preventDefault();
    }
})