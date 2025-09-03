document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "é ... quase em a máxima . Isso após testar o suporte em os R$ 15,5 ... #PETR4 dá medo ... o.O",
    "marks": [
      {
        "word": "medo",
        "type": "rel"
      },
      {
        "word": "#PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "medo",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nsubj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#PETR4"
    }
  },
  {
    "Texto": "#petr4 sem medo de errar , ou essa alta marcou o fim de a queda de uma década , ou é só mais um repique momentâneo . Esse ano ainda tem eleições !",
    "marks": [
      {
        "word": "medo",
        "type": "rel"
      },
      {
        "word": "#petr4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "medo",
        "subscript": "rel"
      },
      {
        "word": "petr4",
        "subscript": "root"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "#petr4"
    }
  },
  {
    "Texto": "@ferrisss oi Ferri , estou comprado em CIEL3 q já subiu bastante . Em a sua opinião vale a pena trocar por MMX ? Medo de o fantasma de o Eike ...",
    "marks": [
      {
        "word": "Medo",
        "type": "rel"
      },
      {
        "word": "de o fantasma de o Eike",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Medo",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de o fantasma de o Eike"
    }
  },
  {
    "Texto": "@Live_Trade eu to cagando de medo de essa #PETR4 ! ! ! to com posição grnade desde o rompimento de os 14,20 dia 24/03 ! king kong adestrado por o PT",
    "marks": [
      {
        "word": "medo",
        "type": "rel"
      },
      {
        "word": "eu",
        "type": "arg0"
      },
      {
        "word": "de essa #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "medo",
        "subscript": "rel"
      },
      {
        "word": "eu",
        "subscript": "nsubj"
      },
      {
        "word": "essa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "eu",
      "arg1": "de essa #PETR4"
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