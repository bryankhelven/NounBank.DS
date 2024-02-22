document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.letter-button');
    const contentBox = document.getElementById('content-box');
  
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
  
            let contentHTML = '';
            switch (this.textContent) {
                case 'A':
                    const wordsA = ["abastecimento", "acesso", "administração", "ajuste", "aliança", "aquisição", "ataque", "acordo"];
                    wordsA.sort();
                    contentHTML = wordsA.map(word => {
                        // Verifica se o link está pronto ou deve mostrar o aviso
                        if (["acordo.html", "compartilhamento.html"].includes(`${word}.html`.toLowerCase())) {
                            return `<a href="${word}.html" class="content-link">${word}</a>`;
                        } else {
                            // Link não está pronto, então adiciona um evento de clique que mostra o aviso
                            return `<a href="#" class="content-link" onclick="event.preventDefault(); alert('AVISO: EM CONSTRUÇÃO');">${word}</a>`;
                        }
                    }).join("<br>");
                    break;
                case 'C':
                    // Aqui você pode aplicar a mesma lógica do caso 'A' se tiver mais links
                    contentHTML = '<a href="compartilhamento.html" class="content-link">compartilhamento</a>';
                    break;
                default:
                    contentHTML = `<p>Conteúdo em construção para a letra ${this.textContent}</p>`;
            }
  
            contentBox.style.display = 'block';
            contentBox.innerHTML = contentHTML;
        });
    });
});
