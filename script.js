function enviarMensagem() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && assunto && mensagem) {
        document.getElementById('mensagemStatus').textContent = 'Mensagem enviada com sucesso!';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('mensagemStatus').textContent = 'Por favor, preencha todos os campos.';
    }
}
