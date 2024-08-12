document.addEventListener('DOMContentLoaded', function() {
  const data = [
      {
          Texto: "O crédito de os #proventos de a #vale5 entrou hj. Como a ação está em queda será uma boa aumentar a custódia com esse dinheiro novo.",
          marks: [
              { word: "custódia", type: "rel" }
          ],
          subscripts: [
              { word: "custódia", subscript: "rel" }
          ],
          args: {}
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
