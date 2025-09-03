document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$RENT3 - Localiza (rent-nm) - proposta De Dividendos Para Ago / Distribuicao De Juros Cp http://t.co/bLjTH8bSid",
    "marks": [
      {
        "word": "proposta",
        "type": "rel"
      },
      {
        "word": "Localiza",
        "type": "arg0"
      },
      {
        "word": "de Dividendos",
        "type": "arg1"
      },
      {
        "word": "Ago",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "proposta",
        "subscript": "rel"
      },
      {
        "word": "Localiza",
        "subscript": "nmod"
      },
      {
        "word": "Dividendos",
        "subscript": "nmod"
      },
      {
        "word": "Ago",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Localiza",
      "arg1": "de Dividendos",
      "arg2": "Ago"
    }
  },
  {
    "Texto": "$DTEX3 - Duratex (dtex-nm) - Fato Relevante - proposta De Aumento De Capital Social http://t.co/7naGCJeqAn",
    "marks": [
      {
        "word": "proposta",
        "type": "rel"
      },
      {
        "word": "Duratex",
        "type": "arg0"
      },
      {
        "word": "de Aumento de Capital Social",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "proposta",
        "subscript": "rel"
      },
      {
        "word": "Duratex",
        "subscript": "nmod"
      },
      {
        "word": "Aumento",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "Duratex",
      "arg1": "de Aumento de Capital Social",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ENBR3 - Energias Br (enbr-nm) - Reapresentacao Da Proposta Da Ago/e http://t.co/gBsA5NtlSy",
    "marks": [
      {
        "word": "Proposta",
        "type": "rel"
      },
      {
        "word": "Energias Br",
        "type": "arg0"
      },
      {
        "word": "Ago",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Proposta",
        "subscript": "rel"
      },
      {
        "word": "Br",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg0": "Energias Br",
      "arg1": "-",
      "arg2": "Ago"
    }
  },
  {
    "Texto": "$CSAN3 - Cosan (csan-nm) - Fato Relevante - Aprovacao-proposta De Incorporacao-all E Rumo http://t.co/ctpNxKDEsC",
    "marks": [
      {
        "word": "proposta",
        "type": "rel"
      },
      {
        "word": "Cosan",
        "type": "arg0"
      },
      {
        "word": "de Incorporacao",
        "type": "arg1"
      },
      {
        "word": "all E Rumo",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "proposta",
        "subscript": "rel"
      },
      {
        "word": "Cosan",
        "subscript": "nmod"
      },
      {
        "word": "Incorporacao",
        "subscript": "nmod"
      },
      {
        "word": "Rumo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Cosan",
      "arg1": "de Incorporacao",
      "arg2": "all E Rumo"
    }
  },
  {
    "Texto": "Guiné aprova proposta de cassar concessões de Vale e BSGR, diz fonte: A recomendação foi fei... http://t.co/YccHpNWsUt #infomoney #vale5",
    "marks": [
      {
        "word": "proposta",
        "type": "rel"
      },
      {
        "word": "Guiné",
        "type": "arg0"
      },
      {
        "word": "de cassar concessões de Vale e BSGR",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "proposta",
        "subscript": "rel"
      },
      {
        "word": "Guiné",
        "subscript": "nsubj"
      },
      {
        "word": "cassar",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Guiné",
      "arg1": "de cassar concessões de Vale e BSGR",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Proposta A Ago ( juros Sobre O Capital Proprio ) http://t.co/uNETqgtLAP",
    "marks": [
      {
        "word": "Proposta",
        "type": "rel"
      },
      {
        "word": "Eletrobras ( elet-n1 )",
        "type": "arg0"
      },
      {
        "word": "juros Sobre O Capital Proprio",
        "type": "arg1"
      },
      {
        "word": "A Ago",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Proposta",
        "subscript": "rel"
      },
      {
        "word": "n1",
        "subscript": "nmod"
      },
      {
        "word": "Proprio",
        "subscript": "amod"
      },
      {
        "word": "Ago",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Eletrobras ( elet-n1 )",
      "arg1": "juros Sobre O Capital Proprio",
      "arg2": "A Ago"
    }
  },
  {
    "Texto": "$DTEX3 - Duratex ( dtex-nm ) - Fato Relevante - Proposta De Aumento De Capital Social http://t.co/7naGCJeqAn",
    "marks": [
      {
        "word": "Proposta",
        "type": "rel"
      },
      {
        "word": "Duratex ( dtex-nm )",
        "type": "arg0"
      },
      {
        "word": "De Aumento De Capital Social",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Proposta",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Aumento",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "Duratex ( dtex-nm )",
      "arg1": "De Aumento De Capital Social",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CSAN3 - Cosan ( csan-nm ) - Fato Relevante - Aprovacao - proposta De Incorporacao - all E Rumo http://t.co/ctpNxKDEsC",
    "marks": [
      {
        "word": "proposta",
        "type": "rel"
      },
      {
        "word": "Cosan ( csan-nm )",
        "type": "arg0"
      },
      {
        "word": "De Incorporacao",
        "type": "arg1"
      },
      {
        "word": "all E Rumo",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "proposta",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "Incorporacao",
        "subscript": "nmod"
      },
      {
        "word": "Rumo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Cosan ( csan-nm )",
      "arg1": "De Incorporacao",
      "arg2": "all E Rumo"
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