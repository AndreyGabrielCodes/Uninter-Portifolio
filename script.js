const root = document.documentElement;
const alterarModo = document.getElementById("AlterarModo");
let modoClaro = true;
let modoSalvo = localStorage.getItem('modoClaro');

//Aplica o ultimo modo salvo ao carregar a página
if (modoSalvo){
    AlterarModo();
}

//Altera as propriedades das variáveis gerais do CSS para alterar a cor da página
function AlterarModo(){

    if (modoClaro){
        root.style.setProperty('--cor-fundo','#000000');
        root.style.setProperty('--cor-elementos', '#262626');
        root.style.setProperty('--cor-hover-botao','#6c6b6b');
        root.style.setProperty('--cor-texto','#ffffff');
        root.style.setProperty('--cor-box-shadow','#ffffff');
        alterarModo.src = 'images/lightModeIcon.png';
        alterarModo.title = 'Clique para alterar para o modo claro';
        modoClaro = false;
    } else{
        root.style.setProperty('--cor-fundo','#e7e4e3');
        root.style.setProperty('--cor-elementos','#ffffff');
        root.style.setProperty('--cor-hover-botao','#d1cecd');
        root.style.setProperty('--cor-texto','#000000');
        root.style.setProperty('--cor-box-shadow','000000');
        alterarModo.src = 'images/darkModeIcon.png';
        alterarModo.title = 'Clique para alterar para o modo escuro';
        modoClaro = true;
    }
    localStorage.setItem('modoClaro', modoClaro);
}