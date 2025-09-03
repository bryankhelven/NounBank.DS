document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Se instalada a #CPI em a #PETR4 as ações irão subir . O entendimento geral é que haverá uma gestão mais ética , profissional e menos politica .",
    "marks": [
      {
        "word": "entendimento",
        "type": "rel"
      },
      {
        "word": "geral",
        "type": "arg0"
      },
      {
        "word": "é que haverá uma gestão mais ética , profissional e menos politica",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entendimento",
        "subscript": "rel"
      },
      {
        "word": "geral",
        "subscript": "amod"
      },
      {
        "word": "politica",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "geral",
      "arg1": "é que haverá uma gestão mais ética , profissional e menos politica",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @bovespabrokers : Se instalada a #CPI em a #PETR4 as ações irão subir . O entendimento geral é que haverá uma gestão mais ética , profissiona …",
    "marks": [
      {
        "word": "entendimento",
        "type": "rel"
      },
      {
        "word": "geral",
        "type": "arg0"
      },
      {
        "word": "é que haverá uma gestão mais ética , profissional e menos politica",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "entendimento",
        "subscript": "rel"
      },
      {
        "word": "geral",
        "subscript": "amod"
      },
      {
        "word": "politica",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "geral",
      "arg1": "é que haverá uma gestão mais ética , profissional e menos politica",
      "arg2": "-"
    }
  },
  {
    "Texto": "$CIEL3 - Cielo ( ciel-nm ) - Memorando De Entendimentos Para Participar De a Stelo http://t.co/1XTdyCc6tK",
    "marks": [
      {
        "word": "Entendimento",
        "type": "rel"
      },
      {
        "word": "Para Participar De a Stelo",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Entendimento",
        "subscript": "rel"
      },
      {
        "word": "Participar",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Para Participar De a Stelo",
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