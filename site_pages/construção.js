document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Notas gerais A PETROBRAS ( PETR4 ) esclareceu ontem que todos os contratos e aditivos para a conturbada construção ... http://t.co/DTTsUJsh3i",
    "marks": [
      {
        "word": "construção",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "construção",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "setor financeiro ganha participação e construção perde . ABEV3 , UGPA3 , ITUB4 , PCAR4 , BBDC4 , BRFS3 , CIEL3 , BBSE3 TODAS GANHARAM entre 30 a 50 %",
    "marks": [
      {
        "word": "construção",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "construção",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$TBLE3 - Tractebel ( tble-nm ) - Obras De Construcao De o Complexo Eolico Santa Monica http://t.co/BA3MoUuYIg",
    "marks": [
      {
        "word": "construção",
        "type": "rel"
      },
      {
        "word": "De o Complexo Eolico Santa Monica",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "construção",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Complexo Eolico Santa Monica",
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