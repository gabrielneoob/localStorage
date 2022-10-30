// LocalStorage

// Exemplo  1 - Armazeenando e Recuperando
// Store
localStorage.setItem("nome", "Gabriel");

// Retrieve
const ex1 = document.querySelector('#ex1');
ex1.innerHTML = localStorage.getItem("nome")

// Exemplo 2

// Store
localStorage.nome = "Arthur";

// Retrieve
document.querySelector('#ex2').innerHTML = localStorage.nome;

// Exemplo 3 - Removendo dados
localStorage.removeItem("nome");

// seleção de elementos
const inputText = document.querySelector('input');
const salvar = document.querySelector('#salvar')
const carregar = document.querySelector('#carregar')


// functions 

function salvarDado(e) {
  e.preventDefault();
  localStorage.dado = inputText.value;
}

function carregarDado(e) {
  e.preventDefault();
  if (localStorage.dado)
    inputText.value = localStorage.dado;
}


// events
salvar.addEventListener('click', salvarDado)
carregar.addEventListener('click', carregarDado)
