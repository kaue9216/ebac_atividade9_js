const API_URL = "https://crudcrud.com/api/56f40a8fbff843f58c18bc07557271d8/clientes";
const listaClientes = document.getElementById("listaClientes");
const inputTarefa = document.getElementById("tarefa");
const botaoAdd = document.getElementById("add");

// Carrega clientes quando a página é carregada
window.addEventListener('load', carregarClientes);

// Adiciona evento de clique no botão Cadastrar
botaoAdd.addEventListener("click", () => {
  const nomeCliente = inputTarefa.value.trim();

  if (nomeCliente === "") {
    alert("Por favor, digite um nome para o cliente");
    return;
  }

  cadastrarCliente(nomeCliente);
});

// Função para cadastrar cliente
function cadastrarCliente(nome) {
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      // Adicionando um email vazio já que seu formulário não tem campo de email
      email: ""
    })
  })
  .then(resposta => resposta.json())
  .then(cliente => {
    inputTarefa.value = ""; // Limpa o campo de input
    carregarClientes(); // Recarrega a lista de clientes
  })
  .catch(error => console.error("Erro ao cadastrar cliente:", error));
}

// Função para carregar clientes
function carregarClientes() {
  fetch(API_URL)
    .then(resposta => resposta.json())
    .then(clientes => {
      listaClientes.innerHTML = ""; // Limpa a lista antes de recarregar

      if (clientes.length === 0) {
        listaClientes.innerHTML = "<li>Nenhum cliente cadastrado</li>";
        return;
      }

      clientes.forEach(cliente => {
        const item = document.createElement("li");
        item.innerHTML = `
          ${cliente.nome}
          <button onclick="excluirCliente('${cliente._id}')" id="delete">X</button>
        `;
        listaClientes.appendChild(item);
      });
    })
    .catch(error => console.error("Erro ao carregar clientes:", error));
}

// Função para excluir cliente
function excluirCliente(id) {
  if (confirm("Tem certeza que deseja excluir este cliente?")) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      carregarClientes(); // Recarrega a lista após exclusão
    })
    .catch(error => console.error("Erro ao excluir cliente:", error));
  }
}
