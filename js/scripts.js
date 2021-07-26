var bt_enviar_cliente = document.getElementById("btn-submit-cliente");

if (bt_enviar_cliente) {
  bt_enviar_cliente.addEventListener("click", function () {
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("adress").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let bairro = document.getElementById("bairro").value;

    let dataCliente = {
      nome,
      email,
      telefone,
      email,
      cep,
      endereco,
      cidade,
      bairro,
    }

    let converterData = JSON.stringify(dataCliente);
    localStorage.setItem("cadastroCliente", converterData);
    alert("Cliente cadastrado!");
  });
}

var bt_enviar_produto = document.getElementById("btn-submit-produto");

if (bt_enviar_produto) {
  bt_enviar_produto.addEventListener("click", function () {
    let codproduto = document.getElementById("codproduto").value;
    let nomeproduto = document.getElementById("nomeproduto").value;
    let descricao = document.getElementById("descricao").value;
    let valorproduto = document.getElementById("valor").value;

    let DataProd = {
      codproduto,
      nomeproduto,
      descricao,
      valorproduto,
    }

    let converterDataProd = JSON.stringify(DataProd);
    localStorage.setItem("cadastroProduto", converterDataProd);
    alert("Produto cadastrado!");
  });
}







class Validator {
  // método para exibir inputs que são necessários
  required(input) {

    let inputValue = input.value;

    if (inputValue === '') {
      let errorMessage = `Este campo é obrigatório`;

      this.printMessage(input, errorMessage);
    }

  }

}