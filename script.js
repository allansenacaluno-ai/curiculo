// Pegando os componentes da tela
var botaoMenu = document.querySelector('#botaoMenu');
var menuLateral = document.querySelector('#menu-lateral-id');
var fundoMenu = document.querySelector('#fundo-menu-id');
var linksMenu = document.querySelectorAll('.lista-menu a')

// Função para abrir e fechar o menu
function abrirFecharMenu() {
    menuLateral.classList.toggle("aberto");
    fundoMenu.classList.toggle("invisivel");
}

// Clique no botão
botaoMenu.addEventListener("click", abrirFecharMenu);

// Clique no fundo escuro
fundoMenu.addEventListener("click", abrirFecharMenu);

// 
linksMenu.forEach(function(links){
    links.addEventListener("click", abrirFecharMenu);
});