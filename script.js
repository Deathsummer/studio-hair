document.getElementById('form-agendamento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    
    // Simulação de envio (substitua por Firebase ou outra API)
    document.getElementById('confirmacao').innerHTML = `
        <p class="sucesso">✅ Agendado! ${nome}, seu horário para ${servico} foi marcado para ${data}.</p>
    `;
    
    // Limpa o formulário
    this.reset();
});