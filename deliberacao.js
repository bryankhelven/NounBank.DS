document.addEventListener('DOMContentLoaded', function() {
  const data = [
      {
          Texto: "$TIMP3 - Tim Part S/a (timp-nm) - Deliberacoes Da Assembleia http://t.co/0MkHI1c4BP",
          marks: [
              { word: "Deliberacoes", type: "rel" },
              { word: "Da Assembleia", type: "arg0" }
          ],
          subscripts: [
              { word: "Deliberacoes", subscript: "rel" },
              { word: "Da Assembleia", subscript: "nmod" }
          ],
          args: {
              "arg0": "Da Assembleia",
          }
      },
      {
          Texto: "$LIGT3 - Light S/a (ligt-nm) - deliberacoes De Assembleias / Distribuicao De Dividendo http://t.co/IoOoCOiGT1",
          marks: [
              { word: "deliberacoes", type: "rel" },
              { word: "De Assembleias", type: "arg0" }
          ],
          subscripts: [
              { word: "deliberacoes", subscript: "rel" },
              { word: "De Assembleias", subscript: "nmod" }
          ],
          args: {
              "arg0": "De Assembleias",
          }
      },
      {
          Texto: "$DASA3 - Dasa (dasa-nm)- Deliberacoes Da Ago / Distribuicao De Dividendo http://t.co/9eQGNWhrwd",
          marks: [
              { word: "Deliberacoes", type: "rel" },
              { word: "Da Ago", type: "arg0" }
          ],
          subscripts: [
              { word: "Deliberacoes", subscript: "rel" },
              { word: "Da Ago", subscript: "nmod" }
          ],
          args: {
              "arg0": "Da Ago",
          }
      },
      {
          Texto: "$CYRE3 - Cyrela Realt (cyre) - Deliberacoes Da Ago/e / Distribuicao De Dividendo http://t.co/m7Rt4wHstX",
          marks: [
              { word: "Deliberacoes", type: "rel" },
              { word: "Da Ago/e", type: "arg0" }
          ],
          subscripts: [
              { word: "Deliberacoes", subscript: "rel" },
              { word: "Da Ago/e", subscript: "nmod" }
          ],
          args: {
              "arg0": "Da Ago/e",
          }
      },
      {
          Texto: "$RENT3 - Localiza (rent-nm) - deliberacoes De Ago/e http://t.co/koG0j3sK7K",
          marks: [
              { word: "deliberacoes", type: "rel" },
              { word: "De Ago/e", type: "arg0" }
          ],
          subscripts: [
              { word: "deliberacoes", subscript: "rel" },
              { word: "De Ago/e", subscript: "nmod" }
          ],
          args: {
              "arg0": "De Ago/e",
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
<td>${textWithMarks}</td>
`;

      tableBody.appendChild(row);

      // Adiciona uma linha de divisão após cada item, exceto o último
      if (index < data.length - 1) {
          const dividerRow = document.createElement('tr');
          const dividerCell = document.createElement('td');
          dividerCell.colSpan = 3; // Cobrir todas as colunas da tabela
          dividerCell.style.borderBottom = '1px solid #ccc';
          dividerRow.appendChild(dividerCell);
          tableBody.appendChild(dividerRow);
      }
  });
});
