const root = document.documentElement;
const alterarModo = document.getElementById("AlterarModo");
let modoClaro = true;
let modoSalvo = localStorage.getItem('modoClaro');

//Altera as propriedades das variáveis gerais do CSS para alterar a cor da página
function AplicarModo(claroAtivo){

    if (claroAtivo){
        root.style.setProperty('--cor-fundo','#000000');
        root.style.setProperty('--cor-elementos', '#262626');
        root.style.setProperty('--cor-hover-botao','#6c6b6b');
        root.style.setProperty('--cor-texto','#ffffff');
        root.style.setProperty('--box-shadow','2px 2px 7px #ffffff');
        root.style.setProperty('--cor-input-form','#404040');
        alterarModo.src = 'images/lightModeIcon.png';
        alterarModo.title = 'Clique para alterar para o modo claro';
        modoClaro = false;
    } else{
        root.style.setProperty('--cor-fundo','#e7e4e3');
        root.style.setProperty('--cor-elementos','#ffffff');
        root.style.setProperty('--cor-hover-botao','#d1cecd');
        root.style.setProperty('--cor-texto','#000000');
        root.style.setProperty('--box-shadow','2px 2px 7px #7b7b7b');
        root.style.setProperty('--cor-input-form','#f3f3f3');
        alterarModo.src = 'images/darkModeIcon.png';
        alterarModo.title = 'Clique para alterar para o modo escuro';
        modoClaro = true;
    }
    
    localStorage.setItem('modoClaro', modoClaro);
}

//Aplica o ultimo modo salvo ao carregar a página
if(modoSalvo === 'false'){
    AplicarModo(true);
}
else{
    AplicarModo(false);
}

function AlterarModo(){
    AplicarModo(modoClaro);
}