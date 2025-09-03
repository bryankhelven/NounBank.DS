document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Ibov petr4 vale5 Gustavo Franco : Inflação é como alcoolismo , não tem cura , só controle .",
    "marks": [
      {
        "word": "controle",
        "type": "rel"
      },
      {
        "word": "Inflação",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "controle",
        "subscript": "rel"
      },
      {
        "word": "Inflação",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Inflação",
      "arg2": "-"
    }
  },
  {
    "Texto": "* * * SAIU DE O FORNO : RUI FALCÃO : Governo pode discutir controle de capital mais rigoroso . ( tome queda em a #petr4 , estatais e tudo )",
    "marks": [
      {
        "word": "controle",
        "type": "rel"
      },
      {
        "word": "Governo",
        "type": "arg0"
      },
      {
        "word": "de capital",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "controle",
        "subscript": "rel"
      },
      {
        "word": "Governo",
        "subscript": "nsubj"
      },
      {
        "word": "capital",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Governo",
      "arg1": "de capital",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @RaphaFigueredo : * * * SAIU DE O FORNO : RUI FALCÃO : Governo pode discutir controle de capital mais rigoroso . ( tome queda em a #petr4 , estatais …",
    "marks": [
      {
        "word": "controle",
        "type": "rel"
      },
      {
        "word": "Governo",
        "type": "arg0"
      },
      {
        "word": "de capital",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "controle",
        "subscript": "rel"
      },
      {
        "word": "Governo",
        "subscript": "nsubj"
      },
      {
        "word": "capital",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Governo",
      "arg1": "de capital",
      "arg2": "-"
    }
  },
  {
    "Texto": "Várias empresas que anunciam recompra de ações em a verdade não recompram absolutamente nada . Não há nenhum controle sobre isso #CSN #CSNA3",
    "marks": [
      {
        "word": "controle",
        "type": "rel"
      },
      {
        "word": "sobre isso",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "controle",
        "subscript": "rel"
      },
      {
        "word": "isso",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "sobre isso",
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