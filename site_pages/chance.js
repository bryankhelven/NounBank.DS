document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "PETR4 Petrobras repica em a Bolsa e dá uma chance pra galera ganhar unzinho . Será coincidência o papel subir logo depois de o exercício ? Heeheh",
    "marks": [
      {
        "word": "chance",
        "type": "rel"
      },
      {
        "word": "pra galera",
        "type": "arg0"
      },
      {
        "word": "ganhar unzinho",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "chance",
        "subscript": "rel"
      },
      {
        "word": "galera",
        "subscript": "nsubj"
      },
      {
        "word": "unzinho",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "pra galera",
      "arg1": "ganhar unzinho",
      "arg2": "-"
    }
  },
  {
    "Texto": "Cuidado com VALE5 . IMA-crash de a Vale está ficando muito alto . Grande chance de queda forte em os próx. 2 dias , http://t.co/j9Jxow4GS6",
    "marks": [
      {
        "word": "chance",
        "type": "rel"
      },
      {
        "word": "de queda forte em os próx. 2 dias",
        "type": "arg1"
      },
      {
        "word": "Grande",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "chance",
        "subscript": "rel"
      },
      {
        "word": "queda",
        "subscript": "nmod"
      },
      {
        "word": "Grande",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de queda forte em os próx. 2 dias",
      "arg2": "Grande"
    }
  },
  {
    "Texto": "#VALE5 abaixo de 29,5 tem grandes chances de desabar . #INDJ14 agradece !",
    "marks": [
      {
        "word": "chance",
        "type": "rel"
      },
      {
        "word": "#VALE5",
        "type": "arg0"
      },
      {
        "word": "de desabar - acl",
        "type": "arg1"
      },
      {
        "word": "grandes",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "chance",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "nsubj"
      },
      {
        "word": "desabar",
        "subscript": "case"
      },
      {
        "word": "grandes",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "#VALE5",
      "arg1": "de desabar - acl",
      "arg2": "grandes"
    }
  },
  {
    "Texto": "RT @lambari_trader : @vellozors @ferrisss Dilma não se reelege . A Bolsa já está precificando isso . Olha PETR4 e BBAS3 . A única chance de o PT …",
    "marks": [
      {
        "word": "chance",
        "type": "rel"
      },
      {
        "word": "de o PT",
        "type": "arg0"
      },
      {
        "word": "única",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "chance",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod:wtrunc"
      },
      {
        "word": "única",
        "subscript": "advmod"
      }
    ],
    "args": {
      "arg0": "de o PT",
      "arg1": "-",
      "arg2": "única"
    }
  },
  {
    "Texto": "De o jeito que Rosa Weber é , há mais chances de ser CPI ampla e virar aquela PIZZA e PT se beneficia … Petr4 vai pra baixo … vamos ver …",
    "marks": [
      {
        "word": "chance",
        "type": "rel"
      },
      {
        "word": "e PT se beneficia",
        "type": "arg0"
      },
      {
        "word": "de ser CPI ampla",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "chance",
        "subscript": "rel"
      },
      {
        "word": "beneficia",
        "subscript": "root"
      },
      {
        "word": "ser",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "e PT se beneficia",
      "arg1": "de ser CPI ampla",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @reminiscences : De o jeito que Rosa Weber é , há mais chances de ser CPI ampla e virar aquela PIZZA e PT se beneficia … Petr4 vai para baixo … …",
    "marks": [
      {
        "word": "chance",
        "type": "rel"
      },
      {
        "word": "e PT se beneficia",
        "type": "arg0"
      },
      {
        "word": "de ser CPI ampla",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "chance",
        "subscript": "rel"
      },
      {
        "word": "beneficia",
        "subscript": "root"
      },
      {
        "word": "ser",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "e PT se beneficia",
      "arg1": "de ser CPI ampla",
      "arg2": "-"
    }
  },
  {
    "Texto": "@vellozors @ferrisss Dilma não se reelege . A Bolsa já está precificando isso . Olha PETR4 e BBAS3 . A única chance de o PT é o volta Lula .",
    "marks": [
      {
        "word": "chance",
        "type": "rel"
      },
      {
        "word": "de o PT",
        "type": "arg0"
      },
      {
        "word": "única",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "chance",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      },
      {
        "word": "única",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "de o PT",
      "arg1": "-",
      "arg2": "única"
    }
  },
  {
    "Texto": "Vou ' monitorar ' a operação aqui por o acho que temos boa chance de ter um movimento direcional forte em a PETR4 ..",
    "marks": [
      {
        "word": "chance",
        "type": "rel"
      },
      {
        "word": "temos",
        "type": "arg0"
      },
      {
        "word": "de ter um movimento direcional forte em a PETR4",
        "type": "arg1"
      },
      {
        "word": "boa",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "chance",
        "subscript": "rel"
      },
      {
        "word": "temos",
        "subscript": "ccomp"
      },
      {
        "word": "ter",
        "subscript": "obl"
      },
      {
        "word": "boa",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "temos",
      "arg1": "de ter um movimento direcional forte em a PETR4",
      "arg2": "boa"
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