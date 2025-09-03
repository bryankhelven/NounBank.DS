document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1", "arg2"];
  const data = [
  {
    "Texto": "#OIL #BR #PETR4 Petrobras tem sido tímida em relação a a China , diz representante de a estatal . http://t.co/V0jkZVtNW0 #CRUDE",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "Petrobras",
        "type": "arg0"
      },
      {
        "word": "China",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "Petrobras",
        "subscript": "nsubj"
      },
      {
        "word": "China",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "Petrobras",
      "arg1": "-",
      "arg2": "China"
    }
  },
  {
    "Texto": "Lucro Líquido Ajustado de o 1T14 foi de R$ 3,473 bilhões ( + 18 % em relação a o Lucro de R$ 2,943 bilhões em o mesmo período de 2013 ) #BBDC4",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "+ 18 % em relação",
        "type": "arg0"
      },
      {
        "word": "Lucro de",
        "type": "arg1"
      },
      {
        "word": "R$ 2,943 bilhões em o mesmo período de 2013",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "relação",
        "subscript": "nmod"
      },
      {
        "word": "de",
        "subscript": "case"
      },
      {
        "word": "2013",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "+ 18 % em relação",
      "arg1": "Lucro de",
      "arg2": "R$ 2,943 bilhões em o mesmo período de 2013"
    }
  },
  {
    "Texto": "CSN #CSNA3 A cia e o consórcio asiático sócio de a Namisa estão próximos de um consenso em relação a o investimento ... http://t.co/NggvIdgl3I",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "CSN #CSNA3 A cia",
        "type": "arg0"
      },
      {
        "word": "a o investimento",
        "type": "arg1"
      },
      {
        "word": "o consórcio asiático sócio de a Namisa",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "cia",
        "subscript": "nsubj"
      },
      {
        "word": "investimento",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "CSN #CSNA3 A cia",
      "arg1": "a o investimento",
      "arg2": "o consórcio asiático sócio de a Namisa"
    }
  },
  {
    "Texto": "RT @bradesco_ri : Lucro Líquido Ajustado de o 1T14 foi de R$ 3,473 bilhões ( + 18 % em relação a o Lucro de R$ 2,943 bilhões em o mesmo período d …",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "+ 18 % em relação",
        "type": "arg0"
      },
      {
        "word": "Lucro de",
        "type": "arg1"
      },
      {
        "word": "R$ 2,943 bilhões em o mesmo período de 2013",
        "type": "arg2"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "relação",
        "subscript": "nmod"
      },
      {
        "word": "de",
        "subscript": "case"
      },
      {
        "word": "2013",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "+ 18 % em relação",
      "arg1": "Lucro de",
      "arg2": "R$ 2,943 bilhões em o mesmo período de 2013"
    }
  },
  {
    "Texto": "@webtraderx p13 ? Você compra caso acredite que vá cair . Vende se acha que vai subir . Tudo sempre em relação a a PETR4 ...",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "a a PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "PETR4",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "a a PETR4",
      "arg2": "-"
    }
  },
  {
    "Texto": "#VALE5 : O preço de o minério de ferro recuou 8,3 % em relação a ultima sexta-feira para US$ 104,7 a tonelada em o ... http://t.co/5EhMLg8rks",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "8,3 % em",
        "type": "arg0"
      },
      {
        "word": "a ultima sexta-feira",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "em",
        "subscript": "case"
      },
      {
        "word": "feira",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "8,3 % em",
      "arg1": "a ultima sexta-feira",
      "arg2": "-"
    }
  },
  {
    "Texto": "RT @valoramais : #VALE5 : O preço de o minério de ferro recuou 8,3 % em relação a ultima sexta-feira para US$ 104,7 a tonelada em o ... http://t.co…",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "8,3 % em",
        "type": "arg0"
      },
      {
        "word": "a ultima sexta-feira",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "em",
        "subscript": "case"
      },
      {
        "word": "feira",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "8,3 % em",
      "arg1": "a ultima sexta-feira",
      "arg2": "-"
    }
  },
  {
    "Texto": "Vale lucra R$ 5,9 bi em o primeiro trimestre , queda de 4,7 % em relação a 2013 : A mineradora Vale ( VALE3 , VALE ... http://t.co/eEDSbfNDX1",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "4,7 % em",
        "type": "arg0"
      },
      {
        "word": "a 2013",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "em",
        "subscript": "case"
      },
      {
        "word": "2013",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "4,7 % em",
      "arg1": "a 2013",
      "arg2": "-"
    }
  },
  {
    "Texto": "Carteira de Crédito Expandida , em março de 2014 , atingiu R$ 432,297 bilhões , evolução de 10,4 % em relação a o mesmo período de 2013 . #BBDC4",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "10,4 % em",
        "type": "arg0"
      },
      {
        "word": "a o mesmo período de 2013",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "em",
        "subscript": "case"
      },
      {
        "word": "2013",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "10,4 % em",
      "arg1": "a o mesmo período de 2013",
      "arg2": "-"
    }
  },
  {
    "Texto": "E olha VALE5 beliscando os $ 30,00 ! Tava muito atrasada em relação a o mercado …",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "VALE5",
        "type": "arg0"
      },
      {
        "word": "a o mercado",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "VALE5",
        "subscript": "obj"
      },
      {
        "word": "mercado",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "VALE5",
      "arg1": "a o mercado",
      "arg2": "-"
    }
  },
  {
    "Texto": "Os Ativos Totais , em março de 2014 , registraram saldo de R$ 922,229 bilhões , crescimento de 3,1 % em relação a o mesmo período de 2013 . #BBDC4",
    "marks": [
      {
        "word": "relação",
        "type": "rel"
      },
      {
        "word": "3,1 % em",
        "type": "arg0"
      },
      {
        "word": "a o mesmo período de 2013",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "relação",
        "subscript": "rel"
      },
      {
        "word": "em",
        "subscript": "case"
      },
      {
        "word": "2013",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "3,1 % em",
      "arg1": "a o mesmo período de 2013",
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