const { receberLista } = require("./buscarPedido");

// Array para armazenar a lista de situações
let listaSituacao = [];

// Função para atualizar a lista de situações com base nos dados fornecidos
function atualizarListaSituacao(list) {
    // Transforma todas as listas em uma única lista
    listaSituacao = list.flat();

    // Chama a função receberLista para atualizar os dados
    receberLista();

    // Retorna a lista de situações atualizada
    return listaSituacao;
};

// Função para obter a lista de situações
function getListaSituacao(){
    return listaSituacao;
};

// Exporta as funções para uso externo
module.exports = {
    atualizarListaSituacao,
    getListaSituacao
};
