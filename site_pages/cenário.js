document.addEventListener('DOMContentLoaded', function() {
  const SHOWN_ARGS = ["arg0", "arg1"];
  const data = [
  {
    "Texto": "por o andar de a carruagem será assim o dia todo ... #PETR4 rondando a região de os R$ 17,75 ... Ou será que o cenário muda um pouco ? ,)",
    "marks": [
      {
        "word": "cenário",
        "type": "rel"
      },
      {
        "word": "muda um pouco ?",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cenário",
        "subscript": "rel"
      },
      {
        "word": "pouco",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "muda um pouco ?"
    }
  },
  {
    "Texto": "@Live_Trade Manda um cenário de fundo para OIBR4 ...",
    "marks": [
      {
        "word": "cenário",
        "type": "rel"
      },
      {
        "word": "de fundo para OIBR4",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cenário",
        "subscript": "rel"
      },
      {
        "word": "fundo",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de fundo para OIBR4"
    }
  },
  {
    "Texto": "#FIBR3 O cenário de preço para a celulose é estável em abril , em a comparação com março , afirmou o presidente de a ... http://t.co/HjpD6gPU9O",
    "marks": [
      {
        "word": "cenário",
        "type": "rel"
      },
      {
        "word": "de preço para a celulose",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cenário",
        "subscript": "rel"
      },
      {
        "word": "preço",
        "subscript": "nmod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "de preço para a celulose"
    }
  },
  {
    "Texto": "RT @Pepez_Legal : @coroneldoblog Amigo , está acompanhando PETR4 ? ? > http://t.co/WxnN4AOaKT A Graça está piorando ainda mais o cenário .. rs …",
    "marks": [
      {
        "word": "cenário",
        "type": "rel"
      },
      {
        "word": "A Graça",
        "type": "arg0"
      },
      {
        "word": "piorando ainda mais o",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cenário",
        "subscript": "rel"
      },
      {
        "word": "Graça",
        "subscript": "nsubj"
      },
      {
        "word": "o",
        "subscript": "det"
      }
    ],
    "args": {
      "arg0": "A Graça",
      "arg1": "piorando ainda mais o"
    }
  },
  {
    "Texto": "Fundo de pensão de a Vale vê cenário difícil e volta a apostar em títulos públicos : O nível d ... http://t.co/Uqlfqrs4Jy #infomoney #vale5",
    "marks": [
      {
        "word": "cenário",
        "type": "rel"
      },
      {
        "word": "difícil",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cenário",
        "subscript": "rel"
      },
      {
        "word": "difícil",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "difícil"
    }
  },
  {
    "Texto": "@ferrisss cai pra 43.8 k teremos crise em o cenário internacional e vai sobrar pra #VALE5 e #PETR4 devido a a desaceleração e gás respectivamente",
    "marks": [
      {
        "word": "cenário",
        "type": "rel"
      },
      {
        "word": "internacional",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cenário",
        "subscript": "rel"
      },
      {
        "word": "internacional",
        "subscript": "amod"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "internacional"
    }
  },
  {
    "Texto": "O melhor cenário em uma operação de venda coberta de opções é vender OTM e a ação subir . É o que está acontecendo com VALE5 , em este momento .",
    "marks": [
      {
        "word": "cenário",
        "type": "rel"
      },
      {
        "word": "O melhor cenário em uma operação de venda coberta de opções é vender OTM e a ação subir . É o que está acontecendo com VALE5 , em este momento .",
        "type": "arg1"
      }
    ],
    "subscripts": [
      {
        "word": "cenário",
        "subscript": "rel"
      },
      {
        "word": "venda",
        "subscript": "obl"
      }
    ],
    "args": {
      "arg0": "-",
      "arg1": "O melhor cenário em uma operação de venda coberta de opções é vender OTM e a ação subir . É o que está acontecendo com VALE5 , em este momento ."
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