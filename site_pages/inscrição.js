document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - encer. de as Inscricoes De o Plano De Incentivo Deslig. Voluntario http://t.co/pmJ0jol3wY",
    "marks": [
      {
        "word": "inscrição",
        "type": "rel"
      },
      {
        "word": "De o Plano De Incentivo Deslig. Voluntario",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "inscrição",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De o Plano De Incentivo Deslig. Voluntario",
      "arg2": "-"
    }
  },
  {
    "Texto": "#PETR4 ): A cia informou que foi encerrado em o dia 31 de março o prazo de inscrição para o Plano de Incentivo a o ... http://t.co/I7occ2nK3m",
    "marks": [
      {
        "word": "inscrição",
        "type": "rel"
      },
      {
        "word": "para o Plano de Incentivo a o",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "inscrição",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "para o Plano de Incentivo a o",
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