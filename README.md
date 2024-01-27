# Busca de Pedidos

Este é um projeto de busca de pedidos utilizando planilhas do Google Sheets como fonte de dados. O objetivo é permitir a busca por um número de pedido e retornar sua situação correspondente.

## Funcionalidades

- Recebe um número de pedido e verifica sua situação na planilha.
- Fornece informações sobre a planilha e seus dados.
- Atualiza internamente as listas de pedidos e situações conforme os valores obtidos na planilha.

## Como Utilizar

1. **Instalação de Dependências:** 
   Certifique-se de ter o Node.js instalado. Execute `npm install` para instalar as dependências do projeto.

2. **Configuração da Planilha Google Sheets:** 
   - Crie uma planilha no Google Sheets e obtenha suas credenciais de autenticação.
   - Adicione o arquivo de credenciais `credenciais.json` na raiz do projeto.
   - Atribua o ID da sua planilha na constante "spreadsheetId".

3. **Execução do Servidor:** 
   - Use as rotas disponíveis (consulte o código para obter informações sobre as rotas).

## Observações

- Este projeto ainda está em desenvolvimento e ainda não possui integração com o WhatsApp, principal motivação para o seu desenvolvimento.
- O projeto final possuirá integração com a API do WhatsApp para criação de um chatbot que será o requerente.

## Uso

1. Clone o repositório em seu ambiente de desenvolvimento.
2. Execute `npm install` para instalar as dependências do Node.js.
3. Execute `npm start` para iniciar o servidor.
4. Acesse a página da web em [http://localhost:4000](http://localhost:4000) para usar o projeto.

## Avisos
Este projeto é uma versão genérica e não contém informações confidenciais. Ele foi criado para fins de portfólio e demonstração de habilidades de desenvolvimento. Qualquer referência ao projeto original com informações confidenciais é intencionalmente omitida.

## Autor
João Lucas Freitas - https://github.com/JLucasfn.

## Licença
Este projeto é licenciado sob a Licença MIT.

---
