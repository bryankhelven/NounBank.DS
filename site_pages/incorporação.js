document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Age - 29/04/2014 - 15h00 / Aquisicao E Incorporacao De Cias http://t.co/tiGCF5BFg9",
    "marks": [
      {
        "word": "incorporação",
        "type": "rel"
      },
      {
        "word": "De Cias",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "incorporação",
        "subscript": "rel"
      },
      {
        "word": "Cias",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Cias",
      "arg2": "-"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Aquisicao De Quotas E Incorporacao De Subsidiarias http://t.co/nA90jlYptH",
    "marks": [
      {
        "word": "incorporação",
        "type": "rel"
      },
      {
        "word": "De Subsidiarias",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "incorporação",
        "subscript": "rel"
      },
      {
        "word": "Subsidiarias",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Subsidiarias",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CSAN3 - Cosan ( csan-nm ) - Fato Relevante - Aprovacao - proposta De Incorporacao - all E Rumo http://t.co/ctpNxKDEsC",
    "marks": [
      {
        "word": "incorporação",
        "type": "rel"
      },
      {
        "word": "proposta",
        "type": "arg0"
      },
      {
        "word": "all",
        "type": "arg1"
      },
      {
        "word": "Rumo",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "incorporação",
        "subscript": "rel"
      },
      {
        "word": "proposta",
        "subscript": "nmod"
      },
      {
        "word": "all",
        "subscript": "nmod"
      },
      {
        "word": "Rumo",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "proposta",
      "arg1": "all",
      "arg2": "Rumo"
    }
  },
  {
    "Texto": "$ALLL3 - All Amer Lat ( alll-nm ) - fato Relevante / incorporacao De Acoes ( extensao De Prazo ) http://t.co/26tB9lsaHt",
    "marks": [
      {
        "word": "incorporação",
        "type": "rel"
      },
      {
        "word": "De Acoes",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "incorporação",
        "subscript": "rel"
      },
      {
        "word": "Acoes",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De Acoes",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ALLL3 - All Amer Lat ( alll-nm ) - Fato Relevante - Incorporacao De Acoes De a All Por a Rumo http://t.co/ZRKq9cRXet",
    "marks": [
      {
        "word": "incorporação",
        "type": "rel"
      },
      {
        "word": "Por a Rumo",
        "type": "arg0"
      },
      {
        "word": "De Acoes De a All",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "incorporação",
        "subscript": "rel"
      },
      {
        "word": "Rumo",
        "subscript": "nmod"
      },
      {
        "word": "Acoes",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Por a Rumo",
      "arg1": "De Acoes De a All",
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