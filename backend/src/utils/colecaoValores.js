// Cria uma coleção a partir de duas listas fornecidas
function criarColecao(valor1, valor2){
    // Verifica se as listas têm o mesmo comprimento
    if (valor1.length !== valor2.length){
        console.log("As listas de pedidos e situações têm tamanhos diferentes.");
        return {}; // Retorna um objeto vazio caso as listas sejam de tamanhos diferentes
    }

    const _colecao = {}; // Cria um objeto vazio para armazenar a coleção resultante

    // Itera sobre as listas e cria a coleção relacionando os elementos das duas listas
    for (let i = 0; i < valor1.length; i++){
        _colecao[valor1[i]] = valor2[i];
    };

    return _colecao; // Retorna a coleção criada
}

// Exporta a função criarColecao para ser usada em outros arquivos
module.exports = { criarColecao };
