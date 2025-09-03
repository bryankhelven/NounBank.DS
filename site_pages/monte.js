document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg1"];
  const data = [
  {
    "Texto": "#VALE5 Opção VALED30 estava a 0,08 ai apareceu um monte vendendo a 0,07 e pegadinha .",
    "marks": [
      {
        "word": "monte",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "monte",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg1": "-"
    }
  },
  {
    "Texto": "#PETR4 querendo agulhar em o curto , 30min ... com um monte de outras indicações ... vamos ver ... ,)",
    "marks": [
      {
        "word": "monte",
        "type": "rel"
      },
      {
        "word": "de outras indicações",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "monte",
        "subscript": "rel"
      },
      {
        "word": "outras",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "de outras indicações"
    }
  },
  {
    "Texto": "Vc ñ respondeu um monte de perguntas Graça Foster .. Q venha a CPI .. Tanto ñ explicou , q as ações de a Petr4 despencam em a bolsa ..",
    "marks": [
      {
        "word": "monte",
        "type": "rel"
      },
      {
        "word": "de perguntas Graça Foster",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "monte",
        "subscript": "rel"
      },
      {
        "word": "perguntas",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg1": "de perguntas Graça Foster"
    }
  },
  {
    "Texto": "RT @SouCalmo : Vc ñ respondeu um monte de perguntas Graça Foster .. Q venha a CPI .. Tanto ñ explicou , q as ações de a Petr4 despencam em a bols …",
    "marks": [
      {
        "word": "monte",
        "type": "rel"
      },
      {
        "word": "de perguntas Graça Foster",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "monte",
        "subscript": "rel"
      },
      {
        "word": "perguntas",
        "subscript": "flat:name"
      }
    ],
    "args": {
      "arg1": "de perguntas Graça Foster"
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