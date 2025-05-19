const tarefas = document.getElementById("listaClientes");

fetch("https://crudcrud.com/api/02aabce8c8a44a3c914eb662b558c494/tarefas")
.then(resposta => console.log(resposta.json()))
.then((listaDeTarefas) => {
  listaDeTarefas.forEach(tarefa => {
    const item = document.createElement("li");
    item.innerHTML = `${tarefa.descricao} <button>X</button>`;
    tarefas.appendChild(item);
  });
});

document.getElementById("add").addEventListener("click", () => {
  const descricao = document.getElementById("tarefa").value;
  fetch("https://crudcrud.com/api/02aabce8c8a44a3c914eb662b558c494/tarefas", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({descricao: descricao})
  })
  .then(resposta => resposta.json())
  .then((tarefa) => {
    const item = document.createElement("li");
    item.innerHTML = `${tarefa.descricao} <button>X</button>`;
    tarefas.appendChild(item);
  })
})
