document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$ESTC3 - Estacio Part ( estc-nm ) - fato Relevante - aquisicao Uniseb - reapres ( redivulgacao ) http://t.co/alIlIRxgUk",
    "marks": [
      {
        "word": "reapresentação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "reapresentação",
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
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Material De Apresentacao - Reapresentacao http://t.co/c6lxTa9jHP",
    "marks": [
      {
        "word": "reapresentação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "reapresentação",
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
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Comentarios Sobre Os Resultados - 31/03/2014 - Reap . http://t.co/LdQEfRBbmY",
    "marks": [
      {
        "word": "reapresentação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "reapresentação",
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
    "Texto": "$PETR3 - Petrobras ( petr ) - Prod De 40 Mil Barris Dia Cascade E Chinook - Reapresentacao http://t.co/RBAlmZx1OK",
    "marks": [
      {
        "word": "reapresentação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "reapresentação",
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
    "Texto": "$ESTC3 - Estacio Part ( estc-nm ) - Reapresentacao De o Material Apresentado A Investidores http://t.co/1s7pBvJsgQ",
    "marks": [
      {
        "word": "reapresentação",
        "type": "rel"
      },
      {
        "word": "De o Material Apresentado",
        "type": "arg1"
      },
      {
        "word": "A Investidores",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "reapresentação",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "acl"
      },
      {
        "word": "Investidores",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Material Apresentado",
      "arg2": "A Investidores"
    }
  },
  {
    "Texto": "$BBAS3 - Banco De o Brasil ( bbas-nm ) - Relatorio De Analise Gerencial Reapresentacao http://t.co/06H7Ncc4jQ",
    "marks": [
      {
        "word": "reapresentação",
        "type": "rel"
      },
      {
        "word": "$BBAS3 - Banco De o Brasil ( bbas-nm )",
        "type": "arg0"
      },
      {
        "word": "Relatório De Análise Gerencial",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "reapresentação",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      },
      {
        "word": "Análise",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "$BBAS3 - Banco De o Brasil ( bbas-nm )",
      "arg1": "Relatório De Análise Gerencial",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ENBR3 - Energias Br ( enbr-nm ) - Reapresentacao De a Proposta De a Ago/e http://t.co/gBsA5NtlSy",
    "marks": [
      {
        "word": "reapresentação",
        "type": "rel"
      },
      {
        "word": "$ENBR3 - Energias Br ( enbr-nm )",
        "type": "arg0"
      },
      {
        "word": "De a Proposta De a Ago/e",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "reapresentação",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$ENBR3 - Energias Br ( enbr-nm )",
      "arg1": "De a Proposta De a Ago/e",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Relatorio De o Agente Fiduciario Reapresentacao http://t.co/Gk0aK3dHbG",
    "marks": [
      {
        "word": "reapresentação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "reapresentação",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
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