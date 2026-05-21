// Objeto contendo os textos explicativos das práticas
const infoPraticas = {
    mip: "<strong>Manejo Integrado de Pragas (MIP):</strong> Uso consciente e focado de defensivos agrícolas, monitorando as pragas antes de agir para priorizar a saúde do ecossistema e das colmeias.",
    planejamento: "<strong>Planejamento Conjunto:</strong> Agricultores e apicultores trabalham em sintonia, mapeando onde as colmeias ficarão para que ambos os lados saibam o que está acontecendo na propriedade.",
    horarios: "<strong>Horários Seguros:</strong> Definição de horários de pulverização (como no fim do dia ou noite) para evitar os períodos em que as abelhas estão voando e trabalhando intensamente.",
    protocolos: "<strong>Protocolos de Coexistência:</strong> Monitoramento constante das colmeias e criação de canais de comunicação rápidos para avisar sobre manejos na lavoura, evitando acidentes e mortalidade."
};

// Função para alternar o conteúdo das abas
function showTab(pratica) {
    // Atualiza o texto do conteúdo
    const contentDiv = document.getElementById("tab-content");
    contentDiv.innerHTML = infoPraticas[pratica];

    // Remove a classe 'active' de todos os botões
    const botoes = document.querySelectorAll(".tab-btn");
    botoes.forEach(btn => btn.classList.remove("active"));

    // Adiciona a classe 'active' ao botão que foi clicado
    // Usa o evento global para descobrir quem acionou a função
    event.currentTarget.classList.add("active");
}