// Importações dos módulos e dependências
const { fazerBusca } = require('../utils/buscarPedido');
const { criarColecao } = require('../utils/colecaoValores');
const { setListSituacao, setListPedido } = require('../utils/dados'); // Funções de configuração das listas
const { atualizarListaPedidos } = require('../utils/valoresPedidos'); // Função para atualizar a lista de pedidos
const { atualizarListaSituacao } = require('../utils/valorSituacao'); // Função para atualizar a lista de situações

const axios = require('axios'); // Cliente HTTP
const express = require('express'); // Framework web
const { google } = require('googleapis'); // Biblioteca para interagir com as APIs do Google
const app = express(); // Instância do Express
const seed = 4000; // Porta do servidor

app.use(express.json()); // Configuração para o uso do JSON

// Configurar cabeçalhos para permitir solicitações de qualquer origem (CORS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Função para autenticação e acesso à planilha do Google
async function getAuthSheets(){
    // Configurações de autenticação
    const auth = new google.auth.GoogleAuth({
        keyFile: "credenciais.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    // Instância do serviço do Google Sheets
    const googleSheets = google.sheets({
        version: 'v4',
        auth: client
    });

    const spreadsheetId = "Informe o ID da sua planilha aqui.";

    return {
        auth,
        client,
        googleSheets,
        spreadsheetId
    };
};

// Rota para receber um valor do cliente e realizar uma busca na planilha
app.post('/valorPassado', (req, res) => {
    try {
        const valorPedido = req.body.valorPedido; // Recebe o valor enviado pelo cliente

        const resultado = fazerBusca(valorPedido); // Chama a função de busca com o valor recebido
        res.json({ resultado }); // Retorna o resultado da busca
    } catch (error){
        console.log(`Erro na solicitação. ${error.message}`);
    }
});

// Rota para obter informações sobre a planilha
app.get("/metadata", async(req, res) => {
    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    try {
        const metadata = await googleSheets.spreadsheets.get({
            auth,
            spreadsheetId
        });
    
        res.send(metadata); // Retorna informações sobre a planilha
    } catch (error){
        console.log(`Erro na solicitação. ${error.message}`);
    }
});

// Rota para obter valores específicos da planilha
app.get("/getRows", async(req, res) => {
    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    try {
        const getRows = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range: "Pedidos",
            valueRenderOption: "UNFORMATTED_VALUE",
            dateTimeRenderOption: "FORMATTED_STRING"
        });
    
        res.send(getRows.data); // Retorna os valores obtidos da planilha
    } catch (error){
        console.log(`Erro na solicitação. ${error.message}`);
    }
});

// Rota para obter valores específicos da planilha e atualizar listas
app.get("/getValores", async (req, res) => {
    const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

    try {
        // Obter valores da planilha
        const getValorSit = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range: "Pedidos!S5:T51",
            valueRenderOption: "UNFORMATTED_VALUE",
            dateTimeRenderOption: "FORMATTED_STRING"
        });

        const getValorPed = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range: "Pedidos!Q5:R51",
            valueRenderOption: "UNFORMATTED_VALUE",
            dateTimeRenderOption: "FORMATTED_STRING"
        });

        res.send({
            valorSit: getValorSit.data,
            valorPed: getValorPed.data
        });

        // Atualiza as listas de situação e pedidos com os valores obtidos
        setListSituacao(getValorSit.data.values);
        setListPedido(getValorPed.data.values);

        // Atualiza listas internas com os novos valores
        atualizarListaSituacao(getValorSit.data.values);
        atualizarListaPedidos(getValorPed.data.values);

    } catch (error) {
        console.log(`Erro na solicitação. ${error.message}`);
    }
});

// Rota para obter uma coleção de valores (não detalhada aqui)
app.get("/getColecao", async(req,res) => {
    try {
        res.send(criarColecao());
    } catch(error){
        console.log(`Erro na solicitação. ${error.message}`);
    }
});

// Inicializa o servidor na porta especificada
app.listen(seed, async () => {
    console.log(`O servidor está hospedado na porta ${seed}`);
    
    try {
        // Faz uma requisição para a rota getValores assim que o servidor iniciar
        await axios.get('http://localhost:4000/getValores');
    } catch (error) {
        console.error('Erro ao chamar a rota getValores:', error.message);
    }
});
