const tarefas = document.getElementById("listaClientes");

fetch("https://crudcrud.com/api/7f520d1e131b4b8685f4424cdd54e106/tarefas")
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
  fetch("https://crudcrud.com/api/7f520d1e131b4b8685f4424cdd54e106/tarefas", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({descricao: descricao, _id: _id})
  })
  .then(resposta => resposta.json())
  .then((tarefa) => {
    const item = document.createElement("li");
    item.innerHTML = `${tarefa.descricao} ${tarefa._id}<button id="delete">X</button>`;
    tarefas.appendChild(item);
  })
})

document.getElementById("delete")
document.addEventListener("click", () => {
  console.log(document.getElementById("delete"))
  fetch(`https://crudcrud.com/api/7f520d1e131b4b8685f4424cdd54e106/tarefas`,{
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    },
  })
})
