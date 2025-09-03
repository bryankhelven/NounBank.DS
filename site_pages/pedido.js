document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#PETR4 RT @kitowgallo : PGR manda para o Rio pedido para apurar suposto suborno em a Petrobras : Procuradoria de a Repúb ... http://t.co/kDSqPTbzcD",
    "marks": [
      {
        "word": "pedido",
        "type": "rel"
      },
      {
        "word": "PGR",
        "type": "arg0"
      },
      {
        "word": "para apurar suposto suborno em a Petrobras",
        "type": "arg1"
      },
      {
        "word": "para o Rio",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "pedido",
        "subscript": "rel"
      },
      {
        "word": "PGR",
        "subscript": "nsubj"
      },
      {
        "word": "apurar",
        "subscript": "nmod"
      },
      {
        "word": "o",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "PGR",
      "arg1": "para apurar suposto suborno em a Petrobras",
      "arg2": "para o Rio"
    }
  },
  {
    "Texto": "A oposição protocolou mais um pedido de criação de CPI para investigar a Petrobras PETR4.SA , de esta vez composta por senadores e deputados .",
    "marks": [
      {
        "word": "pedido",
        "type": "rel"
      },
      {
        "word": "A oposição",
        "type": "arg0"
      },
      {
        "word": "de criação de CPI para investigar a Petrobras PETR4.SA",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "pedido",
        "subscript": "rel"
      },
      {
        "word": "oposição",
        "subscript": "nsubj"
      },
      {
        "word": "criação",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "A oposição",
      "arg1": "de criação de CPI para investigar a Petrobras PETR4.SA",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @AlesandroAlves : A oposição protocolou mais um pedido de criação de CPI para investigar a Petrobras PETR4.SA , de esta vez composta por sen …",
    "marks": [
      {
        "word": "pedido",
        "type": "rel"
      },
      {
        "word": "A oposição",
        "type": "arg0"
      },
      {
        "word": "de criação de CPI para investigar a Petrobras PETR4.SA",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "pedido",
        "subscript": "rel"
      },
      {
        "word": "oposição",
        "subscript": "nsubj"
      },
      {
        "word": "criação",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "A oposição",
      "arg1": "de criação de CPI para investigar a Petrobras PETR4.SA",
      "arg2": "-"
    }
  },
  {
    "Texto": "$BRFS3 - Brf Sa ( brfs-nm ) - Material A Disposicao ( pedido Publico De Procuracao ) http://t.co/0vmBXdZc0u",
    "marks": [
      {
        "word": "pedido",
        "type": "rel"
      },
      {
        "word": "de Procuracao",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "pedido",
        "subscript": "rel"
      },
      {
        "word": "Procuracao",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de Procuracao",
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