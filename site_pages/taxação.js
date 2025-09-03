document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "RT @clickinv_VALE5 : Vale ganha recurso contra taxação estrangeira , ação dispara 2 % em 3 minutos : Mais informaçõe ... http://t.co/U5sgBGJxyN …",
    "marks": [
      {
        "word": "taxação",
        "type": "rel"
      },
      {
        "word": "Vale",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "taxação",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "Vale"
    }
  },
  {
    "Texto": "#VALE5 ganha recurso recurso contra taxação de suas empresas em o exterior que era um de os entraves de a empresa . Agora VALE !",
    "marks": [
      {
        "word": "taxação",
        "type": "rel"
      },
      {
        "word": "#VALE5",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "taxação",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "#VALE5"
    }
  },
  {
    "Texto": "Vale ganha recurso contra taxação estrangeira , ação dispara 2 % em 3 minutos : Mais informaçõe ... http://t.co/U5sgBGJxyN #infomoney #vale5",
    "marks": [
      {
        "word": "taxação",
        "type": "rel"
      },
      {
        "word": "Vale",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "taxação",
        "subscript": "rel"
      },
      {
        "word": "Vale",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "Vale"
    }
  },
  {
    "Texto": "TEMPO REAL : Ambev afunda 5 % com nova taxação , Vale cai e Renner sobe após balanço : Ações de a ... http://t.co/trsecneXgU #infomoney #vale5",
    "marks": [
      {
        "word": "taxação",
        "type": "rel"
      },
      {
        "word": "Ambev",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "taxação",
        "subscript": "rel"
      },
      {
        "word": "Ambev",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "Ambev"
    }
  },
  {
    "Texto": "Diz bom de comprar $ABEV3 . Caindo 5 % com notícia de taxação . Eu vou em essa .",
    "marks": [
      {
        "word": "taxação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "taxação",
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
    "Texto": "“ @buiux : Diz bom de comprar $ABEV3 . Caindo 5 % com notícia de taxação . Eu vou em essa . ” Deu sinal gráfico ou só tais em o fundamento .",
    "marks": [
      {
        "word": "taxação",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "taxação",
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