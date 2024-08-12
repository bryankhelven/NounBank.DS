document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.letter-button');
    const contentBox = document.getElementById('content-box');

// Dicionário de palavras organizadas por letra
const wordsDict = {
    'a': ["abastecimento", "acesso", "administração", "ajuste", "aliança", "aquisição", "ataque", "acordo", "alienação", "apreensão", "antro", "amor", "atestado", "avaliação", "aditivo", "assinatura", "alteração"],
    'b': ["briga"],
    'c': ["caminho", "cenário", "compartilhamento", "confirmação", "construção", "controle", "conversa", "coordenador", "conversão", "custódia", "convocação", "curiosidade", "comparação", "coragem", "comissão", "causa", "cara", "contrato", "cotação", "carteira", "compra"],
    'd': ["deliberação", "demanda", "diretor", "divergência", "descolamento", "discussão", "desova", "daytrade", "declaração", "divisão", "denúncia", "decisão", "descoberta", "divulgação", "distribuição"],
    'e': ["eleição", "extensão", "exploração", "estimativa", "encerramento", "entendimento", "exemplo", "expectativa", "entrada", "esclarecimento"],
    'f': ["fruto", "fusão", "falta"],
    'g': ["gestor"],
    'h': ["homem", "hora"],
    'i': ["importação", "indicador", "instauração", "inscrição", "incorporação", "indicação", "investimento"],
    'l': ["licença", "locação", "leilão"],
    'm': ["medo", "membro", "mix", "mudança", "meio", "monte"],
    'n': ["necessidade", "negociação", "notícia", "número"],
    'o': ["obrigação", "oferta", "outorga", "olhada", "olho"],
    'p': ["post", "postagem", "procura", "projeto", "projeção", "proposta", "pagador", "pedido", "perspectiva", "posição", "pagamento"],
    'r': ["relação", "resolução", "responsabilidade", "rateio", "retorno", "reeleição", "redução", "renúncia", "racionamento", "risco", "reapresentação", "reunião", "recomendação", "relatório", "recompra", "resistência"],
    's': ["solicitação", "sugestão", "spread (diferença)"],
    't': ["transferência", "transporte", "troca", "teste", "taxação", "tendência", "trade"],
    'v': ["vendedor", "visão", "volta", "venda"],
    'z': ["zona"]
};


    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            let contentHTML = '';
            const letter = this.textContent.toLowerCase(); // Pega a letra do botão clicado
            const words = wordsDict[letter]; // Pega as palavras para essa letra

            if (words) {
                contentHTML = words.sort().map(word => {
                    // Verifica se o link está pronto ou deve mostrar o aviso
                    if (["acordo.html", "compartilhamento.html","acesso.html","deliberacao.html","meio.html","medo.html","necessidade.html","procura.html","divergencia.html" ].includes(`${word}.html`)) {
                        return `<a href="${word}.html" class="content-link">${word}</a>`;
                    } else {
                        // Link não está pronto, então adiciona um evento de clique que mostra o aviso
                        return `<a href="#" class="content-link" onclick="event.preventDefault(); alert('AVISO: EM CONSTRUÇÃO');">${word}</a>`;
                    }
                }).join("<br>");
            } else {
                contentHTML = `<p>Conteúdo em construção para a letra ${letter.toUpperCase()}</p>`;
            }

            contentBox.style.display = 'block';
            contentBox.innerHTML = contentHTML;
        });
    });
});
