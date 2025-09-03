document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "RT @bovespabrokers : A Petrobras #PETR4 confirmou hoje que abriu uma comissão interna ' de alto nível ' para apurar os detalhes de a compra de a r …",
    "marks": [
      {
        "word": "comissão",
        "type": "rel"
      },
      {
        "word": "A Petrobras",
        "type": "arg0"
      },
      {
        "word": "para apurar os detalhes de a compra de a r",
        "type": "arg1"
      },
      {
        "word": "comissão interna",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "comissão",
        "subscript": "rel"
      },
      {
        "word": "Petrobras",
        "subscript": "nsubj"
      },
      {
        "word": "apurar",
        "subscript": "nmod:wtrunc"
      },
      {
        "word": "interna",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "A Petrobras",
      "arg1": "para apurar os detalhes de a compra de a r",
      "arg2": "comissão interna"
    }
  },
  {
    "Texto": "$PETR4 RT @agenciabrasil : Comissão externa de a Câmara que investiga a Petrobras aprova requerimentos http://t.co/q7VgfIdeUu",
    "marks": [
      {
        "word": "Comissão",
        "type": "rel"
      },
      {
        "word": "de a Câmara",
        "type": "arg0"
      },
      {
        "word": "que investiga a Petrobras",
        "type": "arg1"
      },
      {
        "word": "Comissão externa",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Comissão",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "Petrobras",
        "subscript": "obj"
      },
      {
        "word": "externa",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "de a Câmara",
      "arg1": "que investiga a Petrobras",
      "arg2": "Comissão externa"
    }
  },
  {
    "Texto": "Olha lá a sujeira ... Governo terá maioria em comissão que vai investigar a Petrobrás #PETR4",
    "marks": [
      {
        "word": "comissão",
        "type": "rel"
      },
      {
        "word": "que vai investigar a Petrobrás",
        "type": "arg1"
      },
      {
        "word": "comissão",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "comissão",
        "subscript": "rel"
      },
      {
        "word": "Petrobrás",
        "subscript": "obj"
      },
      {
        "word": "comissão",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "que vai investigar a Petrobrás",
      "arg2": "comissão"
    }
  },
  {
    "Texto": "A Petrobras #PETR4 confirmou hoje que abriu uma comissão interna ' de alto nível ' para apurar os detalhes de a compra de a refinaria de Pasadena .",
    "marks": [
      {
        "word": "comissão",
        "type": "rel"
      },
      {
        "word": "A Petrobras",
        "type": "arg0"
      },
      {
        "word": "para apurar os detalhes de a compra de a r",
        "type": "arg1"
      },
      {
        "word": "comissão interna",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "comissão",
        "subscript": "rel"
      },
      {
        "word": "Petrobras",
        "subscript": "nsubj"
      },
      {
        "word": "apurar",
        "subscript": "obj"
      },
      {
        "word": "interna",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "A Petrobras",
      "arg1": "para apurar os detalhes de a compra de a r",
      "arg2": "comissão interna"
    }
  },
  {
    "Texto": "#PETR4 RT @valor_economico : Câmara derrota governo e aprova comissão para investigar Petrobras http://t.co/p37D1t2ARU",
    "marks": [
      {
        "word": "comissão",
        "type": "rel"
      },
      {
        "word": "Câmara",
        "type": "arg0"
      },
      {
        "word": "para investigar Petrobras",
        "type": "arg1"
      },
      {
        "word": "comissão",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "comissão",
        "subscript": "rel"
      },
      {
        "word": "Câmara",
        "subscript": "nsubj"
      },
      {
        "word": "investigar",
        "subscript": "obj"
      },
      {
        "word": "comissão",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "Câmara",
      "arg1": "para investigar Petrobras",
      "arg2": "comissão"
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