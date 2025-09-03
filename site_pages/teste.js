document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#PETR4 . Shooting star ( com doji lápide ) em o semanal . Teste de LTB em o gráfico mensal . Gráfico diário com ENGOLFO DE ... http://t.co/Q3q3AgaMEm",
    "marks": [
      {
        "word": "Teste",
        "type": "rel"
      },
      {
        "word": "de LTB",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "Teste",
        "subscript": "rel"
      },
      {
        "word": "LTB",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "de LTB"
    }
  },
  {
    "Texto": "se conseguir romper essa barreira ( R$ 13,85 ) , podemos ver um novo teste de os R$ 13,50 ... #PETR4",
    "marks": [
      {
        "word": "teste",
        "type": "rel"
      },
      {
        "word": "de os R$ 13,50",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "teste",
        "subscript": "rel"
      },
      {
        "word": "os",
        "subscript": "obj"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de os R$ 13,50",
      "arg2": "-"
    }
  },
  {
    "Texto": "novo teste acontecendo agora ! #PETR4 R$ 12,95 ~ 13,00",
    "marks": [
      {
        "word": "teste",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "teste",
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
    "Texto": "fiquemos de olho em um possivel teste em a região de os R$ 13,3 de a #PETR4 ... pode dizer muita coisa . ,)",
    "marks": [
      {
        "word": "teste",
        "type": "rel"
      },
      {
        "word": "em a região de os R$ 13,3 de a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "teste",
        "subscript": "rel"
      },
      {
        "word": "os",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em a região de os R$ 13,3 de a #PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "primeiro teste de a resistência e ela foi forte e segurou . Vai de novo ? #PETR4",
    "marks": [
      {
        "word": "teste",
        "type": "rel"
      },
      {
        "word": "de a resistência",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "teste",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "de a resistência"
    }
  },
  {
    "Texto": "$PBR ( ADR PETR4 ) falhou o teste de quebra de a LTB ...",
    "marks": [
      {
        "word": "teste",
        "type": "rel"
      },
      {
        "word": "de quebra de a LTB",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "teste",
        "subscript": "rel"
      },
      {
        "word": "quebra",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-",
      "arg2": "de quebra de a LTB"
    }
  },
  {
    "Texto": "tentarão levar a #PETR4 a um teste em os R$ 17.75 , por baixo ? o.O Se conseguirem , os caras são heróis ! :)",
    "marks": [
      {
        "word": "teste",
        "type": "rel"
      },
      {
        "word": "em os R$ 17.75",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "teste",
        "subscript": "rel"
      },
      {
        "word": "75",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "em os R$ 17.75",
      "arg2": "-"
    }
  },
  {
    "Texto": "Teste de os R$ 15,1 agora ! Olho em ele ! ! ! #PETR4",
    "marks": [
      {
        "word": "Teste",
        "type": "rel"
      },
      {
        "word": "de os R$ 15,1",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Teste",
        "subscript": "rel"
      },
      {
        "word": "os",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de os R$ 15,1",
      "arg2": "-"
    }
  },
  {
    "Texto": "vamos ver como a #PETR4 se comporta em o teste de os R$ 14,7 agora ... ( que arrancada doida ... 2x por causa de o IBOPE , que legal ... )",
    "marks": [
      {
        "word": "teste",
        "type": "rel"
      },
      {
        "word": "de os R$ 14,7",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "teste",
        "subscript": "rel"
      },
      {
        "word": "os",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de os R$ 14,7",
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