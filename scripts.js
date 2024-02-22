// Antes: No início do arquivo JavaScript

// Adicione um evento de clique a todos os botões de letras
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.letter-button');
    const contentBox = document.getElementById('content-box');
  
    buttons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove a classe 'selected' de todos os botões e a adiciona ao botão clicado
          buttons.forEach(btn => btn.classList.remove('selected'));
          this.classList.add('selected');
  
        // Verifica a letra do botão clicado e define o conteúdo apropriado
        let contentHTML = '';
        switch (this.textContent) {
            case 'A':
              const wordsA = ["abastecimento", "acesso", "administração", "ajuste", "aliança", "aquisição", "ataque", "acordo"];
              wordsA.sort(); // Garante a ordem alfabética
              contentHTML = wordsA.map(word => `<a href="${word}.html" class="content-link">${word}</a>`).join("<br>");
              break;
            case 'C':
              contentHTML = '<a href="compartilhamento.html" class="content-link">Compartilhamento</a>';
              break;
          default:
            contentHTML = `<p>Conteúdo em construção para a letra ${this.textContent}</p>`;
        }
  
        // Exibe a content-box e atualiza o conteúdo
        contentBox.style.display = 'block';
        contentBox.innerHTML = contentHTML;
      });
    });
  });
  
  // Depois: Fechamento do arquivo JavaScript
  