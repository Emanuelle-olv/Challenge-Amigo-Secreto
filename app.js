//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

document.addEventListener("DOMContentLoaded", function () {
    const inputNome = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const amigoForm = document.getElementById("amigoForm");
    const sortearBtn = document.getElementById("sortearBtn");

    let nomes = [];

    function adicionarAmigo(event) {
        event.preventDefault(); // Impede o recarregamento da página

        let nome = inputNome.value.trim();
        if (nome === "") {
            alert("Você precisa digitar um nome!");
            return;
        }

        nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

        if (nomes.includes(nome)) {
            alert("Este nome já foi adicionado!");
            return;
        }

        nomes.push(nome);
        atualizarLista();
        inputNome.value = "";
    }

    function atualizarLista() {
        listaAmigos.innerHTML = "";
        nomes.forEach((nome) => {
            let li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (nomes.length < 2) {
            alert("Você precisa adicionar pelo menos dois amigos para sortear!");
            return;
        }

        const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
        resultado.innerHTML = `<p>O amigo secreto sorteado é: <strong>${sorteado}</strong></p>`;
    }

    amigoForm.addEventListener("submit", adicionarAmigo);
    sortearBtn.addEventListener("click", sortearAmigo);
});
