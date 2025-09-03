document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#BRFS3 - O leilão por a divisão de lácteos de a BRF começou - http://t.co/fewoACB7aD",
    "marks": [
      {
        "word": "divisão",
        "type": "rel"
      },
      {
        "word": "de a BRF",
        "type": "arg1"
      },
      {
        "word": "de lácteos",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "divisão",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "lácteos",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a BRF",
      "arg2": "de lácteos"
    }
  },
  {
    "Texto": "RT @ojappadonodo6 : @garimpodeacoes JBSS3 13Q4 ( N ) fraco desempenho em as divisões externas . Bom desempenho em o Mercosul , com adição de Seara .",
    "marks": [
      {
        "word": "divisão",
        "type": "rel"
      },
      {
        "word": "externas",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "divisão",
        "subscript": "rel"
      },
      {
        "word": "externas",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "externas"
    }
  },
  {
    "Texto": "#TIMP3 Telecom Italia inicia cruzada para evitar divisão de a TIM O executivo-chefe de a Telecom Italia , Marco ... http://t.co/tZnICpk4Tu",
    "marks": [
      {
        "word": "divisão",
        "type": "rel"
      },
      {
        "word": "de a TIM",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "divisão",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de a TIM",
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