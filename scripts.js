/*
  --------------------------------------------------------------------------------------
  Função para obter do servidor, via requisição GET, a lista existente de veículos cadastrados
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/veiculos';
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      data.veiculos.forEach(item => insertList(item.nome, item.setor, item.placa))
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()


/*
  --------------------------------------------------------------------------------------
  Função para inserir um novo cadastro de veículo na lista do servidor, via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputNome, inputSetor, inputPlaca) => {
  const formData = new FormData();
  formData.append('nome', inputNome);
  formData.append('setor', inputSetor);
  formData.append('placa', inputPlaca);

  let url = 'http://127.0.0.1:5000/veiculo';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u0058");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}


/*
  --------------------------------------------------------------------------------------
  Função para remover um cadastro de veículo, mediante click no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const nomeItem = div.getElementsByTagName('td')[2].innerHTML
      if (confirm("A operação não poderá ser desfeita. Deseja realmente excluir este veículo?")) {
        div.remove()
        deleteItem(nomeItem)
        alert("Removido!")
      }
    }
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para deletar um cadastro de veículo da lista do servidor, via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (item) => {
  console.log(item)
  let url = 'http://127.0.0.1:5000/veiculo?placa=' + item;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo cadastro de veículo, com nome, setor e placa 
  --------------------------------------------------------------------------------------
*/
const newItem = () => {
  let inputFuncionario = document.getElementById("novoFuncionario").value;
  let inputSetor = document.getElementById("novoSetor").value;
  let inputPlaca = document.getElementById("novaPlaca").value;

  if (inputFuncionario === '') {
    alert("Preencha o nome completo do funcionário");
  } else if (inputPlaca === '') {
    alert("Placa do veículo não pode estar em branco");
  } else {
    insertList(inputFuncionario, inputSetor, inputPlaca)
    postItem(inputFuncionario, inputSetor, inputPlaca)
    alert("Veículo Cadastrado com sucesso!")
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (nomeFuncionario, setorFuncionario, placaVeiculo) => {
  var item = [nomeFuncionario, setorFuncionario, placaVeiculo]
  var table = document.getElementById('myTable');
  var row = table.insertRow();
  
  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  insertButton(row.insertCell(-1))
  document.getElementById("novoFuncionario").value = "";
  document.getElementById("novoSetor").value = "";
  document.getElementById("novaPlaca").value = "";

  removeElement()
}

/*
  --------------------------------------------------------------------------------------
  Função para consultar no servidor, via requisição GET, uma placa informada
  --------------------------------------------------------------------------------------
*/

const consultaPlaca = () => {
  var consulta_un = document.getElementById("placaConsultada").value;

  let url = 'http://127.0.0.1:5000/veiculo?placa=' + consulta_un;
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((dados) => {procuraPlaca(dados, consulta_un)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para verificar se a placa informada consta da lista do servidor
  --------------------------------------------------------------------------------------
*/

const procuraPlaca = async (dados, consulta_un) => {

  var placa_procurada = dados.placa
  if (consulta_un === '') {
    alert("Não foi informada placa para a consulta");
    } else if (consulta_un == placa_procurada) {
    alert("Veículo Autorizado");
    } else {
    alert("Veículo NÃO Autorizado. \nVerifique se a placa foi informada corretamente.")
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para mostrar/esconder um elemento
  --------------------------------------------------------------------------------------
*/

const mudarEstado = (el) => {
  var display = document.getElementById(el).style.display;
  if(display == "flex")
      document.getElementById(el).style.display = 'none';
  else
      document.getElementById(el).style.display = 'flex';
}