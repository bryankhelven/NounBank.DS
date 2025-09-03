document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#GOLL4 O transporte doméstico de passageiros registrou aumento de 8,16 % em a demanda medida em passageiros ... http://t.co/8pIYzbanHG",
    "marks": [
      {
        "word": "transporte",
        "type": "rel"
      },
      {
        "word": "de passageiros",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "transporte",
        "subscript": "rel"
      },
      {
        "word": "passageiros",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de passageiros",
      "arg2": "-"
    }
  },
  {
    "Texto": "( ALLL3 ) : A ALL e a Rumo deram início a conversas para que a concessionária aumente o volume de o transporte de ... http://t.co/t2JXbpKAef",
    "marks": [
      {
        "word": "transporte",
        "type": "rel"
      },
      {
        "word": "a concessionária",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "transporte",
        "subscript": "rel"
      },
      {
        "word": "concessionária",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "a concessionária",
      "arg1": "-",
      "arg2": "-"
    }
  }
];

  const tableBody = document.getElementById('relations-table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // evita duplicar quando o HTML já trouxe linhas

  data.forEach((item, index) => {
    let textWithMarks = item.Texto;

    // aplicar cores
    item.marks.forEach(mark => {
      const pattern = new RegExp(`\b(${
        mark.word
      })\b`, 'g');
      textWithMarks = textWithMarks.replace(pattern, `<span class="${mark.type}">$1</span>`);
    });

    // subscritos
    item.subscripts.forEach(sub => {
      const pattern = new RegExp(`\b(${
        sub.word
      })\b`, 'g');
      textWithMarks = textWithMarks.replace(pattern, `$1<sub>${sub.subscript}</sub>`);
    });

    // monta a linha com # + Args mostrados + Texto
    const row = document.createElement('tr');
    let cells = `<td>${index + 1}</td>`;
    SHOWN_ARGS.forEach(a => {
      const v = (item.args[a] ?? '-');
      const cls = (v && v !== '-') ? a : '';
      cells += `<td class="${cls}">${v}</td>`;
    });
    cells += `<td>${textWithMarks}</td>`;
    row.innerHTML = cells;
    tableBody.appendChild(row);

    // linha divisória (colspan dinâmico)
    if (index < data.length - 1) {
      const dividerRow = document.createElement('tr');
      const dividerCell = document.createElement('td');
      dividerCell.colSpan = SHOWN_ARGS.length + 2; // # + args + Texto
      dividerCell.style.borderBottom = '1px solid #ccc';
      dividerRow.appendChild(dividerCell);
      tableBody.appendChild(dividerRow);
    }
  });
});