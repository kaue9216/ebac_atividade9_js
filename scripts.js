const tarefas = document.getElementById("listaClientes");

fetch("https://crudcrud.com/api/458831905ff44b48ba45d9fa41a0d8d7/tarefas")
.then(resposta => resposta.json())
.then((listaDeTarefas) => {
  listaDeTarefas.forEach(tarefa => {
    const item = document.createElement("li");
    item.innerHTML = `${tarefa.descricao} <button id="delete">X</button>`;
    tarefas.appendChild(item);
  });
});

document.getElementById("add").addEventListener("click", () => {
  const descricao = document.getElementById("tarefa").value;
  fetch("https://crudcrud.com/api/458831905ff44b48ba45d9fa41a0d8d7/tarefas", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({descricao: descricao})
  })
  .then(resposta => resposta.json())
  .then((tarefa) => {
    const item = document.createElement("li");
    item.innerHTML = `${tarefa.descricao} <button id="delete" onclick="remove(${tarefa._id})">X</button>`;
    tarefas.appendChild(item);
  })
})

function remove(id) {
  console.log(document.getElementById("delete"))
  fetch(`https://crudcrud.com/api/458831905ff44b48ba45d9fa41a0d8d7/tarefas/${id}`,{
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    },
  })
}
