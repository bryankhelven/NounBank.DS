document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.letter-button');
    const contentBox = document.getElementById('content-box');

    // Dicionário de palavras organizadas por letra
    const wordsDict = {
        'a': ["abastecimento", "acesso", "administração", "ajuste", "aliança", "aquisição", "ataque", "acordo"],
        'b': ["briga"],
        'c': ["caminho", "cenário", "compartilhamento", "confirmação", "construção", "controle", "conversa"],
        'd': ["deliberação", "demanda", "diretor", "divergência"],
        'e': ["eleição", "extensão"],
        'i': ["importação", "indicador"],
        'l': ["licença"],
        'm': ["medo", "membro", "mix", "mudança"],
        'n': ["necessidade", "negociação"],
        'o': ["obrigação", "oferta"],
        'p': ["post", "postagem", "procura", "projeto", "projeção", "proposta"],
        'r': ["relação", "resolução", "responsabilidade"],
        's': ["solicitação", "sugestão"],
        't': ["transferência", "transporte"],
        'v': ["vendedor", "visão"],
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
                    if (["acordo.html", "compartilhamento.html"].includes(`${word}.html`)) {
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
