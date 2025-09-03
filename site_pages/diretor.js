document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "Notas gerais A PETROBRAS ( PETR4 ) demitiu o diretor financeiro de a subsidiária Petrobras Distribuidora , Nestor ... http://t.co/CMZD46pQOq",
    "marks": [
      {
        "word": "diretor",
        "type": "rel"
      },
      {
        "word": "diretor",
        "type": "arg0"
      },
      {
        "word": "financeiro",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "diretor",
        "subscript": "rel"
      },
      {
        "word": "diretor",
        "subscript": "obj"
      },
      {
        "word": "financeiro",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "diretor",
      "arg1": "financeiro",
      "arg2": "-"
    }
  },
  {
    "Texto": "Car* , comé q' essa mulher ganhou p Presidente de a República ? ' @AryAntiPT : #DilmaNacadeia #PETR4 demite diretor envolvid http://t.co/hgG5EYSd1f",
    "marks": [
      {
        "word": "diretor",
        "type": "rel"
      },
      {
        "word": "diretor",
        "type": "arg0"
      },
      {
        "word": "envolvid",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "diretor",
        "subscript": "rel"
      },
      {
        "word": "diretor",
        "subscript": "obj"
      },
      {
        "word": "envolvid",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "diretor",
      "arg1": "envolvid",
      "arg2": "-"
    }
  },
  {
    "Texto": "Quarentena de diretores ? ! Para ñ terem negócios com a petr4 ... Q solução hein Senador Valadares ? ! Jesuis ...",
    "marks": [
      {
        "word": "diretor",
        "type": "rel"
      },
      {
        "word": "diretores",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "diretor",
        "subscript": "rel"
      },
      {
        "word": "diretores",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "diretores",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "$ELET3 - Eletrobras ( elet-n1 ) - Encerramento De a Licenca De o Diretor De Distribuicao http://t.co/t0zHiXiVwN",
    "marks": [
      {
        "word": "Diretor",
        "type": "rel"
      },
      {
        "word": "Diretor",
        "type": "arg0"
      },
      {
        "word": "De Distribuicao",
        "type": "arg1"
      },
      {
        "word": "Eletrobras ( elet-n1 )",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Diretor",
        "subscript": "rel"
      },
      {
        "word": "Diretor",
        "subscript": "nmod"
      },
      {
        "word": "Distribuicao",
        "subscript": "nmod"
      },
      {
        "word": "n1",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Diretor",
      "arg1": "De Distribuicao",
      "arg2": "Eletrobras ( elet-n1 )"
    }
  },
  {
    "Texto": "Inflação acumul / ' 06 - ' 13 tá em 50 % ! ? MT ' @ivomarcelino #PETR4 finanças vão mal , mas salários diretores R$ 13,5 milhões http://t.co/Eadm8PP064",
    "marks": [
      {
        "word": "diretor",
        "type": "rel"
      },
      {
        "word": "diretores",
        "type": "arg0"
      }
    ],
    "subscripts": [
      {
        "word": "diretor",
        "subscript": "rel"
      },
      {
        "word": "diretores",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "diretores",
      "arg1": "-",
      "arg2": "-"
    }
  },
  {
    "Texto": "Se a crise ficar maior , vamos distribuir água com canequinha , diz diretor de a Sabesp ( #SBSP3 ) . http://t.co/qzCevvOazW",
    "marks": [
      {
        "word": "diretor",
        "type": "rel"
      },
      {
        "word": "diretor",
        "type": "arg0"
      },
      {
        "word": "de a Sabesp ( #SBSP3 )",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "diretor",
        "subscript": "rel"
      },
      {
        "word": "diretor",
        "subscript": "nsubj"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "diretor",
      "arg1": "-",
      "arg2": "de a Sabesp ( #SBSP3 )"
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