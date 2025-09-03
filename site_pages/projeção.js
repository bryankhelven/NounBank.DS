document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "Quem crê em a queda de a China vai afundar junto com suas projeções , diz presidente de a Vale : Pre ... http://t.co/vC4FQxoti0 #infomoney #vale5",
    "marks": [
      {
        "word": "projeção",
        "type": "rel"
      },
      {
        "word": "presidente de a Vale",
        "type": "arg0"
      },
      {
        "word": "Quem crê em a queda de a China vai afundar junto com suas projeções",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeção",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "nmod"
      },
      {
        "word": "a",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "presidente de a Vale",
      "arg1": "Quem crê em a queda de a China vai afundar junto com suas projeções"
    }
  },
  {
    "Texto": "De manhã recebi este gráfico diário de a #PETR4 com as projeções de o finado #Fibonacci . http://t.co/ev8FmON0yB",
    "marks": [
      {
        "word": "projeção",
        "type": "rel"
      },
      {
        "word": "gráfico diário de a #PETR4",
        "type": "arg0"
      },
      {
        "word": "de o finado #Fibonacci",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeção",
        "subscript": "rel"
      },
      {
        "word": "a",
        "subscript": "obj"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "gráfico diário de a #PETR4",
      "arg1": "de o finado #Fibonacci"
    }
  },
  {
    "Texto": "@Live_Trade em as suas projeções , CSNA3 mergulha até que faixa de preço ?",
    "marks": [
      {
        "word": "projeção",
        "type": "rel"
      },
      {
        "word": "@Live_Trade",
        "type": "arg0"
      },
      {
        "word": "CSNA3 mergulha até que faixa de preço ?",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeção",
        "subscript": "rel"
      },
      {
        "word": "Trade",
        "subscript": "vocative"
      },
      {
        "word": "preço",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "@Live_Trade",
      "arg1": "CSNA3 mergulha até que faixa de preço ?"
    }
  },
  {
    "Texto": "18 ações passam por ' ressaca ' após carnaval e fecham em queda , Vale recua 3 % : Mesmo com proj ... http://t.co/GNveU1iOgh #infomoney#vale5",
    "marks": [
      {
        "word": "projeção",
        "type": "rel"
      }
    ],
    "subscripts": [
      {
        "word": "projeção",
        "subscript": "rel"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "-"
    }
  },
  {
    "Texto": "$AEDU3 - Anhanguera ( aedu-nm ) - Fato Relevante - Projecoes Financeiras Para O Ano De 2014 http://t.co/X0dQsYyLkh",
    "marks": [
      {
        "word": "projeção",
        "type": "rel"
      },
      {
        "word": "$AEDU3 - Anhanguera ( aedu-nm )",
        "type": "arg0"
      },
      {
        "word": "Financeiras Para O Ano De 2014",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeção",
        "subscript": "rel"
      },
      {
        "word": "nm",
        "subscript": "nmod"
      },
      {
        "word": "O",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "$AEDU3 - Anhanguera ( aedu-nm )",
      "arg1": "Financeiras Para O Ano De 2014"
    }
  },
  {
    "Texto": "projeção de volume para a #PETR4 tá monstruosa ! Mais de 50 milhões de ações ! o.O De olhoooo ! ! !",
    "marks": [
      {
        "word": "projeção",
        "type": "rel"
      },
      {
        "word": "de volume para a #PETR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeção",
        "subscript": "rel"
      },
      {
        "word": "volume",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de volume para a #PETR4"
    }
  },
  {
    "Texto": "e a projeção de volume de a #PETR4 hein ? Chegou perto de romper os 100000000 de ações . o.O",
    "marks": [
      {
        "word": "projeção",
        "type": "rel"
      },
      {
        "word": "de volume de a #PETR4 hein ?",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeção",
        "subscript": "rel"
      },
      {
        "word": "volume",
        "subscript": "discourse"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de volume de a #PETR4 hein ?"
    }
  },
  {
    "Texto": "Ei , só uma observação . PETR4 ainda tem projeção de baixa . Fica calmo amigo que fica se gabando de essa alta ...",
    "marks": [
      {
        "word": "projeção",
        "type": "rel"
      },
      {
        "word": "de baixa",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeção",
        "subscript": "rel"
      },
      {
        "word": "baixa",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de baixa"
    }
  },
  {
    "Texto": "Entrei em #petr4 , com projeção de crescimento . #hype3 ta maravilhosa , continua em a tendência de alta .",
    "marks": [
      {
        "word": "projeção",
        "type": "rel"
      },
      {
        "word": "de crescimento",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "projeção",
        "subscript": "rel"
      },
      {
        "word": "crescimento",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de crescimento"
    }
  },
  {
    "Texto": "Projeção para o preço de abertura de a #VALE5 em função de a arbitragem de a ADR e de o dolar de este momento : R$ 28,78",
    "marks": [
      {
        "word": "Projeção",
        "type": "rel"
      },
      {
        "word": "para o preço de abertura de a #VALE5",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "Projeção",
        "subscript": "rel"
      },
      {
        "word": "o",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "para o preço de abertura de a #VALE5"
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