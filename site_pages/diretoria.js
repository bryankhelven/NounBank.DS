document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg1", "arg2"];
  const data = [
  {
    "Texto": "#PETR4 ' contrato de 1 milhão , 2 milhões de dolares nem passam por a autorização de a diretoria ' Ex-presidente de a @petrobras em a CPI hahahahahaha",
    "marks": [
      {
        "word": "diretoria",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "diretoria",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @ClaudioDeLucca : #PETR4 ' contrato de 1 milhão , 2 milhões de dolares nem passam por a autorização de a diretoria ' Ex-presidente de a @petrobra …",
    "marks": [
      {
        "word": "diretoria",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "diretoria",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Criacao De a Diretoria De Regulacao http://t.co/H9uC5PrF4F",
    "marks": [
      {
        "word": "Diretoria",
        "type": "rel"
      },
      {
        "word": "De Regulação",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Diretoria",
        "subscript": "rel"
      },
      {
        "word": "Regulação",
        "subscript": "case"
      }
    ],
    "args": {
      "arg1": "-",
      "arg2": "De Regulação"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - Mudanca Em a Diretoria Executiva De a Petrobras Distribuidora http://t.co/3n7vTntAVX",
    "marks": [
      {
        "word": "Diretoria",
        "type": "rel"
      },
      {
        "word": "Executiva",
        "type": "arg1"
      },
      {
        "word": "De a Petrobras",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Diretoria",
        "subscript": "rel"
      },
      {
        "word": "Executiva",
        "subscript": "amod"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg1": "Executiva",
      "arg2": "De a Petrobras"
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