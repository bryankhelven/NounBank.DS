document.addEventListener('DOMContentLoaded', function() {
  const data = [
      {
          Texto: "Resultado corporativo de a #TRACTEBEL ( TBLE3 ) . Confira a nossa visão sobre os dados divulgados por a empresa . http://t.co/wifhNsopqt",
          marks: [
              { word: "visão", type: "rel" },
              { word: "nossa", type: "arg0" },
              { word: "sobre os dados divulgados por a empresa", type: "arg1" }
          ],
          subscripts: [
              { word: "visão", subscript: "rel" },
              { word: "nossa", subscript: "nsubj" },
              { word: "sobre os dados divulgados por a empresa", subscript: "nmod" }
          ],
          args: {
              "arg0": "nossa",
              "arg1": "sobre os dados divulgados por a empresa",
          }
      }
  ];

  const tableBody = document.getElementById('relations-table').getElementsByTagName('tbody')[0];

  data.forEach((item, index) => {
      let textWithMarks = item.Texto;

      // Aplicar cores aos argumentos
      item.marks.forEach(mark => {
          const pattern = new RegExp(`\\b(${mark.word})\\b`, 'g');
          textWithMarks = textWithMarks.replace(pattern, `<span class="${mark.type}">$1</span>`);
      });

      // Aplicar subscritos
      item.subscripts.forEach(sub => {
          const pattern = new RegExp(`\\b(${sub.word})\\b`, 'g');
          textWithMarks = textWithMarks.replace(pattern, `$1<sub>${sub.subscript}</sub>`);
      });

      // Criar e adicionar a linha na tabela
      const row = document.createElement('tr');
      row.innerHTML = `
<td>${index + 1}</td>
<td class="${item.args.arg0 ? 'arg0' : ''}">${item.args.arg0 || '-'}</td>
<td class="${item.args.arg1 ? 'arg1' : ''}">${item.args.arg1 || '-'}</td>
<td>${textWithMarks}</td>
`;

      tableBody.appendChild(row);
  });
});
