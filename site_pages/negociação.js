document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#ABEV3 Hoje , dia 22/05/2014 , é a data limite para negociação de os direitos de subscrição de a AMBEV S.A ( ABEV1 ) ... http://t.co/uUnPNVLCr0",
    "marks": [
      {
        "word": "negociação",
        "type": "rel"
      },
      {
        "word": "de os direitos de subscrição de a AMBEV S.A ( ABEV1 )",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "negociação",
        "subscript": "rel"
      },
      {
        "word": "os",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de os direitos de subscrição de a AMBEV S.A ( ABEV1 )",
      "arg2": "-"
    }
  },
  {
    "Texto": "$DTEX3 - Duratex ( dtex-nm ) - Material A Disposicao ( politicas De Divulg. E De Negoc. ) http://t.co/ZG4dXwIhJf",
    "marks": [
      {
        "word": "negociação",
        "type": "rel"
      },
      {
        "word": "Duratex",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "negociação",
        "subscript": "rel"
      },
      {
        "word": "Duratex",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Duratex",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$SBSP3 - Sabesp ( sbsp-nm ) - Negociacao Com A Emae Para Resolucao De Acoes http://t.co/D192xgQFKV",
    "marks": [
      {
        "word": "negociação",
        "type": "rel"
      },
      {
        "word": "Sabesp",
        "type": "arg0"
      },
      {
        "word": "Resolucao De Acoes",
        "type": "arg1"
      },
      {
        "word": "Emae",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "negociação",
        "subscript": "rel"
      },
      {
        "word": "Sabesp",
        "subscript": "nmod"
      },
      {
        "word": "Acoes",
        "subscript": "nmod"
      },
      {
        "word": "Emae",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Sabesp",
      "arg1": "Resolucao De Acoes",
      "arg2": "Emae"
    }
  },
  {
    "Texto": "$RENT3 - Localiza ( rent-nm ) - Material A Disposicao ( politica De Divulgacao E Negociacao ) http://t.co/hIu0WyzXA6",
    "marks": [
      {
        "word": "negociação",
        "type": "rel"
      },
      {
        "word": "Localiza",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "negociação",
        "subscript": "rel"
      },
      {
        "word": "Localiza",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Localiza",
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