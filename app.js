//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os nomes

function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Captura o input
    let nome = input.value.trim(); // Obtém o valor e remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome."); // Validação de campo vazio
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    console.log("Lista de amigos:", amigos); // Exibe a lista no console
    input.value = ""; // Limpa o campo de entrada

    atualizarLista(); // Atualiza a lista na tela
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtém o elemento da lista
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Cria um novo <li>
        item.textContent = amigos[i]; // Define o nome do amigo como texto do <li>
        lista.appendChild(item); // Adiciona o <li> à lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!"); // Validação de lista vazia
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente ao índice

    let resultado = document.getElementById("resultado"); // Seleciona a lista de resultados
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`; // Exibe o sorteado na página
}