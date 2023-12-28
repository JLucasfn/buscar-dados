// Variável global para armazenar a lista de pedidos
let listaPedidos = [];

// Função para atualizar a lista de pedidos com base nos dados fornecidos
function atualizarListaPedidos(list) {
  // Transforma todas as listas em uma única lista
  listaPedidos = list.flat();

  // Retorna a lista de pedidos atualizada
  return listaPedidos;
}

// Função para obter a lista de pedidos
function getListaPedidos(){
  return listaPedidos;
};

// Exporta as funções para uso externo
module.exports = {
  atualizarListaPedidos,
  getListaPedidos
}
