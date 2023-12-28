const { criarColecao } = require('./colecaoValores');
const { getListPedido, getListSituacao } = require('./dados');

// Função que recebe listas e cria uma coleção com elas
const receberLista = _ => {
    // Obtém listas de pedidos e situações
    const listSituacao = getListSituacao().flat();
    const listPedido = getListPedido().flat();
    
    // Cria uma coleção com as listas
    const colecao = criarColecao(listPedido, listSituacao);
    
    // Obtém chaves e situações da coleção criada
    const receberChaves = Object.keys(colecao).map(key => parseInt(key, 10));
    const receberSituacao = Object.values(colecao);
    
    // Retorna as chaves e situações obtidas
    return { chaves: receberChaves, situacao: receberSituacao };
};

// Função que busca um valor específico na coleção
const fazerBusca = valorBusca => {
    const { chaves, situacao } = receberLista(); // Obtém chaves e situações da coleção
    const encontrado = chaves.includes(valorBusca); // Verifica se o valor está na coleção
    
    // Verifica se o valor foi encontrado na coleção
    if (encontrado) {
        const index = chaves.indexOf(valorBusca);
        const valorEncontrado = situacao[index];
        return `A situação do pedido #${valorBusca} é: ${valorEncontrado}.`; // Retorna a situação do pedido
    } else {
        return `Não existe esse pedido.`; // Retorna uma mensagem de não encontrado
    }
}

// Exporta as funções para uso em outros arquivos
module.exports = {
    receberLista,
    fazerBusca
}
