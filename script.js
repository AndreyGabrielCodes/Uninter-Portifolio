let modoClaro = true;
const root = document.documentElement;
const alterarModo = document.getElementById("AlterarModo");

function AlterarModo(){

    if (modoClaro){
        root.style.setProperty('--cor-fundo','#000000');
        root.style.setProperty('--cor-elementos', '#262626');
        root.style.setProperty('--cor-hover-botao','#000000');
        root.style.setProperty('--cor-texto','#ffffff');
        alterarModo.src = 'images/lightModeIcon.png';
        alterarModo.title = 'Clique para alterar para o modo claro';
        modoClaro = false;
    } else{
        root.style.setProperty('--cor-fundo','#e7e4e3');
        root.style.setProperty('--cor-elementos','#ffffff');
        root.style.setProperty('--cor-hover-botao','#d1cecd');
        root.style.setProperty('--cor-texto','#000000');
        alterarModo.src = 'images/darkModeIcon.png';
        alterarModo.title = 'Clique para alterar para o modo escuro';
        modoClaro = true;
    }
}