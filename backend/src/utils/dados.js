// Listas para armazenar dados de situação e pedido
let listSituacao = [];
let listPedido = [];

// Define a lista de situações com os dados fornecidos
function setListSituacao(data) {
  listSituacao = data;
}

// Define a lista de pedidos com os dados fornecidos
function setListPedido(data) {
  listPedido = data;
}

// Obtém a lista de situações
function getListSituacao() {
  return listSituacao;
}

// Obtém a lista de pedidos
function getListPedido() {
  return listPedido;
}

// Exporta as funções para uso externo
module.exports = {
  setListSituacao,
  setListPedido,
  getListSituacao,
  getListPedido
};
