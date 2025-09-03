document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Notas gerais A PETROBRAS ( PETR4 ) esclareceu ontem que todos os contratos e aditivos para a conturbada construção ... http://t.co/DTTsUJsh3i",
    "marks": [
      {
        "word": "aditivo",
        "type": "rel"
      },
      {
        "word": "para a conturbada construção",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "aditivo",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "para a conturbada construção",
      "arg2": "-"
    }
  },
  {
    "Texto": "$MRFG3 - Marfrig ( mrfg-nm ) - Fato Relevante - Primeiro Aditivo A o Acordo De Acionistas http://t.co/jBJzeY5U5V",
    "marks": [
      {
        "word": "Aditivo",
        "type": "rel"
      },
      {
        "word": "A o Acordo De Acionistas",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Aditivo",
        "subscript": "rel"
      },
      {
        "word": "Acionistas",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "A o Acordo De Acionistas",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CCRO3 - Ccr Sa ( ccro-nm ) - Fato Relevante - Assinatura De o Aditivo De o Acrodo De Acionista http://t.co/xzQyZPPbBL",
    "marks": [
      {
        "word": "Aditivo",
        "type": "rel"
      },
      {
        "word": "De o Acrodo De Acionista",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Aditivo",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Acrodo De Acionista",
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