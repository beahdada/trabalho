document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const respostaDiv = document.getElementById("resposta");
    respostaDiv.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
    
    // Limpa o formulário
    document.getElementById("contatoForm").reset();
});
