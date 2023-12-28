const valorPedidoBruto = document.getElementById('valorPedido');
const enviar = document.getElementById('enviar');

function botaoClick(event) {
    event.preventDefault();
    const valorPedido = parseInt(valorPedidoBruto.value);
    const reqPedido = 'http://localhost:4000/valorPassado' ;
    fetch(reqPedido, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ valorPedido }), // Envie o valor como JSON
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Resposta do servidor
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

enviar.addEventListener('click', botaoClick);
