document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "$DASA3 - Dasa ( dasa-nm ) - Fato Relevante Comunicado Cromossomo Prazo De Encermto . De a Opa http://t.co/uVUVxbGicB",
    "marks": [
      {
        "word": "encerramento",
        "type": "rel"
      },
      {
        "word": "De a Opa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "encerramento",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "parataxis"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De a Opa",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Encerramento De a Licenca De o Diretor De Distribuicao http://t.co/t0zHiXiVwN",
    "marks": [
      {
        "word": "Encerramento",
        "type": "rel"
      },
      {
        "word": "De a Licenca De o Diretor De Distribuicao",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Encerramento",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "De a Licenca De o Diretor De Distribuicao",
      "arg2": "-"
    }
  },
  {
    "Texto": "$PETR3 - Petrobras ( petr ) - encer. de as Inscricoes De o Plano De Incentivo Deslig. Voluntario http://t.co/pmJ0jol3wY",
    "marks": [
      {
        "word": "encerramento",
        "type": "rel"
      },
      {
        "word": "de as Inscricoes De o Plano De Incentivo Deslig. Voluntario",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "encerramento",
        "subscript": "rel"
      },
      {
        "word": "as",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de as Inscricoes De o Plano De Incentivo Deslig. Voluntario",
      "arg2": "-"
    }
  },
  {
    "Texto": "$MRFG3 - Marfrig ( mrfg-nm ) - encerramento Prazo De Preferencia / inicio De o Periodo De Sobras http://t.co/tWzEE1HdrT",
    "marks": [
      {
        "word": "encerramento",
        "type": "rel"
      },
      {
        "word": "Prazo De Preferencia",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "encerramento",
        "subscript": "rel"
      },
      {
        "word": "Preferencia",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "Prazo De Preferencia",
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